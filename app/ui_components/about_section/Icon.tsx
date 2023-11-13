import React from "react";
// import "./icon.css";
import Image from "next/image";

const Icon = ({ url, name }: { url: string; name: string }) => {
  return (
    <div className="icon bg-[#cdcdcd] dark:bg-black hover:bg-blue text-black/80 hover:text-white dark:text-white/90 dark:hover:bg-blue hover:cursor-default">
      <Image
        src={url}
        width={28}
        height={28}
        alt={`${name} Icon`}
        title={name}
      />
      <p className="font-overpass600 text-center">{name}</p>
    </div>
  );
};
export default Icon;
