import React, { useState, Component } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';
import { GrFormNext } from 'react-icons/gr';
import SmallLogo from '../assets/images/logo.png';

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  margin: auto;
  padding: 1rem 0;
  .underline {
    background-color: var(--green);
    height: 4px;
    width: 0;
    margin-top: -5px;
    margin-left: 10%;
  }
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    padding: 1em 2em;
    background-color: var(--very-deep-dark);
    border-radius: 8px;
    li {
      display: inline-block;
      padding: 0.5rem 0;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover .underline {
        width: 80%;
      }
    }
    .logo-home {
      float: left;
      margin-left: 20px;
      padding: 0;
      &:hover {
        background-color: transparent;
      }
    }
    .logo-home a {
      padding: 0;
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    a:hover {
      color: var(--green);
    }
    .active {
      //display: none;
      transform: scale(1.1);
      color: var(--green);
      font-weight: bold;
      background: -webkit-linear-gradient(
        0deg,
        var(--green) 0%,
        var(--gray-logo) 50%,
        var(--green) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 1200% 100%;
      animation: gradient 10s;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    bottom: 0;
    right: 0;
    padding: 0;
    top: unset;
    height: fit-content;
    ul {
      text-align: right;
    }
    .mobile-menu-icon {
      display: block;
    }
    .hide-item {
      transform: translateX(calc(100% - var(--bottom)));
    }
    ul .logo-home {
      position: initial;
    }
    .navItems {
      --bottom: -1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      position: absolute;
      right: 1rem;
      bottom: var(--bottom);
      width: auto;
      max-width: 250px;
      border-radius: 8px;
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        margin-top: 2rem;
        * {
          pointer-events: none;
        }
      }
      a {
        padding: 1rem;
      }
      li {
        display: block;
      }
    }
  }
`;

function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const isHide = useState(false);

  return (
    <NavMenuStyle>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item menu' : 'navItems menu'}>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Studio
          </NavLink>
          <div className="underline" />
        </li>
        <li>
          <NavLink
            to="/identify"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Identify
          </NavLink>
          <div className="underline" />
        </li>
        <li>
          <NavLink
            to="/connect"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Connect
          </NavLink>
          <div className="underline" />
        </li>
        <li>
          <NavLink
            to="/show"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Show
          </NavLink>
          <div className="underline" />
        </li>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
      </ul>
    </NavMenuStyle>
  );
}

export default NavMenu;
