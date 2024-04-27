"use client";
import Header from "./navigation/header/Header";
import Hero from "./portfolio_sections/Hero";
import About from "./portfolio_sections/About";
import Projects from "./portfolio_sections/Projects";
import Contact from "./portfolio_sections/Contact";
import Footer from "./navigation/Footer";
import StickySocials from "./ui_components/StickySocials";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  // TODO: system preference
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      themeContext.setCurrent("dark");
    } else {
      themeContext.setCurrent("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="px-4 pt-14 md:px-6 md:max-w-7xl m-auto flex flex-col gap-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <StickySocials />
      </main>
      <Footer />
    </>
  );
}
