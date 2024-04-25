import React, { useState } from "react";
import ArrowRight from "../../public/assets/Arrow.png";
import Image from "next/image";
import ArrowIcon from "./icons/ArrowIcon";

const AnchorButton = ({
  content,
  idAnchor,
}: {
  content: string;
  idAnchor: string;
}) => {
  const [hovered, setHovered] = useState(false);

  const scrollToId = () => {
    const element = document.getElementById(idAnchor);
    element?.scrollIntoView();
  };

  return (
    <button
      onClick={() => scrollToId()}
      aria-label={`Click button for navigating to ${idAnchor} area`}
      className="flex items-center dark:bg-blue border-2 dark:text-white border-blue p-2 gap-2 hover-arrow hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      <div
        className={`w-max h-max hover-arrow ${
          hovered ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
        }`}
      >
        <ArrowIcon />
      </div>
    </button>
  );
};

export default AnchorButton;
