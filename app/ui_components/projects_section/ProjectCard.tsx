import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectType } from "@/app/utils/types";
import Image from "next/image";
import { slideInFromLeft } from "@/app/animations/animations";
import ProjectDetails from "./ProjectDetails";
import ProjectTech from "./ProjectTech";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isHov, setHov] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={slideInFromLeft}
      initial="hidden"
      className="card flex flex-col-reverse gap-6 md:gap-0 md:flex-row p-4 md:p-6 h-[44rem] md:h-[30rem] lg:h-96 bg-slate-50 dark:bg-neutral-900 shadow-xl hover:shadow-2xl"
    >
      <div className="card-content flex flex-col justify-between items-start border-solid border-grey/90 md:border-r basis-full">
        <div className="w-full">
          <a
            target="_blank"
            rel="noreferrer"
            className="font-overpass600 text-2xl project-title"
            href={project.demoLink}
          >
            {project.title}
          </a>
          <ProjectTech techList={project.tech} />
          <ProjectDetails descriptionList={project.description} />
        </div>

        <div className="flex self-center md:self-start gap-9">
          <Button
            content={"Demo"}
            linkTo={project.demoLink}
            selector={"live"}
          />
          <Button
            content={"Code"}
            linkTo={project.repoLink}
            selector={"github"}
          />
        </div>
      </div>
      <div className="basis-full flex justify-center overflow-hidden border-solid border-b-2 border-grey md:border-none">
        <a href={project.demoLink} target="_blank" className="self-start">
          <Image
            src={project.image}
            height={400}
            width={500}
            alt={`preview of ${project.title}`}
            className={`scrolling-pic  ${
              isHov && `transform: translateY(-${project.translateY}%)`
            }`}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
