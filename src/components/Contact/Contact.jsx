import React, { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ContactMail from "./ContactMail";
import ContactSocials from "./ContactSocials";
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

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } 
  }, [controls, inView]);

  return (
    <div className="contact overflow-hidden relative" id="contact" ref={ref}>
      <motion.section
        initial="hidden"
        animate={controls}
        variants={fromRight}
        className="md:pt-[5vh]"
      >
        <div className="flex flex-col items-center px-6 md:px-12 w-full">
          <div className="flex items-center w-full">
            <div className="separator"></div>
            <Link
              to={"/#contact"}
              className="flex text-4xl font-overpass600 m-6"
            >
              <p className="text-orange">#</p>
              <h1 className="tracking-wide text-black">Contact</h1>
            </Link>
            <div className="separator"></div>
          </div>
          <h1 className="text-base md:text-xl text-grey font-overpass600 tracking-wider">
            Let’s build <span className="font-poppins500 text-blue underline-on-hover">awesome</span> things
          </h1>
          <div className="flex flex-col items-center justify-between gap-6 my-12">
            <ContactMail />
            <h1 className="text-softblack tracking-widest">OR</h1>
            <ContactSocials />
          </div>
          <div className="flex items-center w-full mt-6">
            <div className="separator"></div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
