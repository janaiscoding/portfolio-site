"use client";
import Header from "./navigation/Header";
import Hero from "./portfolio_sections/Hero";
import About from "./portfolio_sections/About";
import Projects from "./portfolio_sections/Projects";
import Contact from "./portfolio_sections/Contact";
import Footer from "./navigation/Footer";
import StickySocials from "./ui_components/StickySocials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:px-6">
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
