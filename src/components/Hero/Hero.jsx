import React, { useEffect } from "react";
import Profile from "../../assets/jana-istrate.webp";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./hero.css";
import HashButton from "../Button/HashButton";
const fromLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};
const fromRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
    console.log(inView, "hero");
    let handleScroll = () => {
      let slowDiv = document.querySelector(".slowDiv");
      let value = window.scrollY;
      slowDiv.style.top = value * -0.1 + "px";
      slowDiv.style.bottom = value * 0.1 + "px";
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [controls, inView]);

  return (
    <div className="home md:h-screen overflow-hidden">
      <div
        className="flex flex-col items-start px-6 gap-6 md:flex-row md:justify-between md:max-w-6xl md:mx-auto md:mt-[10vh]"
        ref={ref}
      >
        <motion.div
          className="flex flex-col items-start tracking-wide md:w-3/6"
          animate={controls}
          variants={fromLeft}
          initial="hidden"
        >
          <p className="font-poppins300 text-blue text-base tracking-tight">
            Hi, my name is
          </p>
          <h1 className="font-overpass600 text-black text-4xl tracking-wide">
            Jana Istrate.
          </h1>
          <h3 className="font-poppins500 text-grey text-2xl">
            I build elegant things for the web.
          </h3>
          <p className="font-poppins300 text-black text-base mb-4 md:w-[70%]">
            I’m a highly driven Front-end Developer who is dedicated, passionate
            and eager to create{" "}
            <span className="font-poppins500 italic text-blue">
              outstanding
            </span>{" "}
            digital experiences.
          </p>

          <HashButton content={"Check out my projects"} linkTo="/#projects" />
        </motion.div>
        <motion.div
          animate={controls}
          variants={fromRight}
          initial="hidden"
          className="relative mr-10"
        >
          <img
            src={Profile}
            className="w-[240px] md:w-[280px] z-10 relative"
            alt="Jana Istrate portoflio portrait"
          />
          <div
            className="border-2 border-blue w-[240px] md:w-[280px] top-0 left-0 translate-y-4 translate-x-4 absolute slowDiv"
            style={{ height: "-webkit-fill-available" }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
