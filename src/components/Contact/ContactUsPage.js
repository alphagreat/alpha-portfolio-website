import React, { useState } from "react";
import "./ContactUsPage.css";

import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/NavbarComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import isEmail from "validator/lib/isEmail";

function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [error, setError] = useState("");

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMsg("");
  };

  const hideError = () => {
    setTimeout(() => setError(""), 2000);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!name) {
      setError("name");
      setErrorMessage("Please provide a name");
      hideError();
      return;
    }

    if (!email) {
      setError("email");
      setErrorMessage("Please enter your email");
      hideError();
      return;
    }

    if (!isEmail(email)) {
      setError("invalid");
      setErrorMessage("Please add a valid email");
      hideError();
      return;
    }

    if (!msg) {
      setError("body");
      setErrorMessage("Please add a message");
      hideError();
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          message: msg,
          sender_email: email,
          sender_name: name,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((_) => {
        toast.success("Email Sent!");
      })
      .catch((_) => {
        toast.error("Something went wrong");
      });

    clearInputs();
  };
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
          <h2 className="convo">Let’s start a Conversation</h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && error === "name" && (
              <p className="Contact-error"> {errorMessage} </p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && error === "email" && (
              <p className="Contact-error"> {errorMessage} </p>
            )}
            {error && error === "invalid" && (
              <p className="Contact-error"> {errorMessage} </p>
            )}
            <input
              type="text"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            {error && error === "body" && (
              <p className="Contact-error"> {errorMessage} </p>
            )}
            <button onClick={(e) => handleClick(e)}>Send</button>
          </form>
        </section>
        <ToastContainer />
      </Container>
      <Footer />
    </Container>
  );
}

export default ContactUsPage;
