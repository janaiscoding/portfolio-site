import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";
import "./project.css";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardOne from "./Cards/CardOne";
import CardTwo from "./Cards/CardTwo";
import CardThree from "./Cards/CardThree";
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

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
    console.log(inView, "projects");
  }, [controls, inView]);

  return (
    <div
      className="projects h-full overflow-hidden relative"
      id="projects"
      ref={ref}
    >
      <WatermarkTop title={"Projects projects={amazing}"} top={'5%'} left={'10%'} />
      <div className="gap-6 px-6 md:max-w-6xl md:mx-auto md:py-[20vh]">
        <motion.div variants={fromLeft} initial="hidden" animate={controls}>
          <Heading title={"Projects"} linkTo={"/#projects"} />
          <h1 className="text-xl text-grey font-overpass600 tracking-wider mb-4 pl-6">
            A few of my personal favorites
          </h1>
        </motion.div>
        <div className="projects-wrapper flex flex-col gap-6">
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
      </div>
      <WatermarkBottom title={"Projects"} top={"95%"} left={"68%"} />
    </div>
  );
};

export default Projects;
