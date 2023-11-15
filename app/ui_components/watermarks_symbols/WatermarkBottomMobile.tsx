import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WatermarkProps } from "../../types/types";

const fromRightWatermark = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    transition: { duration: 1 },
  },
};

const WatermarkBottomMobile = ({ title }: { title: string }) => {
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
      variants={fromRightWatermark}
      className="mr-[10vh] md:hidden absolute font-overpass600 text-2xl text-black opacity-20 pointer-events-none"
    >
      {` </ ${title}>`}
    </motion.div>
  );
};

export default WatermarkBottomMobile;
