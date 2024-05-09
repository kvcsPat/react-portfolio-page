import React from "react";
import Reveal from "../Reveal";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import "../../Styling/Skills.css";

export default function Skills() {
  return (
    <section id="Skills" className="skills">
      <Reveal>
        <div className="text">
          <p className="text-p1">Explore my</p>
          <h1 className="title">Skills</h1>
        </div>
      </Reveal>
      <div className="skill-cards">
        <Reveal>
          <div className="skill-card">
            <SiHtml5 className="skill-icons" />
            <p>HTML</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiCss3 className="skill-icons" />
            <p>CSS</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiJavascript className="skill-icons" />
            <p>Javascript</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiTypescript className="skill-icons" />
            <p>Typescript</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <FaSass className="skill-icons" />
            <p>Sass</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiReact className="skill-icons" />
            <p>React</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <FaNodeJs className="skill-icons" />
            <p>Node JS</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiExpress className="skill-icons" />
            <p>Express</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiMongodb className="skill-icons" />
            <p>MongoDB</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <SiDocker className="skill-icons" />
            <p>Docker</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-card">
            <FaGitAlt className="skill-icons" />
            <p>Git</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
