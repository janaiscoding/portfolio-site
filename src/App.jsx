import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Socials from "./components/Socials/Socials";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [done, setDone] = useState(undefined);

  return (
    <BrowserRouter>
      {!done ? (
        <Loading setDone={setDone} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Portfolio />} />
          </Routes>
          <Socials />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
