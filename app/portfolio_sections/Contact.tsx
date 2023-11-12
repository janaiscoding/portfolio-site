import React from "react";
import ContactMail from "../ui_components/contact_section/ContactMail";
import ContactSocials from "../ui_components/contact_section/ContactSocials";

const Contact = () => {
  return (
    <div className="contact overflow-hidden relative max-w-7xl m-auto" id="contact">
      <section className="md:pt-[5vh]">
        <div className="flex flex-col items-center px-6 md:px-0 w-full">
          <div className="flex items-center w-full">
            <div className="separator"></div>
            <a
              href={"/#contact"}
              className="flex text-4xl font-overpass600 m-6"
            >
              <p className="text-orange">#</p>
              <h1 className="tracking-wide text-black">Contact</h1>
            </a>
            <div className="separator"></div>
          </div>
          <h1 className="text-base md:text-xl text-grey font-overpass600 tracking-wider">
            Let’s build{" "}
            <span className="font-poppins500 text-blue underline-on-hover">
              awesome
            </span>{" "}
            things
          </h1>
          <div className="flex flex-col items-center justify-between gap-6 my-12">
            <ContactMail />
            <h1 className="text-softblack tracking-widest">OR</h1>
            <ContactSocials />
          </div>
          <div className="flex items-center w-full">
            <div className="separator"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
