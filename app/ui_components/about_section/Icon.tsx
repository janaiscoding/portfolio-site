import React from "react";
// import "./icon.css";
import Image from "next/image";

const Icon = ({ url, name }: { url: string; name: string }) => {
  return (
    <div className="flex gap-4 justify-between items-end p-2 icon">
      <Image src={url} width={28} height={28} alt={`${name} Icon`} title={name} />
      <p className="font-overpass600 text-center">{name}</p>
    </div>
  );
};
export default Icon;
