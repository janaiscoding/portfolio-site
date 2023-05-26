import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="m-auto">
      <Navbar/>
      <Hero />
      <About />
    </div>
  );
};

export default App;
