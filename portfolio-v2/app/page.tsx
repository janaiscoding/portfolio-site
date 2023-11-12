"use client";
import Header from "./navigation/Header";
import Hero from "./portfolio_sections/Hero";
import About from "./portfolio_sections/About";
import Projects from "./portfolio_sections/Projects";

export default function Home() {
  // console.log(<About />);
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
