import React from "react";

import "./Carousel.css";

import Inhouse from "../../images/carousel/in-house.png";
import Academia from "../../images/carousel/academia.png";
import Pi from "../../images/carousel/pi.png";
import Tech from "../../images/carousel/tech.png";

import Carousel from "react-bootstrap/Carousel";
import { AiOutlineArrowRight } from "react-icons/ai";

function OpsCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Academia} alt="First slide" />
        <Carousel.Caption>
          <h3>
            <span className="Carousel-Alpha">Alpha</span> Academia
          </h3>
          <p className="font-weight-bold">
            This is a test preparation centre where we educate students to excel
            academically in both local and international exams such as BECE,
            WASSCE remedial, and international exams (such as SAT, GRE)
            <a className="Learn-more" href="#">
              learn more <AiOutlineArrowRight />
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Inhouse} alt="Second slide" />

        <Carousel.Caption>
          <h3>
            <span className="Carousel-Alpha">Alpha</span> In-House Educ.
          </h3>
          <p className="font-weight-bold">
            This is a special program that provides STEM teaching services to
            students from lower primary to senior high. In this operation which
            is a home base, we assign trained tutors to clients who need us to
            develop their wards STEM knowledge.
            <a className="Learn-more" href="#">
              learn more <AiOutlineArrowRight />
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Pi} alt="Third slide" />

        <Carousel.Caption>
          <h3>
            <span className="Carousel-Alpha">Alpha</span> Pi
          </h3>
          <p className="font-weight-bold">
            We offer a wide range of IT software consulting services and provide
            technology-driven advice and solutions for the enhancement and
            development of your business. We provide custom-made business
            solutions that define your....
            <a className="Learn-more" href="#">
              learn more <AiOutlineArrowRight />
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Tech} alt="Third slide" />

        <Carousel.Caption>
          <h3>
            <span className="Carousel-Alpha">Alpha</span> Tech
          </h3>
          <p className="font-weight-bold">
            One method to best prepare them for the future, get them ahead in
            school, or assist and enhance their current learning is to teach
            them to code and program. A means of communicating with a computer
            is coding....
            <a className="Learn-more" href="#">
              learn more <AiOutlineArrowRight />
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default OpsCarousel;
