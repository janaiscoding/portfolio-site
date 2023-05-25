import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import hamburgerMenu from "../assets/Hamburger.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initial, setInitial] = useState(true);
  const lottieRef = useRef();
  const handleLottie = () => {
    //if modal is open, it means that i am reversing the direction when I close it
    if (isOpen) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
      setIsOpen(false);
    } else {
      lottieRef.current.setDirection(1);
      lottieRef.current.play();
      setIsOpen(true);
      setInitial(false);
    }
  };
  useEffect(() => {
    lottieRef.current.stop();
  }, []);
  return (
    <header className="flex justify-between items-center bg-white px-6 h-14 shadow-md">
      <h1 className="font-overpass text-2xl tracking-wider align-baseline">
        JanaIsCoding
      </h1>
      <Lottie
        animationData={hamburgerMenu}
        loop={false}
        lottieRef={lottieRef}
        onClick={handleLottie}
        className="md:hidden z-50"
      />
      <nav
        className={`${isOpen ? "showNav" : "hideNav"} ${
          initial ? "hidden" : ""
        } mobile-nav flex flex-col justify-center items-center gap-8 z-50`}
      >
        <p className="font-overpass text-2xl tracking-wider align-baseline">
          ABOUT
        </p>
        <p className="font-overpass text-2xl tracking-wider align-baseline">
          PROJECTS
        </p>
        <p className="font-overpass text-2xl tracking-wider align-baseline">
          PORTFOLIO
        </p>
        <div className="w-24 border-2 border-solid border-orange"></div>
      </nav>
    </header>
  );
};

export default Navbar;
