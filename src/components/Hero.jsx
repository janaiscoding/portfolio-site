import React from "react";
import Profile from "../assets/jana-istrate.webp";
import Button from "./UI_elements/Button";

const Hero = () => {
  return (
    <div className="flex flex-col px-6 my-10 gap-6">
      <article className="tracking-wide">
        <p className="font-poppins300 text-blue text-base tracking-tight">
          Hi, my name is
        </p>
        <h1 className="font-overpass600 text-black text-4xl">Jana Istrate.</h1>
        <h3 className="font-poppins500 text-grey text-2xl">
          I build elegant things for the web.
        </h3>
        <p className="font-poppins300 text-black text-base mb-4">
          I’m a highly driven Front-end Developer who is dedicated, passionate
          and eager to create{" "}
          <span className="font-poppins500 italic text-blue">outstanding</span>{" "}
          digital experiences.
        </p>

        <Button content={"Check out my projects"} />
      </article>
      <section className="relative">
        <img
          src={Profile}
          className="w-[240px] z-10 relative"
          alt="Jana Istrate portoflio portrait"
        />
        <div
          className="border-2 border-blue w-[240px] top-0 left-0 translate-y-4 translate-x-4 absolute"
          style={{ height: "-webkit-fill-available" }}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
