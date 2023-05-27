import React from "react";
import "./socials.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Socials = () => {
  return (
    <motion.div
      variants={fromLeft}
      initial="start"
      animate="end"
      className="hidden md:flex flex-col gap-4 fixed top-[50%] p-3 left-[0%] socials"
    >
      <Link to="https://www.linkedin.com/in/jana-istrate/">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          width={24}
          height={24}
          title="LinkedIn"
          className="hover:cursor-pointer hover:scale-110 ease-in-out"
          alt="LinkedIn Logo"
        />
      </Link>
      <Link to="https://github.com/janaiscoding">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          width={24}
          height={24}
          title="GitHub"
          className="hover:cursor-pointer hover:scale-110 "
          alt="GitHub Logo"
        />
      </Link>
    </motion.div>
  );
};
export default Socials;

const fromLeft = {
  start: {
    x: "-100vw",
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};
