import React from 'react';
import logo from '../assets/images/identify_glow.png';
import icon from '../assets/images/identify_line.png';
import Servicebox from '../components/Servicebox.js';
import Iconul from '../components/Iconul.js';
import Gallery from '../components/Idgallery.js';
import Contact from '../components/Contact.js';

export default function Identify() {
  return (
    <div className="page-container">
      <div className="icon-head header">
        <img className="icon-cont" src={logo} alt="logo" />
        <div>
          <h1>Graphic Design</h1>
          <h3>Identify your reality</h3>
        </div>
      </div>
      <div className="cont row boxed">
        <Iconul
          icon={icon}
          titolo="Brand Identity"
          testo="Identifica la tua azienda con una forte brand identity, dalla creazione del logo allo studio dei colori, allo stile dei testi e a mockups"
        />
        <Iconul
          icon={icon}
          titolo="Rebranding"
          testo="Rinnovo del branding. Aggiorna o completa la tua brand identity partendo da una esistente"
        />
        <Iconul
          icon={icon}
          titolo="Graphic contents"
          testo="Sviluppo di grafiche personalizzate per i tuoi canali di comunicazioni, sia digitali che non. Arricchisci i tuoi social, le fiere o il tuo sito Web con nuovi contenuti"
        />
      </div>

      <Contact />
    </div>
  );
}
