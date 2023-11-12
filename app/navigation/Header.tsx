"use client";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import hamburgerMenu from "../../public/assets/Hamburger.json";
// import "./navbar.css";
import { motion } from "framer-motion";

const fromTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const lottieRef = useRef<any>();

  const handleLottie = () => {
    //if modal is open, it means that i am reversing the direction when I close it
    if (isOpen && lottieRef.current) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
      setIsOpen(false);
    } else {
      lottieRef.current!.setDirection(1);
      lottieRef.current!.play();
      setIsOpen(true);
      setInitialState(false);
    }
  };
  useEffect(() => {
    lottieRef.current!.stop();
  }, []);
  return (
    <>
      <motion.header className="sticky top-0 z-50 bg-white shadow-md">
        <motion.div
          variants={fromTop}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center max-w-7xl h-14 md:mx-auto px-6 md:px-0"
        >
          <div
            className="font-overpass600 z-[500] text-black md:text-blue logo-link self-center text-3xl md:text-3xl tracking-wider align-baseline hover:cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            {"{ J }"}
          </div>
          <div className="md:hidden w-[24px] h-[24px] z-[500]">
            <Lottie
              animationData={hamburgerMenu}
              loop={false}
              lottieRef={lottieRef}
              onClick={handleLottie}
            />
          </div>
          {/* DESKTOP NAVBAR */}
          <nav className="hidden md:flex gap-9 font-overpass items-center justify-center text-lg tracking-wider align-baseline hover:cursor-pointer">
            <button
              onClick={() => {
                window.scroll(0, 0);
              }}
              className="nav-link"
              id="about-link"
            >
              Home
            </button>
            <a href="/#about" className="nav-link" id="about-link">
              About
            </a>
            <a href="/#projects" className="nav-link" id="projects-link">
              Projects
            </a>
            <a href="/#contact" className="nav-link" id="contact-link">
              Contact
            </a>
            <a target="_blank" href="/resume" className="nav-link">
              Resume
            </a>
          </nav>
        </motion.div>
      </motion.header>
      <nav
        className={`${isOpen ? "showNav" : "hideNav"} ${
          initialState ? "hidden" : " "
        } mobile-nav flex flex-col justify-center items-center gap-8 font-overpass600 text-2xl tracking-widest align-baseline md:hidden`}
      >
        <a
          href="/#about"
          onClick={() => {
            setIsOpen(false);
            handleLottie();
          }}
        >
          ABOUT
        </a>
        <a
          href="/#projects"
          onClick={() => {
            setIsOpen(false);
            handleLottie();
          }}
        >
          PROJECTS
        </a>
        <a
          href="/#contact"
          onClick={() => {
            setIsOpen(false);
            handleLottie();
          }}
        >
          CONTACT
        </a>
        <div className="w-24 border-2 border-solid border-red"></div>
      </nav>
    </>
  );
};

export default Header;
