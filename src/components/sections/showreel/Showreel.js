import React, { Component } from 'react';
import posed from 'react-pose';
import './Showreel.css';

import blackLogo from "../../../assets/images/black_logo.png";
import showVideo from "../../../assets/videos/showreel.mp4";

class Showreel extends Component {
  state = {
    isVisible: false
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isVisible: !this.state.isVisible
      })
    }, 1000)
  }

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
        </div>
      </section>
    )
  }
}

export default Showreel;
