import React from "react";
import img from "../../../public/vision.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="About-Us-Component">
      <section className="vision">
        <img src={img} alt="up arrow" className="Vision-img" />
        <div className="Vision-text">
          <h2>Our Vision</h2>
          <p>
            To be a centre of excellence in impacting STEM knowledge, skill and
            innovations among students. To build a great organization that
            attracts, develops, excites and retains exceptional STEM field
            professionals and thought leaders with high ethical standards.{" "}
          </p>
        </div>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We believe that we are on this earth to improve and make life better.
          Our goal is to empower students to apply knowledge acquired in
          science, mathematics and technology to innovate and solve problems
          thus creating a better and a more sustainable world for us all; To
          build a great organization that attracts, develops, excites and
          retains exceptional STEM field professionals and thought leaders with
          high ethical standards.{" "}
        </p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <p>Our core values are emphasized on</p>
        <div className="Core-values"></div>
      </section>
    </div>
  );
}

export default AboutUs;
