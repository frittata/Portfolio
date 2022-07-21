import React from 'react';

function Iconul({ titolo, testo, icon }) {
  return (
    <div className="price-main">
      <div className="pricecont">
        <img src={icon} height="40px" width="40px" alt="itemicon" />

        <div className="price-title">
          <h2>{titolo}</h2>
          <p>{testo}</p>
        </div>
      </div>
    </div>
  );
}

export default Iconul;
