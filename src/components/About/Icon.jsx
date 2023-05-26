import React from "react";
import '../../styles/icon.css'
const Icon = ({ url, name }) => {
  return (
    <div className="flex gap-4 justify-between items-end p-2 icon">
        <img
          src={url}
          width={28}
          height={28}
          alt={`${name} Icon`}
          title={name}
          className="hover:cursor-pointer"
        />
        <p className="font-overpass600 text-center">{name}</p>
    
    </div>
  );
};
export default Icon;
