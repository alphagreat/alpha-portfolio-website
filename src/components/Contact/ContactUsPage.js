import React from "react";
import "./ContactUsPage.css";
import phone from "../../../public/phone.png";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function ContactUsPage() {
  return (
    <div>
      <section className="Contact-Us-Page">
        <Navbar />
        <div className="intro">
          <img src={phone} className="phone" alt="phone" />
          <p className="Intro-text">
            Our work transforms the lives of our students as they develop into
            more effective, values-driven STEM innovators Guided by educators
            and supported by business leaders
          </p>
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
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Message"/>
          <button role="button">Send</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
