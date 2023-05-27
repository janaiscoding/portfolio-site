import React, { useEffect } from "react";
import Button from "../../Button/Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    opacity: 0,
    transition: { duration: 1 },
  },
};
const CardTwo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
    console.log(inView, "card2");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={fromRight}
      initial="hidden"
      className="card shadow-md flex basis-full p-6"
    >
      <div className="card-content flex flex-col gap-2 items-start border-solid border-red border-r basis-full">
        <h1 className="font-overpass600 text-2xl">
          Historical Photo Tagging App
        </h1>
        <ul className="flex text-grey text-lg font-poppins500">
          <li>React</li>
          <li>Firebase</li>
          <li>CSS3</li>
          <li>Framer Motion</li>
        </ul>
        <div className="font-poppins300">
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              A Find Waldo-like game in which you have to find all the targets
              while a counter keeps your score.
            </p>
          </div>
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              The backend incorporation used through Firebase is providing a
              global leaderboard as well as storing game data.
            </p>
          </div>
        </div>
        <div className="flex gap-9">
          <Button
            content={"Demo"}
            linkTo={"https://a-photo-tagging-app.web.app/"}
          />
          <Button
            content={"Repo"}
            linkTo={"https://github.com/janaiscoding/photo-tagging-app"}
          />
        </div>
      </div>
      <div className="card-carousel basis-full border-solid border-red border-l"></div>
    </motion.div>
  );
};

export default CardTwo;
