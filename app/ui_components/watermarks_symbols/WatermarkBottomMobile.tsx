import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { watermarkSlideInFromRight } from "@/app/animations/animations";

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
      variants={watermarkSlideInFromRight}
      className="mr-[10vh] md:hidden absolute font-overpass600 text-2xl text-black opacity-20 pointer-events-none"
    >
      {` </ ${title}>`}
    </motion.div>
  );
};

export default WatermarkBottomMobile;
