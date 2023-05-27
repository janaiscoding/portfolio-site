import React, { useState } from "react";
import ArrowRight from "../../assets/Icons/Arrow.png";
import "./arrow.css";
import { HashLink as Link } from "react-router-hash-link";

const HashButton = ({ content, linkTo }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={linkTo}
      className={`flex items-center border-2 border-blue p-2 gap-2 mt-6`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      <img
        src={ArrowRight}
        className={`w-max h-max hover-arrow ${hovered ? "translate-x-1" : ""}`}
        alt="arrow right indicator"
      />
    </Link>
  );
};

export default HashButton;
