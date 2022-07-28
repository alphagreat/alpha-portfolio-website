import React from "react";
import "./Homepage.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhyUsImg from "../../../public/why-us.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="Homepage-component">
      <div className="wrapper">
        <Navbar />
        <p className="welcome">Welcome to</p>
        <p className="Alpha-great">
          <span className="alpha">alpha</span>{" "}
          <span className="great">Great</span>
        </p>
        <div className="Welcome-group">
          <div className="Welcome-rectangle"></div>
          <div className="Welcome-text">
            <p>
              Alpha is a company dedicated to advancing the world of Science,
              Technology, Engineering and Mathematics (STEM). We achieve this
              goal by one – inspiring students to practice STEM knowledge and
              build solutions, two – build first-class web, mobile and cloud
              applications for start-ups and enterprises. We help organizations
              across the private, public, and social sectors create the change
              that matter most to them. From the C-Suite to the front line we
              partner with clients to transform their organisations, embed
              technology into everything they do, and build enduring
              capabilities. We are a community of students, STEM field
              professionals, committed to transforming lives and shaping a
              better technological world.
            </p>
            <button className="Homepage-btn" role="button">
              Operations <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <article className="Pres-speech">
        <p>
          The basic purpose behind STEM education is really solving problems,
          understanding natural phenomenon and solving them. “Factors and
          interesting statistics are, the most common background of a fortune
          500 CEOs in the USA is not business, not Law, is engineering. Student
          can get engineering education and can do anything with it. They can be
          Lawyers, businessman, they can be whatever they want” according to
          Craig Barrett (Former Chairman & CEO, Intel). Through Alpha Great
          Group operations, we hope to develop the next generation of
          innovators, engineers, businessmen, scientist and mathematicians to
          create a better world for us all. YES, WE CAN!
        </p>
        <div className="Speech-by">
          <div className="Home-rectangle"></div>
          <p>Emmanuel Donkor</p>
          <p>Founder and President, Alpha Great</p>
        </div>
      </article>
      <div className="operations">
        <div className="Home-rectangle"></div>
        <h2>Operations</h2>
        <p>
          For your benefit as a student, Alpha Great offers a variety of
          operations through a secure team, including:
        </p>
      </div>
      <div className="Why-us">
        <div className="Why-us-text">
          <div className="Home-rectangle"></div>
          <h2>
            Why <span className="choose">choose us</span>
          </h2>
          <p>
            We are honored to have the trust of the clients we work with, and we
            earn that trust by consistently upholding the highest standards of
            integrity, offering technology-driven advice to help them develop
            their businesses, serving their children through our outstanding
            STEM integrated program, prioritizing our clients' needs over our
            own, and protecting their sensitive and confidential information.
          </p>
        </div>
        <div className="Why-us-img-btn">
          <img src={WhyUsImg} className="Why-us-img" alt="why" />
          <Link to="/contact-us">
            <button className="Homepage-btn Why-us-btn" role="button">
              Contact Us <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default HomePage;
