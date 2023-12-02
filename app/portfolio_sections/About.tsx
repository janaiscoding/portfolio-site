import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Heading from "../ui_components/Heading";
import Skills from "../ui_components/about_section/Skills";
import WatermarksAbout from "../ui_components/about_section/WatermarksAbout";
import AboutMeText from "../ui_components/about_section/AboutMeText";
import WatermarkBottomDesktop from "../ui_components/watermarks_symbols/WatermarkBottomDesktop";

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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      className="about overflow-hidden relative scroll-mt-2.5"
      id="about"
      ref={ref}
    >
      <div className="flex flex-col gap-2">
        <section className="flex flex-col gap-12 md:gap-6 px-6 md:flex-row md:justify-between md:max-w-7xl md:mx-auto md:gap-40 md:px-2 my-[5vh] md:my-[15vh]">
          <motion.div
            animate={controls}
            variants={fromLeft}
            initial="hidden"
            className="basis-full"
          >
            <Heading title={"About Me"} linkTo={"/#about"} />
            <AboutMeText />
          </motion.div>
          <Skills inView={inView} />
        </section>
        <WatermarkBottomDesktop
          title={"AboutMe onRead={() => setThankful(true)}"}
        />
      </div>
    </div>
  );
};

export default About;
