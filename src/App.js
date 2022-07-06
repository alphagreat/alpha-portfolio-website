import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Homepage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomePage />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
