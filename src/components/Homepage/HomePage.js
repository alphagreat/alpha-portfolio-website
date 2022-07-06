import React from "react";
import "./Homepage.css";
import screws from "../../../public/screws.png";
import { AiOutlineArrowRight } from "react-icons/ai";

function HomePage() {
  return (
    <section className="Homepage-component">
      <div className="wrapper">
        <div className="gradient">
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
                applications for start-ups and enterprises. We help
                organizations across the private, public, and social sectors
                create the change that matter most to them. From the C-Suite to
                the front line we partner with clients to transform their
                organisations, embed technology into everything they do, and
                build enduring capabilities. We are a community of students,
                STEM field professionals, committed to transforming lives and
                shaping a better technological world.
              </p>
              <button className="Operations-btn" role="button">
                Operations <AiOutlineArrowRight />
              </button>
            </div>
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
      <img src={screws} className="screws" alt="screws" />
    </section>
  );
}

export default HomePage;
