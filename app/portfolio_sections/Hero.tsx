"use client";
import WatermarkBottomDesktop from "../ui_components/watermarks_symbols/WatermarkBottomDesktop";
import HeroText from "../ui_components/hero_section/HeroText";
import HeroImage from "../ui_components/hero_section/HeroImage";
import WatermarkTopDesktop from "../ui_components/watermarks_symbols/WatermarkTopDesktop";

const Hero = () => {
  return (
    <div className="home md:items-center md:justify-center my-[5vh]">
      <div className="flex flex-col gap-8">
        <WatermarkTopDesktop title="Nice to meet you" />
        <div className="flex flex-col gap-12 md:gap-6 md:flex-row md:justify-between md:max-w-6xl m-auto px-6 md:px-0">
          <HeroText />
          <HeroImage />
        </div>
        <WatermarkBottomDesktop title="HelloWorld" />
      </div>
    </div>
  );
};

export default Hero;
