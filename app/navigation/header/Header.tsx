"use client";
import React, { useState, useRef, useEffect, RefObject } from "react";
import { motion } from "framer-motion";
import Hamburger from "../../ui_components/icons/Hamburger";
import { usePathname, useRouter } from "next/navigation";
import { slideInFromTop } from "../../animations/animations";
import Navigation from "./Navigation";
import ThemeIcon from "../ThemeIconSetter";
import HeaderLogo from "./HeaderLogo";
import NavigationSm from "./NavigationSm";

const Header = () => {
  const [showSmHeader, setShowSmHeader] = useState(false);
  const ref = useRef<any>(null);
  const router = useRouter();
  const routeParams = usePathname();

  const onClickHome = () => {
    if (routeParams !== "/") {
      router.push("/");
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSmHeader(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-darkBg shadow-md">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center max-w-7xl h-14 md:mx-auto px-4"
        ref={ref}
      >
        <HeaderLogo onClickHome={onClickHome} />

        <div className="md:hidden flex gap-4">
          <ThemeIcon />
          <Hamburger onClick={() => setShowSmHeader(!showSmHeader)} />
        </div>

        <Navigation onClickHome={onClickHome} />

        {showSmHeader && (
          <NavigationSm
            onClickHome={onClickHome}
            handleClose={() => setShowSmHeader(false)}
          />
        )}
      </motion.div>
    </header>
  );
};

export default Header;
