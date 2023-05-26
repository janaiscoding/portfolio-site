import React from "react";
import Heading from "../UI_elements/Heading";
import Mission from "./aboutCards/Mission";
import Hobbies from "./aboutCards/Hobbies";
import Values from "./aboutCards/Values";
import Skills from "./aboutSkills/Skills";
import Button from "../Button/Button";

const About = () => {
  return (
    <section className="flex flex-col my-10 gap-6 px-6 md:flex-row md:gap-40 md:justify-between md:max-w-[1200px] md:mt-40 md:mx-auto easeInFromLeft">
      <div className=" flex flex-col md:max-w-[60%]">
        <Heading title={"About Me"} />
        <section className="flex flex-col gap-6">
          <p>
            I aim to become an
            <span className="text-blue"> impactful</span> member of the
            exciting, challenging world of web development and programming.
          </p>
          <p>
            I firmly believe that through consistent work,
            <span className="text-blue"> discipline</span> and patience, I can
            put my mind to anything and continuously improve!
          </p>
        </section>
        <div className="self-start">
          <Button content={"Send me a new challenge"} />
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
