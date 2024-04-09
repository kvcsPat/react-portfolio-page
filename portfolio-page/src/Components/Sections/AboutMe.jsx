import React from "react";
import Reveal from "../Reveal";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import "../../Styling/AboutMe.css";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about-me">
      <div className="text">
        <Reveal>
          <p className="text-p1">A few words</p>
          <h1 className="title">About Me</h1>
        </Reveal>
        <Reveal>
          <div className="about-container">
            <div className="quote-left">
              <FaQuoteLeft className="quote" />
            </div>
            <p className="text-about">
              I am a junior frontend developer with an open and curious mind.
              From my past experience as an architectural illustrator, I managed
              to develope a client-focused approach and great attention to
              detail. I enjoy developing creative concepts with a passion for
              design and improving my skills through interesting challenges.
            </p>
            <div className="quote-right">
              <FaQuoteRight className="quote" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
