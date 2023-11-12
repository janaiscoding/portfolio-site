"use client";
import { motion, AnimationControls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fromRight } from "../animations/animations";
import Image from "next/image";
import Profile from "../../../public/assets/jana-istrate.webp";
import { useEffect } from "react";

const HeroImage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    const handleScroll = () => {
      const contour = document.querySelector<HTMLElement>(".contour")!;
      const value = window.scrollY;
      contour.style.transform = `translateY(${value * -0.1}px)`;
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={fromRight}
      initial="hidden"
      className="flex basis-full self-start justify-end relative"
    >
      <Image
        src={Profile}
        className="z-10"
        width={280}
        height={410}
        alt="Jana Istrate frontend software developer portoflio portrait "
      />
      <div className="parallax-wrapper">
        <div className="absolute contour after:border-2 after:border-blue after:w-[280px] after:h-[410px] after:absolute after:transform after:translate-y-6 after:-translate-x-[95%] after:-z-1"></div>
      </div>
    </motion.div>
  );
};
export default HeroImage;
