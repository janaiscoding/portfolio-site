"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const fromLeft = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hidden: {
      x: -100,
      opacity: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      variants={fromLeft}
      initial="hidden"
      animate="visible"
      className="h-[80vh] flex flex-col items-center px-6 gap-6 md:justify-center md:max-w-6xl md:pb-0 md:mx-auto "
    >
      <h1 className="text-4xl font-overpass600">
        Hmm. Seems you are on the wrong page somehow 🤔
      </h1>
      <Link href="/" className="flex items-center border-2 border-blue p-2 gap-2 hover-arrow hover:cursor-pointer">Let&apos;s get you back home!</Link>
    </motion.div>
  );
}
