import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Socials from "./components/Socials/Socials";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [done, setDone] = useState(undefined);

  return (
    <BrowserRouter>
      {/* {!done ? (
        <Loading setDone={setDone} />
      ) : ( */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
      </Routes>
      {/* )} */}
      <Socials />
    </BrowserRouter>
  );
};

export default App;
