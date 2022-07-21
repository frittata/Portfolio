import React from 'react';
import logo from '../assets/images/show_glow.png';
import icon from '../assets/images/show_line.png';
import Servicebox from '../components/Servicebox.js';
import Iconul from '../components/Iconul.js';
import Gallery from '../components/Idgallery.js';
import Contact from '../components/Contact.js';

export default function Show() {
  return (
    <div className="page-container">
      <div className="icon-head header">
        <img className="icon-cont" src={logo} alt="logo" />
        <div>
          <h1>Show</h1>
          <h3>Explore your world</h3>
        </div>
      </div>
      <div className="cont row boxed">
        <Iconul
          icon={icon}
          titolo="Shooting fotografici"
          testo="Creazione di materiale fotografico per i tuoi eventi e per condividere il tuo business"
        />
        <Iconul
          icon={icon}
          titolo="Videomaking"
          testo="Realizzazione di video e montaggi per condividere il tuo metodo di lavoro e i processi che ti contraddistinguono"
        />
      </div>

      <Contact />
    </div>
  );
}
