import React, { useEffect } from "react";
import Icon from "./Icon";
import { mySkills } from "./mySkills";

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

const Skills = ({ inView }: { inView: boolean }) => {
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
      <h2 className="text-2xl font-overpass600 tracking-wider text-grey dark:text-white/80 text-center md:text-end my-4 hover:cursor-default">
        MY SKILLS
      </h2>
      <div className="flex flex-wrap items-end self-end justify-start md:justify-end gap-2 md:gap-4">
        {allSkills}
        <div className="flex gap-4 justify-end items-end p-2 icon bg-[#cdcdcd] dark:bg-black hover:bg-blue text-black/80 hover:text-white dark:text-white/90 dark:hover:bg-blue">
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
        *Open to work with stuff not listed above
      </div>
    </motion.section>
  );
};
export default Skills;
