"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui_components/Button";
import WatermarkTopMobile from "../ui_components/WatermarkTopMobile";
import WatermarkTopDesktop from "../ui_components/WatermarkTopDesktop";
import WatermarkBottomDesktop from "../ui_components/WatermarkBottomDesktop";
import Profile from "../../public/assets/jana-istrate.webp";
import Image from "next/image";
import AnchorButton from "../ui_components/AnchorButton";

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
    if (inView) {
      controls.start("visible");
    }
    let handleScroll = () => {
      let contour = document.querySelector<HTMLElement>(".contour")!;
      //https://stackoverflow.com/questions/58773652/ts2339-property-style-does-not-exist-on-type-element
      let value = window.scrollY;
      contour.style.top = value * -0.1 + "px";
      contour.style.bottom = value * 0.1 + "px";
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [controls, inView]);

  return (
    <div className="home md:items-center md:justify-center">
      <div
        className="flex flex-col gap-6 md:flex-row md:justify-between md:max-w-6xl m-auto md:mt-[10vh]"
        ref={ref}
      >
        <motion.div
          className="flex flex-col items-start tracking-wide md:w-3/6"
          animate={controls}
          variants={fromLeft}
          initial="hidden"
        >
          <p className="text-blue text-xl tracking-tight">
          👋 Hi, my name is
          </p>
          <h1 className="font-overpass600 text-black text-5xl tracking-wide">
            Jana Istrate
          </h1>
          <p className="text-black text-xl my-4 md:w-[80%]">
            I’m a highly driven Full-stack Developer based in Germany who is
            dedicated, passionate and eager to create{" "}
            <span className="font-poppins500 underline-on-hover">
              outstanding
            </span>{" "}
            digital experiences.
          </p>

          <AnchorButton content={"Learn more!"} idAnchor="about" />
        </motion.div>
        <motion.div
          animate={controls}
          variants={fromRight}
          initial="hidden"
          className="relative md:mr-10 self-center"
        >
          <Image
            src={Profile}
            className="z-10 relative"
            width={280}
            height={410}
            alt="Jana Istrate frontend software developer portoflio portrait"
          />
          <div className="border-2 border-blue min-h-[420px] w-[280px] top-0 left-0 translate-y-4 translate-x-4 absolute contour"></div>
        </motion.div>
      </div>
      <WatermarkTopMobile
        title={" Nice to meet you!"}
        top={"10%"}
        left={"30%"}
      />
      <div className="hidden lg:hidden md:block">
        <WatermarkTopDesktop
          title={"Nice to meet you!"}
          top={"60%"}
          left={"5%"}
        />
      </div>
      <div className="hidden md:hidden lg:block">
        <WatermarkTopDesktop
          title={"Nice to meet you!"}
          top={"80%"}
          left={"20%"}
        />
        <WatermarkTopDesktop title={"HelloWorld"} top={"10%"} left={"5%"} />
        <WatermarkBottomDesktop title={"HelloWorld"} top={"90%"} left={"80%"} />
      </div>
    </div>
  );
};

export default Hero;
