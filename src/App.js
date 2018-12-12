import React, { Component } from 'react';
import Intro from './components/sections/intro/Intro';
import Showreel from './components/sections/showreel/Showreel';
import './App.css';

class App extends Component {
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
