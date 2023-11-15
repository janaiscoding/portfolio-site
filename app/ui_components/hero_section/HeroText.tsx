import AnchorButton from "../AnchorButton";
import { fromLeft } from "../animations/animations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroText = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start tracking-wide basis-full"
      animate={controls}
      variants={fromLeft}
      initial="hidden"
    >
      <p className="text-blue text-xl tracking-tight dark:text-brightblue">👋 Hi, my name is</p>
      <h1 className="font-overpass600 text-5xl tracking-wide">
        Jana Istrate
      </h1>
      <p className="text-xl mb-10 mt-2 md:w-[80%]">
        I’m a highly driven developer based in Germany who is
        dedicated, passionate and eager to create{" "}
        <span className="font-poppins500 underline-on-hover dark:text-brightblue dark:hover:text-black">outstanding</span>{" "}
        digital experiences.
      </p>

      <AnchorButton content={"Contact me"} idAnchor="#contact" alt="Go to contact page" />
    </motion.div>
  );
};

export default HeroText;
