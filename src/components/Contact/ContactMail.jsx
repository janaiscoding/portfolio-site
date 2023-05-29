import React from "react";
import { Link } from "react-router-dom";

const ContactMail = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h3 className="text-grey font-overpass">Write me an e-mail at:</h3>
      <p
        className="text-2xl font-overpass600"
        onClick={(e) => {
          window.location = "jana.istrate@example.com";
          e.preventDefault();
        }}
      >
        jana.istrate@gmail.com
      </p>
    </div>
  );
};
export default ContactMail;
