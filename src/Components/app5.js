import React from 'react';
function App5(props) {
  return (
    <div className="App">
      <iframe
        //Rajajinagar
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.12394134956!2d77.53147867544193!3d12.994830805556344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df30cb8f5c5%3A0x4fd69ee1b53c32a!2sRajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698489821761!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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

export default App5;