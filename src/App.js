import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage';
// import AboutUs from './components/AboutUs/AboutUs';
import CoreValueTop from './components/AboutUs/CoreValue/CoreValueTop';
import CoreValueDown from './components/AboutUs/CoreValue/CoreValueDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar />
        <HomePage /> */}
        {/* <AboutUs /> */}
        {/* <CoreValueTop />
        <CoreValueDown />
        <CoreValueTop />
        <CoreValueDown /> */}
      </div>
    );
  }
}

export default App;
