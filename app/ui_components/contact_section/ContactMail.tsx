import React from "react";

const ContactMail = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-grey text-lg dark:text-white/90 font-overpass">Write me an e-mail at:</h1>
      <a
        className="text-3xl font-overpass600"
        href="mailto:jana.istrate@gmail.com"
      >
        jana.istrate@gmail.com
      </a>
    </div>
  );
};
export default ContactMail;
