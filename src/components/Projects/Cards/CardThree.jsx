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

const CardThree = ({ project }) => {
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
          Umaī - Japanese Restaurant
        </h1>
        <ul className="flex text-grey text-lg font-poppins500">
          <li>React</li>
          <li>CSS3</li>
          <li>TailwindCSS</li>
          <li>Ecommerce</li>
        </ul>
        <div className="font-poppins300">
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              Umaī is a fictive asian restaurant with a shopping cart
              functionality
            </p>
          </div>
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              The UI is inspired by visiting resturant websites and design
              platforms targeting the same audience
            </p>
          </div>
          <div className="flex gap-2 py-1 items-center">
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <p className="basis-11/12">
              Add to cart, remove, subscribe to the newsletter for “25%
              discount” or book a “reservation”
            </p>
          </div>
        </div>
        <div className="flex gap-9">
          <Button content={"Demo"} linkTo={'https://umai-restaurant.web.app/'}/>
          <Button content={"Repo"} linkTo={'https://github.com/janaiscoding/shopping-cart'}/>
        </div>
      </div>
      <div className="card-carousel basis-full border-solid border-red border-l"></div>
    </motion.div>
  );
};

export default CardThree;
