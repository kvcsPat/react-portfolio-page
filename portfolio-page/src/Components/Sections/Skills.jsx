import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import "../../Styling/Skills.css";

export default function Skills() {
  return (
    <section id="Skills" className="skills">
      <div className="text">
        <p className="text-p1">Explore my</p>
        <h1 className="title">Skills</h1>
      </div>
      <div className="cards">
        <div className="card">
          <SiHtml5 className="skill-icons" />
          <p>HTML</p>
        </div>
        <div className="card">
          <SiCss3 className="skill-icons" />
          <p>CSS</p>
        </div>
        <div className="card">
          <SiJavascript className="skill-icons" />
          <p>Javascript</p>
        </div>
        <div className="card">
          <SiTypescript className="skill-icons" />
          <p>Typescript</p>
        </div>
        <div className="card">
          <FaSass className="skill-icons" />
          <p>Sass</p>
        </div>
        <div className="card">
          <SiReact className="skill-icons" />
          <p>React</p>
        </div>
        <div className="card">
          <FaNodeJs className="skill-icons" />
          <p>Node JS</p>
        </div>
        <div className="card">
          <SiDocker className="skill-icons" />
          <p>Docker</p>
        </div>
        <div className="card">
          <FaGitAlt className="skill-icons" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}
