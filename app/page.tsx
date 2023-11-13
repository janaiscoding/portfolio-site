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
  // useEffect(() => {
  //   if ("theme" in localStorage) {
  //     document.documentElement.classList.add(localStorage.theme);
  //   } else if (
  //     !("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     localStorage.theme = "dark";
  //     document.documentElement.classList.add("dark");
  //   } else if (
  //     !("theme" in localStorage) &&
  //     !window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     localStorage.theme = "light";
  //     document.documentElement.classList.remove("dark");
  //   }
  //   //Remember user preferences
  // }, []);
  return (
    <main>
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
