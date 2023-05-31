import React, { useEffect } from "react";
import Profile from "../../assets/jana-istrate.webp";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HashButton from "../Button/HashButton";
import WatermarkTopDesktop from "../UI_elements/WMTopDesktop";
import WatermarkTopMobile from "../UI_elements/WMTopMobile";
import WatermarkBottomDesktop from "../UI_elements/WMBottomDesktop";

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
    <div className="home md:h-screen md:overflow-hidden">
      <div
        className="flex flex-col items-start px-6 pb-10 mt-20 gap-6 md:flex-row md:justify-between md:max-w-6xl md:pb-0 md:mx-auto md:mt-[10vh]"
        ref={ref}
      >
        <motion.div
          className="flex flex-col items-start tracking-wide md:w-3/6"
          animate={controls}
          variants={fromLeft}
          initial="hidden"
        >
          <p className="font-poppins300 text-blue text-xl tracking-tight">
            Hi, my name is
          </p>
          <h1 className="font-overpass600 text-black text-5xl tracking-wide">
            Jana Istrate 👋
          </h1>
          {/* <h3 className="font-poppins500 text-grey text-2xl">
            I build elegant things for the web.
          </h3> */}
          <p className="font-poppins300 text-black text-xl my-4 md:w-[80%]">
            I’m a highly driven Front-end Developer who is dedicated, passionate
            and<br></br> eager to create{" "}
            <span className="font-poppins500 underline-on-hover">
              outstanding<br></br>
            </span>{" "}
            digital experiences.
          </p>

          <HashButton content={"Learn more!"} linkTo="/#about" />
        </motion.div>
        <motion.div
          animate={controls}
          variants={fromRight}
          initial="hidden"
          className="relative md:mr-10 self-center"
        >
          <img
            src={Profile}
            className="z-10 relative"
            width={280}
            height={410}
            alt="Jana Istrate frontend software developer portoflio portrait"
          />
          <div className="border-2 border-blue min-h-[420px] w-[280px] top-0 left-0 translate-y-4 translate-x-4 absolute slowDiv"></div>
        </motion.div>
      </div>
      <WatermarkTopDesktop title={"HelloWorld"} top={"10%"} left={"5%"} />
      <WatermarkTopDesktop
        title={"Nice to meet you!"}
        top={"80%"}
        left={"20%"}
      />
      <WatermarkTopMobile
        title={" Nice to meet you! "}
        top={"12%"}
        left={"18%"}
      />
      <WatermarkBottomDesktop title={"HelloWorld"} top={"90%"} left={"80%"} />
    </div>
  );
};

export default Hero;
