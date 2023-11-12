"use client";
import WatermarkBottomDesktop from "../ui_components/WatermarkBottomDesktop";
import HeroText from "../ui_components/hero_section/HeroText";
import HeroImage from "../ui_components/hero_section/HeroImage";
import WatermarkTopDesktop from "../ui_components/WatermarkTopDesktop";

const Hero = () => {
  return (
    <div className="home md:items-center md:justify-center my-[5vh]">
      <div className="flex flex-col gap-12 md:gap-6 md:flex-row md:justify-between md:max-w-7xl m-auto px-6 md:px-0">
        <HeroText />
        <HeroImage />
      </div>
      <WatermarkTopDesktop title="Nice to meet you" top="10%" left="15%" />
      <WatermarkBottomDesktop title="HelloWorld" top="70%" left="80%" />
    </div>
  );
};

export default Hero;
