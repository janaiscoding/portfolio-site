import React, { useEffect, Dispatch, SetStateAction } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./loading.css";

interface LoadingProps {
  setDone: Dispatch<SetStateAction<boolean>>;
}

const Loading: React.FC<LoadingProps> = ({ setDone }) => {
  useEffect(() => {
    const myText = new SplitType("#myText");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
    setTimeout(() => {
      setDone(true);
    }, 1700);
  }, []);
  return (
    <div className="loading-screen">
      <h1 className="font-overpass600 text-4xl md:text-8xl" id="myText">
        Jana.Istrate
      </h1>
    </div>
  );
};
export default Loading;
