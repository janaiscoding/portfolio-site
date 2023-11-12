import React, { useState } from "react";
import { ButtonProps } from "../types/types";

const Button = ({ content, linkTo, selector }: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center border-2 border-blue p-2 gap-2 hover-arrow ${
        hovered && "scale-105"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      {selector === "github" ? (
        <img
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          }
          width={24}
          height={24}
          alt="icon"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>

      )}
    </a>
  );
};

export default Button;
