import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage';
// import AboutUs from './components/AboutUs/AboutUs';
import CoreValueTop from './components/AboutUs/CoreValueTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar />
        <HomePage /> */}
        {/* <AboutUs /> */}
        <CoreValueTop />
      </div>
    );
  }
}

export default App;
