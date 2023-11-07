import { useEffect, useState } from "react";
import "./ParkingplaceR2.css";
import { Link } from "react-router-dom";
import App5 from "./app5";
import "../globals.css";
// import axios from './axios'
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function ParkingplaceI2({ Component, pageProps }) {
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
      socket.emit("get_parking_spaces", "Hello from client");
      // socket.emit('get_pklot', 'Hello from client');

      // Receive messages from the server
      socket.on("sent_parking_spaces", (data) => {
        // Handle the message from the server
        console.log(data);
        setSpots(data);
      });
      socket.on("sent_pklot", (data) => {
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
  }, []);

  return (
    <>
      {isError !== "" && <h3>{isError}</h3>}
      {spots.map((spot) => {
        const { id, space, total, location } = spot;
        return (
          //   <div className='parking_spots' key={id}>
          //     <h3>Total Available parking spots at {location} are {space} out of {total}</h3>
          //   </div>
          <div className="ParkingplaceI2_ParkingplaceI2" key={id}>
            <div className="Rectangle27" />
            <span className="Parkingrid">Parkingrid</span>
            <div className="Rectangle28" />
            <span className="Indiranagar">Rajajinagar</span>
            <Link to="/">
              <span className="Home">Home</span>
            </Link>
            <br /> <br /> <br /> <br /> <br />
            <App5 space={space} location={location} total={total} />
          </div>
        );
      })}
    </>
  );
}
