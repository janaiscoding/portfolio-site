import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WatermarkProps } from "../types/types";

const fromLeftWatermark = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    transition: { duration: 1 },
  },
};

const WatermarkTopMobile = ({ title, top, left }: WatermarkProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fromLeftWatermark}
      style={{ top: top, left: left }}
      className={`absolute font-overpass600 text-2xl md:hidden text-black opacity-20 pointer-events-none`}
    >
      {` <${title}>`}
    </motion.div>
  );
};

export default WatermarkTopMobile;
