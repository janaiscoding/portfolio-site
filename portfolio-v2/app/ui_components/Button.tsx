import React, { useState } from "react";
import { ButtonProps } from "../types/types";

const Button = ({ content, linkTo, selector }: ButtonProps) => {
  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noreferrer"
      className="flex items-center border-2 border-blue p-2 gap-2 hover-arrow"
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
        <p>arrow up</p>
        // <FontAwesomeIcon icon={icon({ name: "arrow-up-right-from-square" })} />
      )}
    </a>
  );
};

export default Button;
