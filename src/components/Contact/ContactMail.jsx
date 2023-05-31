import React from "react";
import { Link } from "react-router-dom";

const ContactMail = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-grey font-overpass">Write me an e-mail at:</h1>
      <Link
        className="text-2xl font-overpass600"
        to="mailto:jana.istrate@gmail.com"
      >
        jana.istrate@gmail.com
      </Link>
    </div>
  );
};
export default ContactMail;
