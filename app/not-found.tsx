"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromLeft } from "./animations/animations";
import Header from "./navigation/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.section
        variants={slideInFromLeft}
        initial="hidden"
        animate="visible"
        className="min-h-[70vh] mx-auto px-6 gap-6 md:max-w-6xl flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl md:text-4xl font-overpass600">
          Hmm. Seems you are on the wrong page somehow 🤔
        </h1>
        <Link
          href="/"
          className="flex items-center border-2 border-blue p-2 gap-2 hover-arrow hover:cursor-pointer"
        >
          Go back home!
        </Link>
      </motion.section>
    </div>
  );
}
