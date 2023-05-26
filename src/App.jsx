import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Loading from "./components/Loading/Loading";
import Socials from "./components/Socials/Socials";
import Banner from "./components/Hero/Banner";

const App = () => {
  const [done, setDone] = useState(undefined);

  return (
    <div className="m-auto">
      {!done ? (
        <Loading setDone={setDone} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Banner />
          <About />
          <Socials />
        </>
      )}
    </div>
  );
};

export default App;
