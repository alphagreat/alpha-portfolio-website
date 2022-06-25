import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="main-nav">
      <ul className="logo">
        <li>alphaGreat</li>
      </ul>
      <ul className="nav-items">
        <li>Operations</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
