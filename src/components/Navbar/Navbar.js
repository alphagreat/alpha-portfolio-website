import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Main-nav">
      <ul className="logo">
        <li>
          <Link to="/">alphaGreat</Link>
        </li>
      </ul>
      <ul className="Nav-items">
        <li>Operations</li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
