import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const Card = ({ project }) => {
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
      variants={fromLeft}
      initial="hidden"
      className="card bg-purewhite flex flex-col-reverse gap-6 md:flex-row px-2 py-6 md:p-6 h-[44rem] md:h-[30rem] lg:h-96 shadow-md hover:border-solid hover:border-softgrey"
    >
      <div className="card-content flex flex-col gap-2 items-start border-solid border-softgrey md:border-r-2 basis-full">
        <a
          target="_blank"
          rel="noreferrer"
          className="font-overpass600 text-2xl"
          href={project.demoLink}
        >
          {project.title}
        </a>
        <ul className="flex ul-tech text-grey text-base gap-1 flex-wrap md:text-lg font-poppins500">
          {project.tech.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
        <ul className="font-poppins300 text-sm md:text-base">
          {project.description.map((detail) => (
            <li key={detail.id} className="flex gap-2 py-1 items-center">
              <p className="basis-11/12">{detail.text}</p>
            </li>
          ))}
        </ul>
        <div className="flex self-center md:self-start gap-9">
          <Button
            content={"Demo"}
            linkTo={project.demoLink}
            selector={"live"}
          />
          <Button
            content={"Repo"}
            linkTo={project.repoLink}
            selector={"github"}
          />
        </div>
      </div>
      <div className="basis-full flex justify-center overflow-hidden">
        <a href={project.demoLink} className="self-start">
          <img
            src={project.image}
            height={400}
            width={500}
            alt={`preview of ${project.title}`}
            className={`scrolling-pic`}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={
              isHov
                ? { transform: `translateY(-${project.translateY}%)` }
                : null
            }
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
