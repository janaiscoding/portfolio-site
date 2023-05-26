import React from "react";
import Icon from "./Icon";
import mySkills from "./mySkills";

const Skills = () => {
  const allSkills = mySkills.map((skill) => (
    <Icon key={skill.id} url={skill.url} name={skill.name} />
  ));
  return (
    <section className="flex flex-col easeInFromRight">
      <h2 className="text-2xl text-grey font-overpass600 tracking-wider text-center my-4">
        MY SKILLS
      </h2>
      <div className="flex flex-wrap items-end self-end gap-4 p-2">
        {allSkills}
      </div>
    </section>
  );
};
export default Skills;
