import React, { useState, useEffect } from "react";
import "../index.css";
import headerImg from "../assets/img/header-img.svg";
import AnimatedLetters from "./AnimatedLetters";

export const Banner = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['R', 'u', 'd', 'r', 'a', ' ', 'P', 'r', 'a', 't', 'a', 'p', ' ', 'S', 'i', 'n', 'g', 'h'];
  const jobArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    let interval = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 6000)
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full sm:flex justify-around ">
      <div className="flex flex-col pt-28 animation banner_1">
        <div className="p-3 welcome w-[50%]">
          <button className="text-white text-xl font-bold">
            Welcome to my Portfolio
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <h1 className="animation-text text-white sm:text-5xl font-bold cursor-crosshair text-3xl">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>i,</span>
            <span className={`${letterClass} _12`}> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          </h1>
          <h1 className="animation-text text-white sm:text-5xl font-bold cursor-crosshair text-3xl"><AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} /></h1>
          <h1 className="animation-text text-white sm:text-5xl font-bold cursor-crosshair text-3xl"><AnimatedLetters letterClass={letterClass} strArray={jobArray} index={33} /></h1>
        </div>
        <div className="text-xl font-bold button sm:w-[41%] mt-6 sm:block w-[60%]">
          <a href="#about"><button className="transition duration-[2s] py-4 px-8 border text-white hover:bg-white hover:text-black">
            Click to know me
          </button></a>
        </div>
      </div>
      <div className="flex items-center pt-10 banner_2">
        <div className="h-[500px]">
          <img src={headerImg} alt="Header Img" className="cartoon sm:h-[90%] h-[50%]" />
        </div>
      </div>
    </section>
  );
};
