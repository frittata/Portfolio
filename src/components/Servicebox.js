import React from 'react';

function Servicebox({ titolo, testo }) {
  const boxStyle = {
    borderRadius: '8px',
    backgroundImage: `url("../assets/images/lineAsset 5c.png")`,
  };

  return (
    <div className="cont33 skill-box" style={boxStyle}>
      <div className="box-info">
        <h2>{titolo}</h2>
        <div className="separator" />
        <p className="info-hide">{testo}</p>
      </div>
    </div>
  );
}

export default Servicebox;
