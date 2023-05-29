import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ContactCard from "./ContactMail";
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
      <motion.section initial="hidden" animate={controls} variants={fromRight}>
        <div className="flex flex-col items-center px-12 w-full">
          <div className="flex items-center w-full">
            <div className="separator"></div>
            <Link
              to={"/#contact"}
              className="flex text-4xl font-overpass600 m-6"
            >
              <p className="text-orange">#</p>
              <h1 className="tracking-wide text-black">Let’s Talk</h1>
            </Link>
            <div className="separator"></div>
          </div>
          <h1 className="text-base md:text-xl text-grey font-overpass600 tracking-wider">
            Let’s discuss your <span className="text-blue">awesome</span> ideas
          </h1>
          <div className="flex flex-col items-center justify-between gap-6 my-12">
            <ContactMail />
            <h1 className="text-softblack tracking-widest">OR</h1>
            <ContactSocials />
          </div>
          <div className="flex items-center w-full my-6">
            <div className="separator"></div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
