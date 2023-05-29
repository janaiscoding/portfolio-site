import React from "react";
import { Link } from "react-router-dom";

const ContactSocials = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-grey font-overpass">
        Reach me through social media:
      </h3>
      <div className="flex gap-6">
        <Link to="https://www.linkedin.com/in/jana-istrate/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            width={36}
            height={36}
            title="LinkedIn"
            className="hover:cursor-pointer hover:scale-110 ease-in-out"
            alt="LinkedIn Logo"
          />
        </Link>
        <Link to="https://github.com/janaiscoding" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            width={36}
            height={36}
            title="GitHub"
            className="hover:cursor-pointer hover:scale-110 "
            alt="GitHub Logo"
          />
        </Link>
      </div>
    </div>
  );
};
export default ContactSocials;
