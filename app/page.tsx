"use client";
import Header from "./navigation/Header";
import Hero from "./portfolio_sections/Hero";
import About from "./portfolio_sections/About";
import Projects from "./portfolio_sections/Projects";
import Contact from "./portfolio_sections/Contact";
import Footer from "./navigation/Footer";
import StickySocials from "./ui_components/StickySocials";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="px-4 md:px-6">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <StickySocials />
    </main>
  );
}
