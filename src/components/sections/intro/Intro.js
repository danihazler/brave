import React, { Component } from 'react';
import './Intro.css';

import whiteLogo from "../../../assets/images/white_logo.png"

const Intro = () => {
  return(
    <div>
      <header id="_header-trigger">
        <nav className="flex">
          <div className="nav-menu">
          Menu
          </div>
          <div className="nav-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div className="white-bg">
        <section className="intro flex f-column">
          <div id="intro-logo">
            <img src={whiteLogo} alt="Lagardere Logo"/>
          </div>
          <div className="greeting">
            <h2>Hel
              <span id="l">l</span>
              <span id="o">o</span>
              <span id="dot"></span>
            </h2>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Intro;
