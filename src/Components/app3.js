import React from 'react';
function App3(props) {
  return (
    <div className="App">
      <iframe
        //Koramangla
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.540494342415!2d77.61159277538401!3d12.935491968977425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc2d%3A0x1681f38e8c00ae56!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698489589511!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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

export default App3;