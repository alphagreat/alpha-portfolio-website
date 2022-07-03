import React from "react";
import "./Footer.css";

import ig from "../../../public/ig.png";
import fb from "../../../public/fb.png";
import lin from "../../../public/in.png";
import twitter from "../../../public/twitter.png";

function Footer(props) {
  return (
    <footer className="Footer-component" style={props.style}>
      <div className="Logo-and-nav">
        <div className="Footer-logo">
          <p>
            <spana className="Alpha-bold">alpha</spana>Great
          </p>
        </div>
        <div className="line"></div>
        <div className="Footer-nav">
          <div className="footer-nav-items">
            <ul>
              <li>Operations</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
            <p className="copyright">
              &copy; 2022 alphaGreat All Rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="Contact-details">
        <div className="Social-media-pics">
          <a href="#">
            <img src={fb} className="s-img" alt="facebook logo" />
          </a>
          <a href="#">
            <img src={ig} className="s-img" alt="instagram logo" />
          </a>
          <a href="#">
            <img src={twitter} className="s-img" alt="twitter logo" />
          </a>
          <a href="#">
            <img src={lin} className="s-img" alt="linkedin logo" />
          </a>
        </div>
        <p>Alpha Great</p>
        <p>Spintex. Rd, Shell bus stop</p>
        <p>P. O. Box TN 1717</p>
        <p>Tel: +233 (0)559120555/ 247736843 / 246076373</p>
        <p>alphagreatgroup@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
