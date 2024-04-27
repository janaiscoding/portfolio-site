import React from "react";
import ContactMail from "../ui_components/contact_section/ContactMail";
import ContactSocials from "../ui_components/contact_section/ContactSocials";
import Separator from "../ui_components/separator/Separator";

const Contact = () => {
  return (
    <div
      className="contact relative w-full"
      id="contact"
    >
      <section className="md:pt-[5vh]">
        <div className="flex flex-col items-center md:px-2 w-full">
          <div className="flex items-center w-full">
            <Separator isFullWidth={false} />
            <a
              href={"/#contact"}
              className="flex text-4xl font-overpass600 m-6"
            >
              <p className="text-orange">#</p>
              <h1 className="tracking-wide">Contact</h1>
            </a>
            <Separator isFullWidth={false} />
          </div>
          <h1 className="text-base md:text-xl text-grey dark:text-white/90 font-overpass600 tracking-wider">
            Let&apos;s build{" "}
            <span className="font-poppins500 text-blue dark:text-white dark:hover:text-black underline-on-hover">
              awesome
            </span>{" "}
            things
          </h1>
          <div className="flex flex-col items-center justify-between gap-6 my-12">
            <ContactMail />
            <h1 className="dark:text-white/90 tracking-widest">OR</h1>
            <ContactSocials />
          </div>
          <div className="flex items-center w-full">
            <Separator isFullWidth={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
