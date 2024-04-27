import React, { useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";
import { scrollToId } from "../utils/scrollService";

const AnchorButton = ({
  content,
  idAnchor,
}: {
  content: string;
  idAnchor: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => scrollToId(idAnchor)}
      aria-label={`Click button for navigating to ${idAnchor} area`}
      className="flex items-center dark:bg-blue border-2 dark:text-white border-blue p-2 gap-2 hover-arrow hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-2xl tracking-tight`}>{content}</p>
      <div className={`w-max h-max hover-arrow ${hovered && "animate-wiggle"}`}>
        <ArrowIcon />
      </div>
    </button>
  );
};

export default AnchorButton;
