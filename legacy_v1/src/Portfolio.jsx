import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const Portfolio = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
export default Portfolio;
