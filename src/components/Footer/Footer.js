import React from "react";
import "./Footer.css";

import ig from "../../images/ig.png";
import fb from "../../images/fb.png";
import lin from "../../images/in.png";
import twitter from "../../images/twitter.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(props) {
  return (
    <Container fluid>
      <footer className="Footer-component" style={props.style}>
        <Row>
          <Col lg={2} className="left">
            <p>
              <span className="Alpha-bold">alpha</span>Great
            </p>
          </Col>
          <Col className="middle">
            <p>
              <span>Operations</span>
              {"   "} <span>About us</span>
              {"   "} <span>Contact us</span>
            </p>
            <p>&copy; 2022 Alpha Great. All Rights Reserved</p>
          </Col>
          <Col className="right">
            <div>
              <a href="#">
                <img src={fb} className="s-img" alt="facebook logo" />
              </a>{" "}
              <a href="#">
                <img src={ig} className="s-img" alt="instagram logo" />
              </a>{" "}
              <a href="#">
                <img src={twitter} className="s-img" alt="twitter logo" />
              </a>{" "}
              <a href="#">
                <img src={lin} className="s-img" alt="linkedin logo" />
              </a>
            </div>
            <p> Alpha Great</p>
            <p className="Push-up">Spintex. Rd, Shell bus stop</p>
            <p className="Push-up">P. O. Box TN 1717</p>
            <p className="Push-up Desktop-Tel">
              Tel: +233 (0)559120555/ 247736843 / 246076373
            </p>
            <div className="Mobile-Tel">
              <p>Tel:</p>
              <p>+233 (0)559120555</p>
              <p>+233 (0)247736843</p>
              <p>+233 (0)246076373</p>
            </div>
            <p className="Push-up Alpha-email">alphagreatgroup@gmail.com</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;
