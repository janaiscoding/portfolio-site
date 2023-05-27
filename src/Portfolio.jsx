import React, { useEffect } from "react";
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

    </div>
  );
};
export default Portfolio;
