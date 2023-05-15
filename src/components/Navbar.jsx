import React, { useState } from "react";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon3 from "../assets/img/nav-icon3.svg";
import navicon4 from '../assets/img/icons8-resume-20.png'
import { menu, close } from '../assets'
import resume from '../assets/resume/resume.pdf';


export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between items-center mt-8 ">
      <div className="text-white text-4xl font-bold ml-16">RUDRA</div>
      <div className="flex items-center mr-16">
        <div className="hidden sm:flex">
          <a
            href="#home"
            className={` mr-16 text-xl ${active === "Home" ? "text-white" : "text-gray-600"
              } hover:text-white`}
            onClick={() => {
              setActive("Home");
              window.scrollTo(0, 0);
            }}
          >
            Home
          </a>
          <a
            href="#skills"
            className={` mr-16 text-xl ${active === "Skills" ? "text-white" : "text-gray-600"
              } hover:text-white`}
            onClick={() => setActive("Skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={` mr-8 text-xl ${active === "Projects" ? "text-white" : "text-gray-600"
              } hover:text-white`}
            onClick={() => setActive("Projects")}
          >
            Projects
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <div className="flex justify-end items-start flex-1 flex-col gap-4">
              <a
                href="#home"
                className={`text-xl ${active === "Home" ? "text-white" : "text-gray-600"
                  } hover:text-white`}
                onClick={() => {
                  setActive("Home");
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </a>
              <a
                href="#skills"
                className={` text-xl ${active === "Skills" ? "text-white" : "text-gray-600"
                  } hover:text-white`}
                onClick={() => setActive("Skills")}
              >
                Skills
              </a>
              <a
                href={resume}
                className={` text-xl ${active === "Projects" ? "text-white" : "text-gray-600"
                  } hover:text-white`}
                download="MyResume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>


        <div className="sm:flex hidden text-white gap-2 items-center">
          <a href="https://www.linkedin.com/in/rudra-pratap-singh-7151a7229/" target="_blank"> <div className=" flex rounded-full border bg-gray-800 w-[40px] h-[40px] items-center justify-center border-gray-600">

            <img
              src={navicon1}
              alt="LinkedIn"
              className="h-[20px] w-[20px]"
            />

          </div></a>
          <a href="https://github.com/rudrachouhan" target="_blank"> <div className=" flex rounded-full border bg-gray-800 w-[40px] h-[40px] items-center justify-center border-gray-600">

            <img src="src/assets/github.png" alt="GitHub" className="h-[20px] w-[20px]" />

          </div></a>
          <a href="https://www.instagram.com/chauhan_rudraa/" target="_blank">  <div className=" flex rounded-full border bg-gray-800 w-[40px] h-[40px] items-center justify-center border-gray-600">

            <img
              src={navicon3}
              alt="Instagram"
              className="h-[20px] w-[20px]"
            />

          </div></a>
          <a href={resume} target="_blank" download="MyResume">  <div className=" flex rounded-full border bg-gray-800 w-[40px] h-[40px] items-center justify-center border-gray-600">

            <img
              src={navicon4}
              alt="Resume"
              className="h-[20px] w-[20px]"
            />
 
          </div></a>
          <div className="text-xl ml-5 font-bold button">
           <a href="#contact"><button className="transition duration-[2s] py-4 px-8 border text-white hover:bg-white hover:text-black text">
              Let's Connect
            </button></a> 
          </div>
        </div>
      </div>
    </div>
  );
};
