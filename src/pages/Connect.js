import React from 'react';
import logo from '../assets/images/connect_glow.png';
import icon from '../assets/images/connect_line.png';
import Servicebox from '../components/Servicebox.js';
import Iconul from '../components/Iconul.js';
import Gallery from '../components/Idgallery.js';
import Contact from '../components/Contact.js';

export default function Connect() {
  return (
    <div className="page-container">
      <div className="icon-head header">
        <img className="icon-cont" src={logo} alt="logo" />
        <div>
          <h1>Connect</h1>
          <h3>Online presence</h3>
        </div>
      </div>
      <div className="cont row boxed">
        <Iconul
          icon={icon}
          titolo="Siti Web"
          testo="La tua identità digitale per creare una comunity e per migliorare la tua presenza sul mercato"
        />
        <Iconul
          icon={icon}
          titolo="eCommerce"
          testo="Crea nuovi canali di vendita e raggiungi nuovi clienti"
        />
        <Iconul
          icon={icon}
          titolo="CRM"
          testo="Miglioramento dei processi aziendali, dell'organizzazione della documentazione e della gestione efficace di tutti i dati aziendali"
        />
      </div>

      <Contact />
    </div>
  );
}
