import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WatermarkProps } from "../../utils/types";
import { watermarkSlideInFromLeft } from "@/app/animations/animations";


const WatermarkTopDesktop = ({ title }: { title: string }) => {
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
      variants={watermarkSlideInFromLeft}
      className="ml-40 hidden md:block font-overpass600 md:text-2xl text-black/20 dark:text-brightblue/20 overflow-hidden pointer-events-none"
    >
      {` <${title}>`}
    </motion.div>
  );
};

export default WatermarkTopDesktop;
