import React from "react";
import Image from "next/image";

const SkillIcon = ({ url, name }: { url: string; name: string }) => {
  return (
    <div className="icon bg-[#cdcdcd] dark:bg-black hover:bg-blue text-black/80 hover:text-white dark:text-white/90 dark:hover:bg-blue hover:cursor-default transition">
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

export default SkillIcon;
