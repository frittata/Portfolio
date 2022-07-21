import React from 'react';

function SmallBox({ titolo, testo, icon, item }) {
  const boxStyle = {
    borderRadius: '8px',
  };

  return (
    <div className="cont33 black-box" style={boxStyle}>
      <img className="box-icon" src={icon} alt="icon" />
      <div className="box-info">
        <h2>{titolo}</h2>
        <p>{testo}</p>
      </div>
    </div>
  );
}

export default SmallBox;
