import React from "react";
import Hero from "./Sections/Hero";
import AboutMe from "./Sections/AboutMe";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}
