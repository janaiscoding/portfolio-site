import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";
import Skills from "./aboutSkills/Skills";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import WatermarkTopDesktop from "../UI_elements/WMTopDesktop";
import WatermarkTopMobile from "../UI_elements/WMTopMobile";
import WatermarkBottomDesktop from "../UI_elements/WMBottomDesktop";
import WatermarkBottomMobile from "../UI_elements/WMBottomMobile";

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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      className="about overflow-hidden relative scroll-mt-2.5"
      id="about"
      ref={ref}
    >
      <WatermarkTopMobile
        title={"AboutMe onRead={()=>setImpressed(true)}"}
        top={"5%"}
        left={"5%"}
      />
      <WatermarkTopDesktop
        title={"AboutMe onRead={()=>setImpressed(true)}"}
        top={"15%"}
        left={"10%"}
      />
      <section className="flex flex-col gap-6 px-6 md:flex-row md:justify-between md:max-w-6xl md:mx-auto md:gap-40 pb-[10vh] pt-[20vh] md:mt-[15vh] md:pt-0 ">
       {/* <div className="flex flex-col gap-6 md:flex-row"> */}
        <motion.div
          animate={controls}
          variants={fromLeft}
          initial="hidden"
          className="basis-full"
        >
          <Heading title={"About Me"} linkTo={"/#about"} />
          <section className="flex flex-col gap-2 font-poppins300">
            <p>
              I aim to become an{" "}
              <span className="font-poppins500 underline-on-hover">
                impactful
              </span>{" "}
              member of the exciting, ever-evolving field of web development and
              programming.<br></br>I firmly believe that anything is possible
              through consistent work and{" "}
              <span className="font-poppins500 underline-on-hover">
                discipline.
              </span>
            </p>

            <p>
              Outside of coding, I enjoy working out, playing
              ARPGs with my friends or watch a good movie.{"  "}
            </p>
            <p>
              <span className="font-poppins500 underline-on-hover">
                Thank you
              </span>{" "}
              for getting to know me!
            </p>
          </section>
          {/* <div className="self-start">
            <Button content={"Send me a new challenge"} />
          </div> */}
        </motion.div>
        <Skills inView={inView} />
        {/* </div>
        <Stats /> */}
      </section>

      <WatermarkBottomDesktop title={"AboutMe"} top={"95%"} left={"80%"} />
      <WatermarkBottomMobile title={"AboutMe"} top={"95%"} left={"45%"} />
    </div>
  );
};

export default About;
