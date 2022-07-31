import React from "react";
import Arrow from "../../images/vision.png";
import "./AboutUs.css";

import CoreValueDown from "./CoreValue/CoreValueDown";
import CoreValueTop from "./CoreValue/CoreValueTop";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUs() {
  const characterStyle = { left: "-64px", top: "221px" };
  const partnershipStyle = { position: "relative", left: "-128px" };
  const deliverStyle = { position: "relative", top: "272px", left: "-193px" };
  const accountabilityStyle = {
    position: "relative",
    top: "-10px",
    left: "-259px",
  };
  const impactStyle = { position: "relative", left: "-324px", top: "260px" };
  const integrityStyle = { marginLeft: "25%" };

  return (
    <Container fluid>
      <Container>
        <Navbar />
        <div className="About-Us-Component">
          <section>
            <Row className="vision">
              <Col lg={5}>
                <img src={Arrow} alt="up arrow" className="Vision-img" />
              </Col>
              <Col lg={5}>
                <h2>
                  <span className="our">Our</span> Vision
                </h2>
                <p>
                  To be a centre of excellence in impacting STEM knowledge,
                  skill and innovations among students. To build a great
                  organization that attracts, develops, excites and retains
                  exceptional STEM field professionals and thought leaders with
                  high ethical standards.{" "}
                </p>
              </Col>
            </Row>
          </section>
          <section className="mission">
            <h2 className="mt">Our Mission</h2>
            <p>
              We believe that we are on this earth to improve and make life
              better. Our goal is to empower students to apply knowledge
              acquired in science, mathematics and technology to innovate and
              solve problems thus creating a better and a more sustainable world
              for us all; To build a great organization that attracts, develops,
              excites and retains exceptional STEM field professionals and
              thought leaders with high ethical standards.{" "}
            </p>
          </section>
          <section className="values">
            <h2 className="mt">Our Values</h2>
            <p>Our core values are emphasized on</p>
            <div className="Core-values">
              <CoreValueTop
                style={integrityStyle}
                letter="a"
                title="Integrity"
                brief="Align your conduct with what you know to be excellent"
              />

              <CoreValueDown
                style={characterStyle}
                letter="b"
                title="Character"
                brief="We are what we do"
              />

              <CoreValueTop
                style={partnershipStyle}
                letter="c"
                title="Partnership"
                brief="There is no greater force for change than a team of people"
              />

              <CoreValueDown
                style={deliverStyle}
                letter="d"
                title="Value delivered"
                brief="As an organization, we set a high aspiration for the positive impact"
              />

              <CoreValueTop
                style={accountabilityStyle}
                letter="e"
                title="Accuntability"
                brief="Every initiative we undertake will be judged by the only measure that matters"
              />

              <CoreValueDown
                style={impactStyle}
                letter="f"
                title="Socail impact"
                brief="As an organization, we are committed to positive social impact"
              />
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </Container>
  );
}

export default AboutUs;
