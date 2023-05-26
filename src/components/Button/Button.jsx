import React, { useState } from "react";
import ArrowRight from "../../assets/Icons/Arrow.png";
import "./arrow.css";

const Button = ({ content }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
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
    </button>
  );
};

export default Button;
