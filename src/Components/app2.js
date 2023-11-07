import React from 'react';
function App2(props) {
  return (
    <div className="App">
      <iframe
        //shivajinagar
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.149586480946!2d77.59495919009784!3d12.985445706392605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1663d0a00d7b%3A0x421803b945207ea4!2sShivaji%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698489333886!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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

export default App2;