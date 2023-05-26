import React from "react";
import './socials.css'

const Socials = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 fixed top-[50%] p-3 left-[0%] socials easeInFromLeft">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        width={24}
        height={24}
        title="LinkedIn"
        className="hover:cursor-pointer hover:scale-110 ease-in-out"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        width={24}
        height={24}
        title="GitHub"
        className="hover:cursor-pointer hover:scale-110 "
      />
    </div>
  );
};
export default Socials;
