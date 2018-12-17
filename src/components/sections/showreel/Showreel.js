import React, { Component } from 'react';
import posed from 'react-pose';
import './Showreel.css';

import blackLogo from "../../../assets/images/black_logo.png";
import showVideo from "../../../assets/videos/showreel.mp4";

class Showreel extends Component {

  render(){
    return (
      <section className="showreel">
        <div className="curtain flex f-column">
          <div className="navbar flex">
            <div className="nav-logo"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <img src={blackLogo} alt="Lagardere Logo" />
            </div>
            <div className="_header">
              <nav className="flex"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              >
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
          <div className="curtain-left">
            <div id="show" className="flex">
            <span
            data-aos="fade-down"
            data-aos-duration="1000"
            >S
            </span>
            <span
            data-aos="fade-up"
            data-aos-duration="1000"
            >H
            </span>
            <span
            data-aos="fade-down"
            data-aos-duration="1000"
            >O
            </span>
            <span
            data-aos="fade-up"
            data-aos-duration="1000"
            >W
            </span>
            </div>
            <div id="arrows-left">
              <span className="slide-arrow"></span>
              <span className="slide-arrow"></span>
              <span className="slide-arrow"></span>
            </div>
          </div>
          <video
            id="showreel"
            width="720"
            height="480"
            controls
            data-aos="zoom-in"
            data-aos-delay="1000"
            >
            <source src={showVideo} type="video/mp4" />
              Your browser does not support HTML5.
          </video>
          <div className="curtain-right">
            <div id="reel" className="flex">
              <span
                data-aos="fade-down"
                data-aos-duration="1000"
              >
              R
              </span>
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
              >
              E
              </span>
              <span
                data-aos="fade-down"
                data-aos-duration="1000"
              >E
              </span>
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
              >L
              </span>
            </div>
            <div id="arrows-right">
            <span className="slide-arrow"></span>
            <span className="slide-arrow"></span>
            <span className="slide-arrow"></span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Showreel;
