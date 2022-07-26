import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
        {/* <Navbar />
        <HomePage />
        <AboutUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
