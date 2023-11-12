import React from "react";
import { motion } from "framer-motion";

const fromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};
const StickySocials = () => {
  return (
    <motion.div
      variants={fromLeft}
      initial="hidden"
      animate="visible"
      className="hidden xl:flex flex-col gap-4 fixed top-[80%] p-3 left-[0%] socials"
    >
      <a
        href="https://www.linkedin.com/in/jana-istrate/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          width={24}
          height={24}
          title="LinkedIn"
          className="pulse-hover"
          alt="LinkedIn Logo"
        />
      </a>
      <a
        href="https://github.com/janaiscoding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          width={24}
          height={24}
          title="GitHub"
          className="pulse-hover"
          alt="GitHub Logo"
        />
      </a>
    </motion.div>
  );
};
export default StickySocials;
