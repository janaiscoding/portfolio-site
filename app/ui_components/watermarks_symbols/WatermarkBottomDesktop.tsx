import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { watermarkSlideInFromRight } from "@/app/animations/animations";

// Idea: on hover, or on click, some cool stuff happens, a popup/animation/etc.
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
      className="mt-[2rem] hidden md:block self-end font-overpass600 text-2xl text-black/20 dark:text-brightblue/20 hover:dark:text-orange/60 overflow-hidden hover:text-blue/60 hover:cursor-default"
    >
      {` <${title} />`}
    </motion.div>
  );
};

export default WatermarkBottomDesktop;
