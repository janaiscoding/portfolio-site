"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Profile from "../../../public/assets/jana-istrate.webp";
import { useEffect } from "react";
import { slideInFromRight } from "@/app/animations/animations";

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
      variants={slideInFromRight}
      initial="hidden"
      className="relative flex basis-full self-center justify-end w-full"
    >
      <Image
        src={Profile}
        className="z-10 border border-solid border-2 rounded-md border-orange dark:border-orange w-full md:w-[280px]"
        width={280}
        height={410}
        alt="Jana Istrate full-stack software developer portoflio portrait picture"
      />
      <div className="parallax-wrapper">
        <div className="hidden md:block absolute contour after:border-2 after:rounded-md after:border-blue after:w-full md:after:w-[280px] after:h-[410px] after:absolute after:transform after:translate-y-6 after:-translate-x-[95%] after:-z-1"></div>
      </div>
    </motion.div>
  );
};
export default HeroImage;
