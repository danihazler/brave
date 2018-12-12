import React, { Component } from 'react';
import posed from 'react-pose';
import './Showreel.css';

import blackLogo from "../../../assets/images/black_logo.png";
import showVideo from "../../../assets/videos/showreel.mp4";

const LogoAnime = posed.img({
  hidden: {opacity: 0},
  visible: {opacity:1}
})

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
              data-aos="slide-right"
              data-aos-duration="3000"
            >
              <LogoAnime src={blackLogo} alt="Lagardere Logo" />
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
}

export default Showreel;
