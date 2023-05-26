import React, { useEffect, useRef } from "react";
import Profile from "../../assets/jana-istrate.webp";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  useEffect(() => {
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
  }, []);
  return (
    <div className="flex flex-col items-start my-10 px-6 gap-6 md:flex-row md:justify-between md:gap-40 md:max-w-[1200px] md:mx-auto md:h-[70vh] md:mt-40 overflow-hidden">
      <div className="flex flex-col items-start tracking-wide md:max-w-[50%] easeInFromLeft">
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
          <span className="font-poppins500 italic text-blue">outstanding</span>{" "}
          digital experiences.
        </p>

        <Button content={"Check out my projects"} />
      </div>
      <motion.div className="relative mr-10 easeInFromRight">
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
  );
};

export default Hero;
