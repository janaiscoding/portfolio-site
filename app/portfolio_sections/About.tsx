import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Heading from "../ui_components/Heading";
import Skills from "../ui_components/about_section/Skills";
import AboutMeText from "../ui_components/about_section/AboutMeText";
import WatermarkBottomDesktop from "../ui_components/watermarks_symbols/WatermarkBottomDesktop";
import { slideInFromLeft } from "../animations/animations";
import Separator from "../ui_components/separator/Separator";

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
        <section className="flex flex-col gap-12 md:gap-6 md:flex-row md:justify-between md:gap-40">
          <motion.div
            animate={controls}
            variants={slideInFromLeft}
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
