"use client";
import WatermarkBottomDesktop from "../ui_components/watermarks_symbols/WatermarkBottomDesktop";
import HeroText from "../ui_components/hero_section/HeroText";
import HeroImage from "../ui_components/hero_section/HeroImage";
import React from "react";

// Was reworked.
const Hero = () => {
  return (
    <section className="home md:items-center md:justify-center">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12 md:gap-6 md:flex-row md:justify-between">
          <HeroText />
          <HeroImage />
        </div>
        <WatermarkBottomDesktop title="HelloWorld" />
      </div>
    </section>
  );
};

export default Hero;
