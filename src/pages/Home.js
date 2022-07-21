import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <h1>Lorenzo Tognini</h1>
        <h3>Software developer & Graphic Deisigner</h3>
      </div>

      <div className="cont cont1 boxes">
        <NavLink to="/identify">
          <SmallBox
            titolo="Identify"
            testo="Logo & branding"
            icon={Id}
            item="firstBox"
          />
        </NavLink>
        <NavLink to="/connect">
          <SmallBox
            titolo="Connect "
            testo="Online presence"
            icon={Co}
            item="secondBox"
          />
        </NavLink>
        <NavLink to="/show">
          <SmallBox
            titolo="Show"
            testo="Photo shooting"
            icon={Sh}
            item="thirdBox"
          />
        </NavLink>
      </div>
      <Contact />
    </div>
  );
}
