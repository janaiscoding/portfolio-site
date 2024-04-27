"use client";
import Header from "./navigation/Header";
import About from "./app_sections/About";
import Projects from "./app_sections/Projects";
import Contact from "./app_sections/Contact";
import Footer from "./navigation/Footer";
import StickySocials from "./ui_components/StickySocials";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Hero from "./app_sections/Hero";

export default function Home() {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    // If theme is not set already, check system preferences and set initial
    if (!localStorageTheme) {
      let currentTheme;
      const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
      if (isDark) {
        currentTheme = "dark";
        document.documentElement.classList.add(currentTheme);
        localStorage.setItem("theme", currentTheme);
      } else {
        currentTheme = "light";
        document.documentElement.classList.add(currentTheme);
        localStorage.setItem("theme", currentTheme);
      }
      themeContext.setCurrent(currentTheme);
    }

    // Add based on previous preferences
    if (localStorageTheme) {
      document.documentElement.classList.add(localStorageTheme);
      themeContext.setCurrent(localStorageTheme);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="px-4 pt-14 md:px-6 md:max-w-7xl m-auto flex flex-col gap-20 overflow-hidden">
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
