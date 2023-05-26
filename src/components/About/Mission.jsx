import React from "react";
import Subheading from "../UI_elements/Subheading";
const Mission = () => {
  return (
    <div className="shadow-md p-4">
      <Subheading subheading={"My mission."} />
      <p>
        I aim to become an
        <span className="text-blue"> impactful</span> member of the exciting,
        challenging world of web development and programming.
      </p>
    </div>
  );
};
export default Mission;
