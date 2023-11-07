from flask import Flask
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO
from pklot import get_parking_spots_bboxes, calc_diff, empty_or_not
import cv2
import numpy as np

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# app = Flask(__name__)
# cors = CORS(app)           #used to serve requests to same domain(refer cors documentation for further details)

json_text = [
    {
        'id' : 1,
        'space' : 100,
        'location' : 'Jayanagara',
    },
    {
        'id' : 2,
        'space' : 200,
        'location' : 'MG Road',
    },
    {
        'id' : 3,
        'space' : 150,
        'location' : 'Indiranagara'
    },
]
@app.route('/getParking')
def getParking():
    return json_text;

@app.route('/')
def home():
    return "<h1>Hello World</h1>"

def get_spots(mask,video_path,loc,client_path):
    mask = cv2.imread(mask, 0)
    cap = cv2.VideoCapture(video_path)
    connected_components = cv2.connectedComponentsWithStats(mask, 4, cv2.CV_32S)
    spots = get_parking_spots_bboxes(connected_components)
    
    spots_status = [None for j in spots]
    diffs = [None for j in spots]
    
    previous_frame = None
    frame_nmr = 0
    ret = True
    step = 30
    
    while ret:
        ret, frame = cap.read()
        if frame_nmr % step == 0 and previous_frame is not None:
            for spot_indx, spot in enumerate(spots):
                x1, y1, w, h = spot
    
                spot_crop = frame[y1:y1 + h, x1:x1 + w, :]
    
                diffs[spot_indx] = calc_diff(spot_crop, previous_frame[y1:y1 + h, x1:x1 + w, :])
    
            # print([diffs[j] for j in np.argsort(diffs)][::-1])
    
        if frame_nmr % step == 0:
            if previous_frame is None:
                arr_ = range(len(spots))
            else:
                max_diff = np.amax(diffs)
                if max_diff != 0:
                    arr_ = [j for j in np.argsort(diffs) if diffs[j] / max_diff > 0.4]
                else:
                    arr_ = []
            for spot_indx in arr_:
                spot = spots[spot_indx]
                x1, y1, w, h = spot
    
                spot_crop = frame[y1:y1 + h, x1:x1 + w, :]
    
                spot_status = empty_or_not(spot_crop)
    
                spots_status[spot_indx] = spot_status
    
        if frame_nmr % step == 0:
            previous_frame = frame.copy()
    
        for spot_indx, spot in enumerate(spots):
            spot_status = spots_status[spot_indx]
            x1, y1, w, h = spots[spot_indx]
    
            if spot_status:
                frame = cv2.rectangle(frame, (x1, y1), (x1 + w, y1 + h), (0, 255, 0), 2)
            else:
                frame = cv2.rectangle(frame, (x1, y1), (x1 + w, y1 + h), (0, 0, 255), 2)
    
        cv2.rectangle(frame, (80, 20), (550, 80), (0, 0, 0), -1)
        cv2.putText(frame, 'Available spots: {} / {}'.format(str(sum(spots_status)), str(len(spots_status))), (100, 60),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
    
        # cv2.namedWindow('frame', cv2.WINDOW_NORMAL)
        # cv2.imshow('frame', frame)
        spots_dict = [
            {
                'id' : 2 if client_path == 'sent_pklot' else 1,
                'space' : sum(spots_status),
                'total' : len(spots_status),
                'location' : loc,
            },
        ]
        if frame_nmr % step == 0:
            socketio.emit(client_path, spots_dict)
        if cv2.waitKey(25) & 0xFF == ord('q'):
            break
        
        frame_nmr += 1
    
    cap.release()
    cv2.destroyAllWindows()

@socketio.on('get_parking_spaces')
def get_parking_spots(message):
    mask = './mask.png'
    video_path = './parking_loop.mp4'
    location = 'MG Road'
    client_path = 'sent_parking_spaces'
    get_spots(mask,video_path,location,client_path)

@socketio.on('get_pklot')
def get_pklot(message):
    mask = './pklot_mask1.png'
    video_path = './pklot.mp4'
    location = 'Indiranagar'
    client_path = 'sent_pklot'
    get_spots(mask,video_path,location,client_path)

if __name__ == '__main__':
    app.run(debug=True)







# from flask import Flask, render_template
# from flask_socketio import SocketIO

# app = Flask(__name__)
# socketio = SocketIO(app, cors_allowed_origins="*")  # Enable CORS for all origins

# @app.route('/')
# def index():
#     return 'Hello World';

# @socketio.on('get_spaces')
# def handle_message(message):
#     # Handle the message from the client and send a response back
#     socketio.emit('available_spaces', 'message {}'.format(message))

# if __name__ == '__main__':
#     socketio.run(app,debug=True)