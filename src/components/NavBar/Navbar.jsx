import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import hamburgerMenu from "../../assets/Hamburger.json";
import "./navbar.css";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const fromTop = {
  start: {
    y: "-100vh",
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const lottieRef = useRef();
  const handleLottie = () => {
    //if modal is open, it means that i am reversing the direction when I close it
    if (isOpen && lottieRef.current) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
      setIsOpen(false);
    } else {
      lottieRef.current.setDirection(1);
      lottieRef.current.play();
      setIsOpen(true);
      setInitialState(false);
    }
  };
  useEffect(() => {
    lottieRef.current.stop();
  }, []);
  return (
    <motion.header
      className="sticky top-0 z-50 bg-white shadow-md"
      variants={fromTop}
      initial="start"
      animate="end"
    >
      <div className="flex justify-between items-center px-6 max-w-6xl h-14 md:mx-auto ">
        <Link
          to="/"
          className="font-merienda text-red logo-link self-center text-3xl md:text-3xl tracking-wider align-baseline hover:cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          J.
        </Link>
        <Lottie
          animationData={hamburgerMenu}
          loop={false}
          lottieRef={lottieRef}
          onClick={handleLottie}
          className="md:hidden z-50"
        />
        <nav className="hidden md:flex gap-9 font-overpass text-base tracking-wider align-baseline mr-10 hover:cursor-pointer">
          <Link to="/#about" className="nav-link">
            About
          </Link>
          <Link to="/#projects" className="nav-link">
            Projects
          </Link>
          <Link to="/#contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>

      {/* 
      <nav
        className={`${isOpen ? "showNav" : "hideNav"} ${
          initialState ? "hidden" : ""
        } mobile-nav flex flex-col justify-center items-center gap-8 z-40`}
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
      </nav> */}
    </motion.header>
  );
};

export default Navbar;
