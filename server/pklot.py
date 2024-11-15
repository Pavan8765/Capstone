import cv2
import pickle
import matplotlib.pyplot as plt
from skimage.transform import resize
import numpy as np

def calc_diff(im1, im2):
    return np.abs(np.mean(im1) - np.mean(im2))

    
EMPTY = True
NOT_EMPTY = False
model = pickle.load(open("SVC_model.p", "rb"))

def empty_or_not(spot_bgr):

    slot_data = []

    img_resized = resize(spot_bgr, (15, 15, 3))
    slot_data.append(img_resized.flatten())
    slot_data = np.array(slot_data)

    y_output = model.predict(slot_data)

    if y_output == 0:
        return EMPTY
    else:
        return NOT_EMPTY
    
def get_parking_spots_bboxes(connected_components):
    (totalLabels, label_ids, values, centroid) = connected_components

    slots = []
    coef = 1
    for i in range(1, totalLabels):

        # extracting the coordinate points
        x1 = int(values[i, cv2.CC_STAT_LEFT] * coef)
        y1 = int(values[i, cv2.CC_STAT_TOP] * coef)
        w = int(values[i, cv2.CC_STAT_WIDTH] * coef)
        h = int(values[i, cv2.CC_STAT_HEIGHT] * coef)

        slots.append([x1, y1, w, h])

    return slots

def get_parking_spots():
    mask = './mask.png'
    video_path = './parking_loop.mp4'
    
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
                arr_ = [j for j in np.argsort(diffs) if diffs[j] / np.amax(diffs) > 0.4]
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
    
            frame = cv2.rectangle(frame, (x1, y1), (x1 + w, y1 + h), (255, 255, 0), 2)
            # if spot_status:
            #     frame = cv2.rectangle(frame, (x1, y1), (x1 + w, y1 + h), (0, 255, 0), 2)
            # else:
            #     frame = cv2.rectangle(frame, (x1, y1), (x1 + w, y1 + h), (0, 0, 255), 2)
    
        cv2.rectangle(frame, (80, 20), (550, 80), (0, 0, 0), -1)
        cv2.putText(frame, 'Available spots: {} / {}'.format(str(sum(spots_status)), str(len(spots_status))), (100, 60),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
    
        cv2.namedWindow('frame', cv2.WINDOW_NORMAL)
        cv2.imshow('frame', frame)
        spots_dict = {
            'id' : 1,
            'space' : sum(spots_status),
            'location' : 'MG Road',
        }
        print(spots_dict)
        if cv2.waitKey(25) & 0xFF == ord('q'):
            break
        
        frame_nmr += 1
    
    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    get_parking_spots()