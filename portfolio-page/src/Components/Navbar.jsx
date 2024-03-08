import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav>
      <Link to="Hero" spy={true} smooth={true} offset={50} duration={1000}>
        Home
      </Link>
      <Link to="AboutMe" spy={true} smooth={true} offset={50} duration={1000}>
        About Me
      </Link>
      <Link to="Skills" spy={true} smooth={true} offset={50} duration={1000}>
        Skills
      </Link>
      <Link to="Projects" spy={true} smooth={true} offset={50} duration={1000}>
        Projects
      </Link>
      <Link to="ContactMe" spy={true} smooth={true} offset={50} duration={1000}>
        Contact Me
      </Link>
    </nav>
  );
}
