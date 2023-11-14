"use client";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import Sun from "../ui_components/icons/Sun";
import Moon from "../ui_components/icons/Moon";
import Hamburger from "../ui_components/icons/Hamburger";

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
  const themeContext = useContext(ThemeContext);

  const handleMobileNav = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setInitialState(false);
    }
  };
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      themeContext.setCurrent("dark");
    } else {
      themeContext.setCurrent("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThemeToggle = () => {
    if (themeContext.current === "dark") {
      document.documentElement.classList.remove("dark");
      themeContext.setCurrent("light");
    } else {
      document.documentElement.classList.add("dark");
      themeContext.setCurrent("dark");
    }
  };
  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 bg-white ${
          isOpen ? "dark:bg-blue" : "dark:bg-[#0F0F0F]"
        } shadow-md`}
      >
        <motion.div
          variants={fromTop}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center max-w-6xl h-14 md:mx-auto px-6 md:px-0"
        >
          <div
            className={`font-overpass600 z-[500] ${
              isOpen ? "text-black" : "text-blue"
            } logo-link self-center text-3xl md:text-3xl tracking-wider align-baseline hover:cursor-pointer`}
            onClick={() => {
              window.scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            {"{ J }"}
          </div>
          <div className="md:hidden z-[500] flex gap-4 max-h-[24px]">
            <div onClick={handleThemeToggle}>
              {themeContext.current === "dark" ? <Sun /> : <Moon />}
            </div>
            <div onClick={handleMobileNav}>
              <Hamburger />
            </div>
          </div>
          {/* DESKTOP NAVBAR */}
          <nav className="hidden md:flex gap-9 font-overpass items-center justify-center text-md tracking-wider align-baseline hover:cursor-pointer">
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
            <div onClick={handleThemeToggle} className="hover:cursor-pointer">
              {themeContext.current === "dark" ? <Sun /> : <Moon />}
            </div>
          </nav>
        </motion.div>
      </motion.header>
      <nav
        className={`${isOpen ? "showNav" : "hideNav"} ${
          initialState ? "hidden" : " "
        } mobile-nav flex flex-col justify-center text-black items-center gap-8 font-overpass600 text-2xl tracking-widest align-baseline md:hidden`}
      >
        <button
          onClick={() => {
            setIsOpen(false);
            window.scroll(0, 0);
          }}
        >
          HOME
        </button>
        <a
          href="/#about"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          ABOUT
        </a>
        <a
          href="/#projects"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          PROJECTS
        </a>
        <a
          href="/#contact"
          onClick={() => {
            setIsOpen(false);
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
