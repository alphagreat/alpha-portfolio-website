import React from "react";
import "./ContactUsPage.css";
import phone from "../../images/phone.png";

import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactUsPage() {
  return (
    <Container fluid>
      <Container>
        <NavbarComponent />
        <section className="Contact-Us-Page">
          <div className="wrapper mt">
            <Row>
              <Col>
                <h2 style={{ color: "#fff" }}>Contact Us</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Intro-text">
                  Our work transforms the lives of our students as they develop
                  into more effective, values-driven STEM innovators Guided by
                  educators and supported by business leaders
                </p>
              </Col>
            </Row>
          </div>
          <h2>Contact Details</h2>
          <p>
            <strong>Alpha Great</strong>
          </p>
          <p>
            <strong>Alpha Great Spintex. Rd, Shell bus stop</strong>
          </p>
          <h2>Let’s start a Conversation</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Message" />
            <button>Send</button>
          </form>
        </section>
      </Container>
      <Footer />
    </Container>
  );
}

export default ContactUsPage;
