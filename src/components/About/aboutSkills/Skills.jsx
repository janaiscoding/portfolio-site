import React, { useEffect } from "react";
import Icon from "./Icon";
import mySkills from "./mySkills";
import { useAnimation, motion } from "framer-motion";
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

const Skills = ({ inView }) => {
  const allSkills = mySkills.map((skill) => (
    <Icon key={skill.id} url={skill.url} name={skill.name} />
  ));
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.section
      animate={controls}
      initial="hidden"
      variants={fromRight}
      className="flex flex-col basis-full"
    >
      <h2 className="text-2xl text-grey font-overpass600 tracking-wider text-center my-4">
        MY SKILLS
      </h2>
      <div className="flex flex-wrap items-end self-end gap-4 p-2">
        {allSkills}
        <div className="flex gap-4 justify-between items-end p-2 icon">
          <svg
            xmlns="http:www.w3.org/2000/svg"
            viewBox="0 0 14 21"
            role="presentation"
            width={28}
            height={28}
          >
            <path
              d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-overpass600 text-center">Framer Motion</p>
        </div>
      </div>
      <div className="self-end font-poppins300 text-grey text-sm mt-2">
        *Open to work with stuff not listed above, currently learning MERN
      </div>
    </motion.section>
  );
};
export default Skills;
