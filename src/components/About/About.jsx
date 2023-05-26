import React from "react";
import Heading from "../UI_elements/Heading";
import Mission from "./Mission";
import Hobbies from "./Hobbies";
import Values from "./Values";
import Skills from "./Skills";
import Button from "../UI_elements/Button";

const About = () => {
  return (
    <section className="flex flex-col my-10 px-6 md:flex-row md:gap-20 md:justify-between md:max-w-[1300px] md:mx-auto">
      <div className=" flex flex-col md:max-w-[60%]">
        <Heading title={"About Me"} />
        <section className="flex flex-col gap-6 md:flex-row">
          <Mission />
          <Values />
          <Hobbies />
        </section>
        <div className="self-center">
          <Button content={"Send me a new challenge"} />
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
