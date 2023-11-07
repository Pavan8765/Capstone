import React from "react";
function App1(props) {
  return (
    <div className="App">
      <iframe
        //indiranagar
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13306.10992741978!2d77.62986171470506!3d12.973820514904219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a418770391%3A0xb50f46b826501036!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698489004067!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        width="700"
        height="750"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <h3>
        Total Available parking spots are {props.space} out of {props.total}
      </h3>
    </div>
  );
}

export default App1;
