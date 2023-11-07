import { useEffect, useState } from 'react'
import '../globals.css'
// import axios from './axios'
import io from 'socket.io-client';
import App5 from './app5';

const socket = io('http://localhost:5000');

function Maps({ Component, pageProps }) {
  const [spots, setSpots] = useState([]);
  const [isError, setIsError] = useState("");
  
  // const getSpots = async () => {
  //   try{
  //     const res = await axios.get('/getParking', {
  //       headers: {
  //         'Access-Control-Allow-Origin' : '*',
  //         'Access-Control-Allow-Methods': 'GET,POST',
  //         'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  //       },
  //     }
  //     );
  //     setSpots(res.data);
  //   }catch(err){
  //     setIsError(err.message);
  //   }
  // }

  // useEffect(() => {
  //   getSpots();
  // }, [])

  useEffect(() => {
    try {
      socket.emit('get_parking_spaces', 'Hello from client');
      // socket.emit('get_pklot', 'Hello from client');
  
      // Receive messages from the server
      socket.on('sent_parking_spaces', data => {
          // Handle the message from the server
          console.log(data);
          setSpots(data);
      });
      socket.on('sent_pklot', data => {
          // Handle the message from the server
          console.log(data);
          setSpots(data);
      });

      // Clean up on unmount
      return () => {
          socket.disconnect();
      };
    } catch (error) {
      setIsError(error.message);
    }
  }, [])

  return (
    <>
      <h1>Showing Available Parking spots</h1>
      {isError !== "" && <h3>{isError}</h3>}
      {spots.map((spot) => {
        const {id, space, total, location} = spot;
        return (
          <div className='parking_spots' key={id}>
            {/* <h3>Total Available parking spots at {location} are {space} out of {total}</h3> */}
            <App5 space={space} total={total} location="indiranagr"/>
          </div>
        )
      })}
    </>
  )
}

export default Maps;









// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Replace with your Flask server address

// const App = () => {
//     useEffect(() => {
//         // Send a message to the server
//         socket.emit('get_spaces', 'Hello from client');

//         // Receive messages from the server
//         socket.on('available_spaces', message => {
//             console.log('Message from server:', message);
//             // Handle the message from the server
//         });

//         // Clean up on unmount
//         return () => {
//             socket.disconnect();
//         };
//     }, []); // Empty dependency array ensures this effect runs once after the initial render

//     return (
//         <div className="App">
//             <h1>Real-time App</h1>
//             {/* Your UI components */}
//         </div>
//     );
// };

// export default App;