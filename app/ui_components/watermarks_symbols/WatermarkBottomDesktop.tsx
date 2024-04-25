import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WatermarkProps } from "../../types/types";
import { watermarkSlideInFromRight } from "@/app/animations/animations";



const WatermarkBottomDesktop = ({ title }: { title: string }) => {
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
      variants={watermarkSlideInFromRight}
      className="mr-40 hidden md:block self-end font-overpass600 text-2xl text-black/20 dark:text-brightblue/20 overflow-hidden pointer-events-none"
    >
      {` <${title} />`}
    </motion.div>
  );
};

export default WatermarkBottomDesktop;
