import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
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
        <div className="flex flex-col items-center px-6 md:max-w-6xl md:mx-auto pb-[10vh]">
          <Link
            to={"/#contact"}
            className="flex text-4xl font-overpass600 my-4"
          >
            <p className="text-orange">#</p>
            <h1 className="tracking-wide text-black">Let’s Talk</h1>
          </Link>
          <h1 className="text-base md:text-xl text-grey font-overpass600 tracking-wider mb-4  pl-2 md:pl-6">
            Let’s discuss your <span className="text-blue">awesome</span> ideas
          </h1>
          <div className="flex justify-between">
            <ContactCard title="Mail" content="jana.istrate@gmail.com" />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
