import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../ui_components/Heading";
import projects from "../ui_components/projects_section/projects";
import WatermarkBottomDesktop from "../ui_components/watermarks_symbols/WatermarkBottomDesktop";
import WatermarkBottomMobile from "../ui_components/watermarks_symbols/WatermarkBottomMobile";
import Button from "../ui_components/Button";
import ProjectCard from "../ui_components/projects_section/ProjectCard";
import { slideInFromLeft } from "../animations/animations";
import ProjectsTitle from "../ui_components/projects_section/ProjectsTitle";

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
      className="projects h-full scroll-mt-32 relative"
      id="projects"
      ref={ref}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-12 md:gap-6 md:justify-between">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            animate={controls}
          >
            <ProjectsTitle />
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
