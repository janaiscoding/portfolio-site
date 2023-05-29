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
      <section className="flex flex-col gap-6 px-6 md:flex-row md:justify-between md:max-w-6xl md:mx-auto md:gap-40 py-[20vh] md:pt-[10vh] md:pb-[20vh]">
        <motion.div
          animate={controls}
          variants={fromLeft}
          initial="hidden"
          className="basis-full"
        >
          <Heading title={"About Me"} linkTo={"/#about"} />
          <section className="flex flex-col gap-6 font-poppins300">
            <p>
              I aim to become an
              <span className="text-blue"> impactful</span> member of the
              exciting, challenging world of web development and programming.
            </p>
            <p>
              I firmly believe that through consistent work,
              <span className="text-blue"> discipline</span> and patience, I can
              put my mind to anything!
            </p>
            <p>
              So why pick me? Because I'm striving for
              perfection, looking to make a difference and just wanna get *&!# done!
            </p>
          </section>
          {/* <div className="self-start">
            <Button content={"Send me a new challenge"} />
          </div> */}
        </motion.div>
        <Skills inView={inView} />
      </section>

      <WatermarkBottomDesktop title={"AboutMe"} top={"87%"} left={"80%"} />
      <WatermarkBottomMobile title={"AboutMe"} top={"90%"} left={"45%"} />
    </div>
  );
};

export default About;
