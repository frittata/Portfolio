import React from 'react';

function Contact() {
  return (
    <div className="cont">
      <div className="circle" />
      <div className="cont-head">
        <h2>Focus on your goal</h2>
      </div>
      <div className="margin50">
        <a className="button" href="mailto:tua@email.com">
          Mail
        </a>
        <a className="button" href="https://wa.me/393926897468">
          Chat
        </a>
        <a
          className="button"
          href="https://www.linkedin.com/in/lorenzo-tognini-35293a1bb/"
        >
          in
        </a>
      </div>
    </div>
  );
}

export default Contact;
