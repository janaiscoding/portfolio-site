import React, { useEffect } from "react";
import Icon from "./Icon";
import { mySkills } from "./mySkills";

import { useAnimation, motion } from "framer-motion";
import FramerMotion from "./FramerMotion";
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
      </div>
      <div className="self-end font-poppins300 text-grey dark:text-white/90 text-sm mt-2">
        *Open to work with stuff not listed above
      </div>
    </motion.section>
  );
};

export default Skills;
