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
      className="flex items-center dark:bg-blue border-2 dark:text-white border-blue p-2 gap-2 hover-arrow hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      {/* <Image
        src={ArrowRight}
        className={`w-max h-max hover-arrow ${
          hovered ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
        }`}
        alt="arrow right indicator"
      /> */}
      <div
        className={`w-max h-max hover-arrow ${
          hovered ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </a>
  );
};

export default AnchorButton;
