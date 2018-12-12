import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './components/sections/intro/Intro';
import Showreel from './components/sections/showreel/Showreel';
import './App.css';

class App extends Component {

  componentDidMount(){
    AOS.init();
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
