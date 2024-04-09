import React, { useState, useEffect } from "react";
import Reveal from "../Components/Reveal";
import { Link } from "react-scroll";
import "../Styling/Navbar.css";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const [isOnTop, setIsOnTop] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${navActive ? "active" : ""} ${
        isOnTop ? "" : "sticky"
      }`}
    >
      <Reveal>
        <div className="logo-container">
          <Link
            className="logo"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-40}
            duration={1000}
            onClick={closeMenu}
          >
            &lt;/&gt;
          </Link>
        </div>
      </Reveal>
      <Reveal>
        <button
          className={`nav-hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav-hamburger-line"></span>
          <span className="nav-hamburger-line"></span>
          <span className="nav-hamburger-line"></span>
        </button>
      </Reveal>

      <div className={`nav-items ${navActive ? "active" : ""}`}>
        <Reveal>
          <ul>
            <li>
              <Link
                className="navbar-content"
                to="Hero"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1000}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navbar-content"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="navbar-content"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-45}
                duration={1000}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="navbar-content"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-45}
                duration={1000}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="navbar-content"
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </nav>
  );
}
