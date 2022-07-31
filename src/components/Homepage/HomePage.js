import React from "react";
import "./Homepage.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhyUsImg from "../../images/why-us.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container fluid>
      <section className="Homepage-component">
        <div className="wrapper">
          <Navbar />
          <p className="welcome text-white">Welcome to</p>
          <p className="Alpha-great text-white Push-up">
            <span className="alpha text-white">alpha</span>{" "}
            <span className="great text-white">Great</span>
          </p>
          <Row>
            <Col className="Welcome-rectangle" lg={1}></Col>
            <Col lg={8}>
              <p className="text-white">
                Alpha is a company dedicated to advancing the world of Science,
                Technology, Engineering and Mathematics (STEM). We achieve this
                goal by one – inspiring students to practice STEM knowledge and
                build solutions, two – build first-class web, mobile and cloud
                applications for start-ups and enterprises. We help
                organizations across the private, public, and social sectors
                create the change that matter most to them. From the C-Suite to
                the front line we partner with clients to transform their
                organisations, embed technology into everything they do, and
                build enduring capabilities. We are a community of students,
                STEM field professionals, committed to transforming lives and
                shaping a better technological world.
              </p>
              <button className="Homepage-btn">
                Operations <AiOutlineArrowRight />
              </button>
            </Col>
          </Row>
        </div>
        <Container>
          <p className="mt">
            The basic purpose behind STEM education is really solving problems,
            understanding natural phenomenon and solving them. “Factors and
            interesting statistics are, the most common background of a fortune
            500 CEOs in the USA is not business, not Law, is engineering.
            Student can get engineering education and can do anything with it.
            They can be Lawyers, businessman, they can be whatever they want”
            according to Craig Barrett (Former Chairman & CEO, Intel). Through
            Alpha Great Group operations, we hope to develop the next generation
            of innovators, engineers, businessmen, scientist and mathematicians
            to create a better world for us all. YES, WE CAN!
          </p>
          <div className="Speech-by">
            <div className="Home-rectangle"></div>
            <p>Emmanuel Donkor</p>
            <p>Founder and President, Alpha Great</p>
          </div>
          <div className="Home-rectangle"></div>
          <h2>Operations</h2>
          <p>
            For your benefit as a student, Alpha Great offers a variety of
            operations through a secure team, including:
          </p>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/400"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/800/400"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Row className="mt">
            <Col>
              <div className="Home-rectangle"></div>
              <h2>
                Why <span className="choose">choose us</span>
              </h2>
              <p>
                We are honored to have the trust of the clients we work with,
                and we earn that trust by consistently upholding the highest
                standards of integrity, offering technology-driven advice to
                help them develop their businesses, serving their children
                through our outstanding STEM integrated program, prioritizing
                our clients' needs over our own, and protecting their sensitive
                and confidential information.
              </p>
            </Col>
            <Col>
              <img src={WhyUsImg} className="Why-us-img" alt="why" />
              <Link to="/contact-us">
                <button className="Homepage-btn Why-us-btn">
                  Contact Us <AiOutlineArrowRight />
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
    </Container>
  );
}

export default HomePage;
