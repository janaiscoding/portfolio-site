import React from "react";

const Heading = ({ title, linkTo }: {title: string, linkTo: string}) => {
  return (
    <a id={linkTo} className="flex text-4xl font-overpass600 my-4 hover:cursor-default">
      <p className="text-orange">#</p>
      <h1 className="tracking-wide text-black">{title}</h1>
    </a>
  );
};
export default Heading;