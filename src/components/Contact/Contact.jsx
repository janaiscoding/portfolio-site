import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const fromBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: {
    y: 100,
    opacity: 0,
    transition: { duration: 1 },
  },
};
const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
    console.log(inView, "contact");
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={fromBottom}
      className="contact overflow-hidden h-[20vh]"
      id="contact"
      ref={ref}
    >
      <div className="grid place-content-center">
        <Heading title="Let’s Talk" linkTo={'/#contact'} />
      </div>
    </motion.div>
  );
};

export default Contact;
