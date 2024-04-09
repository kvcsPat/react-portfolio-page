import React from "react";
import Reveal from "../Reveal";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import profile from "../../Assets/profile.jpg";
import "../../Styling/Hero.css";

export default function Hero() {
  return (
    <section id="Hero" className="hero">
      <div className="profile-pic-container">
        <Reveal>
          <img className="profile-pic" src={profile} alt="profile" />
        </Reveal>
      </div>
      <div className="text">
        <Reveal>
          <p className="text-p1">Hello I'm</p>
          <h1 className="title">Patrik Kovács</h1>
          <p className="text-p2">Frontend Developer</p>
          <div className="btn-container">
            <div className="btn-contact">
              <button className="btn-color-1">Download CV</button>
            </div>
            <div className="btn-contact">
              <Link
                className="btn-color-2"
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="socials-container">
            <div className="btn-social">
              <SocialIcon
                bgColor="currentColor"
                url="ww.linkedin.com"
                href="https://www.linkedin.com/in/kovacspatrik94/"
                target="_blank"
                rel="noreferrer"
              />
            </div>
            <div className="btn-social">
              <SocialIcon
                bgColor="currentColor"
                url="ww.github.com"
                href="https://github.com/kvcsPat"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
