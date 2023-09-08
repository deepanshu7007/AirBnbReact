import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/heroSection"
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero/>
      </div>
    );
  }
}

export default App;
