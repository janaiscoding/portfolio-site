import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";
import Skills from "./aboutSkills/Skills";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import WatermarkBottom from "../UI_elements/WMBottom";
import WatermarkTop from "../UI_elements/WMTop";
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
const fromLeftWatermark = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    transition: { duration: 1 },
  },
};
const fromRightWatermark = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    transition: { duration: 1 },
  },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
    console.log(inView, "about");
  }, [controls, inView]);
  return (
    <div
      className="about md:h-screen overflow-hidden relative"
      id="about"
      ref={ref}
    >
      <WatermarkTop
        title={"AboutMe onRead={()=>setImpressed(true)}"}
        top={"15%"}
        left={"10%"}
      />
      <section className="flex flex-col gap-6 px-6 md:flex-row md:justify-between md:max-w-6xl md:mx-auto md:gap-40 md:py-[30vh]">
        <motion.div
          animate={controls}
          variants={fromLeft}
          initial="hidden"
          className="basis-full"
        >
          <Heading title={"About Me"} linkTo={"/#about"} />
          <section className="flex flex-col gap-6 font-poppins300">
            <p>
              I aim to become an
              <span className="text-blue"> impactful</span> member of the
              exciting, challenging world of web development and programming.
            </p>
            <p>
              I firmly believe that through consistent work,
              <span className="text-blue"> discipline</span> and patience, I can
              put my mind to anything!
            </p>
            <p>
              When I am not coding, I love to spend my time simply by working
              out or enjoying a good movie.?? relevancy ??
            </p>
          </section>
          {/* <div className="self-start">
            <Button content={"Send me a new challenge"} />
          </div> */}
        </motion.div>
        <Skills inView={inView} />
      </section>

      <WatermarkBottom title={"AboutMe"} top={"85%"} left={"68%"} />
    </div>
  );
};

export default About;
