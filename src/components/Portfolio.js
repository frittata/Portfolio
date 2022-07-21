import React from 'react';

function Portfolio({ titolo, testo }) {
  const boxStyle = {
    borderRadius: '8px',
    backgroundImage: `url("../assets/images/lineAsset 5c.png")`,
  };

  return (
    <div className="cont">
      <div className="box-info">
        <h2>Recent works</h2>
        <div className="separator" />
        <p className="info-hide">{testo}</p>
      </div>
    </div>
  );
}

export default Portfolio;
