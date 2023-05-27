import React, { useEffect } from "react";
import Button from "../../Button/Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

const CardOne = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
    console.log(inView, "card1");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={fromLeft}
      initial="hidden"
      className="card shadow-md flex basis-full p-6"
    >
      <div className="card-content flex flex-col gap-2 items-start border-solid border-red border-r basis-full">
        <h1 className="font-overpass600 text-2xl">
          Clonnerboxd - Letterboxd Clone
        </h1>
        <ul className="flex text-grey text-lg font-poppins500">
          <li>React</li>
          <li>Firebase Auth</li>
          <li>Firestore DB</li>
          <li>TailwindCSS</li>
          <li>API</li>
        </ul>
        <div className="font-poppins300">
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              As an avid film lover, I re-created a fully responsive clone of
              the popular social movie platform Letterboxd
            </p>
          </div>
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              Create an account or try the app from the demo one
            </p>
          </div>
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              <span className="font-poppins500">Search</span>,{" "}
              <span className="font-poppins500">save</span> and
              <span className="font-poppins500"> review </span>
              your favorite movies fetched from TMDB API
            </p>
          </div>
        </div>
        <div className="flex gap-9">
          <Button content={"Demo"} linkTo={"https://clonnerboxd.web.app/"} />
          <Button
            content={"Repo"}
            linkTo={"https://github.com/janaiscoding/letterboxd-clone"}
          />
        </div>
      </div>
      <div className="card-carousel basis-full border-solid border-red border-l"></div>
    </motion.div>
  );
};

export default CardOne;
