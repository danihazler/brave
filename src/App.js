import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './components/sections/intro/Intro';
import Showreel from './components/sections/showreel/Showreel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount(){
    AOS.init();

    new ScrollMagic.Scene({
      triggerElement: "#_header-trigger",
      triggerHook: 0
    })
    .setClassToggle("header", "fade-out")
    .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: ".greeting",
      triggerHook: 0.5
    })
    .setClassToggle("#intro-logo", "slide-up")
    .addTo(this.controller);
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <Showreel />
      </div>
    );
  }
}

export default App;
