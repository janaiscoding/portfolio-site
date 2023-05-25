import React, { useState } from "react";
import "../../styles/arrow.css";
const Button = ({ content }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="flex items-center border-2 border-blue p-2 gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight ${hovered ? `ml-0` : `ml-[20px]`}`}>{content}</p>
      <svg
        className={`${
          hovered ? "opacity-100" : "opacity-80 items-end"
        } hover-arrow`}
      >
        <path
          className={`${hovered ? "self-start" : "self-end"}`}
          d={
            hovered
              ? "M0 9.35772H50.9956L44.2001 2.29941L46.4134 0L57 11L46.4134 22L44.2001 19.7006L50.9956 12.6423H0V9.35772Z"
              : "M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
          }
          fill="#2D8AA4"
        ></path>
      </svg>
    </button>
  );
};

export default Button;
