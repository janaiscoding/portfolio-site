import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../ui_components/Heading";
import projects from "../ui_components/projects_section/projects";
import WatermarkBottomDesktop from "../ui_components/watermarks_symbols/WatermarkBottomDesktop";
import WatermarkBottomMobile from "../ui_components/watermarks_symbols/WatermarkBottomMobile";
import Button from "../ui_components/Button";
import ProjectCard from "../ui_components/projects_section/ProjectCard";

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
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className="projects h-full overflow-hidden relative "
      id="projects"
      ref={ref}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-12 md:gap-6 md:justify-between md:max-w-6xl m-auto my-[5vh] p-6 md:p-0 md:my-[15vh]">
          <motion.div variants={fromLeft} initial="hidden" animate={controls}>
            <Heading title={"Projects"} linkTo={"/#projects"} />
            <h1 className="text-xl text-grey dark:text-white/90 font-overpass600">
              Follow my{" "}
              <a
                target="_blank"
                href="https://www.github.com/janaiscoding"
                className="text-blue hover:text-brightblue dark:text-brightblue dark:hover:text-blue"
              >
                GitHub
              </a>{" "}
              to see what I&apos;m currently working on!
            </h1>
          </motion.div>
          <div className="projects-wrapper flex flex-col gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex self-center justify-center">
            <Button
              content={"See more projects"}
              linkTo={"https://github.com/janaiscoding?tab=repositories"}
              selector=""
            />
          </div>
        </div>
        <WatermarkBottomDesktop title={"Projects"} />
      </div>
    </div>
  );
};

export default Projects;
