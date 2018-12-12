import React, { Component } from 'react';
import './Showreel.css';

import blackLogo from "../../../assets/images/black_logo.png";
import showVideo from "../../../assets/videos/showreel.mp4";

const Showreel = () => {
  return (
    <section className="showreel">
      <div className="curtain flex f-column">
        <div className="navbar flex">
          <div className="nav-logo">
            <img src={blackLogo} alt="Lagardere Logo" />
          </div>
          <div className="_header">
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
          </div>
        </div>
        <video id="showreel" width="720" height="480" controls>
          <source src={showVideo} type="video/mp4" />
            Your browser does not support HTML5.
        </video>
      </div>
    </section>
  )
}

export default Showreel;
