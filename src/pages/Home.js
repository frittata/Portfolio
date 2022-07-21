import React from 'react';
import logo from '../assets/images/logo-home.png';
import Id from '../assets/images/identify.png';
import Sh from '../assets/images/show.png';
import Co from '../assets/images/connect.png';
import SmallBox from '../components/SmallBox.js';
import Contact from '../components/Contact.js';

export default function Home() {
  return (
    <div className="page-container">
      <div className="header">
        <img className="logo-cont" src={logo} alt="logo" />
        <h1>LT Web Studio</h1>
        <h3>Crea la tua identità digitale</h3>
      </div>
      <div className="cont">
        <h2>
          Raggiungi i tuoi obiettivi
          <br /> tramite servizi personalizzati per le tue esigenze. <br />
        </h2>
      </div>

      <div className="cont cont1">
        <SmallBox
          titolo="Identify"
          testo="Logo & branding"
          icon={Id}
          item="firstBox"
        />
        <SmallBox
          titolo="Connect "
          testo="Online presence"
          icon={Co}
          item="secondBox"
        />
        <SmallBox
          titolo="Show"
          testo="Photo shooting"
          icon={Sh}
          item="thirdBox"
        />
      </div>
      <Contact />
    </div>
  );
}
