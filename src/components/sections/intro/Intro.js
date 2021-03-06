import React from 'react';
import './Intro.css';

import whiteLogo from "../../../assets/images/white_logo.png"

const Intro = () => {
  return(
    <React.Fragment>
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
      <div className="white-bg" id="_pinIntro">
        <section className="intro flex f-column">
          <div id="intro-logo">
            <img src={whiteLogo} alt="Lagardere Logo"/>
          </div>
          <span id="_intro-trigger"></span>
          <div className="greeting">
            <h2>Hel
              <span id="l">l</span>
              <span id="o">o</span>
              <span id="dot"></span>
            </h2>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Intro;
