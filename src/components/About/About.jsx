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
      className="about overflow-hidden relative"
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
        <motion.div
          animate={controls}
          variants={fromLeft}
          initial="hidden"
          className="basis-full"
        >
          <Heading title={"About Me"} linkTo={"/#about"} />
          <section className="flex flex-col gap-2 font-poppins300">
            <p>
              Hello there, my name is Jana and I aim to become an{" "}
              <span className="font-poppins500 underline-on-hover">
                impactful
              </span>{" "}
              member of the exciting, challenging world of web development and
              programming.
            </p>
            <p>
              I firmly believe that through consistent work,{" "}
              <span className="font-poppins500 underline-on-hover">
                discipline
              </span>{" "}
              and patience, I can put my mind to anything!
            </p>
            <p>
              I am actively seeking a job as a Front-end Developer and I can't
              wait to put my skills to use and make<br></br>
              <span className="font-poppins500 underline-on-hover">
                a real difference
              </span>
              .
            </p>
          </section>
          {/* <div className="self-start">
            <Button content={"Send me a new challenge"} />
          </div> */}
        </motion.div>
        <Skills inView={inView} />
      </section>

      <WatermarkBottomDesktop title={"AboutMe"} top={"95%"} left={"80%"} />
      <WatermarkBottomMobile title={"AboutMe"} top={"95%"} left={"45%"} />
    </div>
  );
};

export default About;
