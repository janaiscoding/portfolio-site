import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-softblack shadow-md">
      <div className="flex justify-between items-center px-6 max-w-6xl h-20 md:mx-auto ">
        <div className="font-overpass600 text-base text-white">
          Copyright © 2023. All rights are reserved
        </div>
        <div className="flex gap-6">
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
