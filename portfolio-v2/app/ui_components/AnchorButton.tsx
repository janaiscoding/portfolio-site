import React, { useState } from "react";
import ArrowRight from "../../public/assets/Arrow.png";
import Image from "next/image";

const AnchorButton = ({
  content,
  idAnchor,
}: {
  content: string;
  idAnchor: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={idAnchor}
      // target="_blank"
      rel="noreferrer"
      aria-label="Click this link to see the following section"
      className="flex items-center border-2 border-blue p-2 gap-2 hover-arrow hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      <Image
        src={ArrowRight}
        className={`w-max h-max hover-arrow ${
          hovered ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
        }`}
        alt="arrow right indicator"
      />
    </a>
  );
};

export default AnchorButton;
