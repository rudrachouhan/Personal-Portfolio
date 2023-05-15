import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../index.css'
import { fadeIn, slideIn } from "../assets/utils/motion";
import { SectionWrapper } from "../assets/hoc";

const Skills = () => {
    return (
        <section id='skills' className='sm:flex justify-around skills py-32 items-center pl-16'>
            <motion.div className="text-white sm:w-[30%] skills_1 w-[100%]" variants={fadeIn("left","tween",1,1)}>
                <h1 className='text-lg font-semibold'>Favourite <span className='text-lg font-semibold text-[purple]'>Skills</span></h1>
                <h2 className='text-5xl font-bold'>My Skills</h2>
                <p className='text-2xl mt-8'>See fully what skills I have and perform, to develop the projects for you.</p>
                <div className="text-xl font-bold mt-10">
                    <a href="#projects"><button className="bg-slate-800 text-xl font-bold transition duration-[1s] py-4 px-8 border text-white hover:bg-white hover:text-black">
                        See Projects
                    </button></a>
                </div>
            </motion.div>
            <motion.div className="flex sm:w-[40%] skills_2 w-[100%] sm:mt-0 mt-7" variants={fadeIn("right","tween",1,1)} >
            <div >
                <ul className='text-2xl flex flex-col gap-5'>
                    <li className='text-white'><span className='text-[purple]'>01.</span>HTML & CSS</li>
                    <li className='text-white'><span className='text-[purple]'>02.</span>JavaScript</li>
                    <li className='text-white'><span className='text-[purple]'>03.</span>TailwindCSS</li>
                    <li className='text-white'><span className='text-[purple]'>04.</span>React</li>
                </ul>
            </div>
            <div className="ml-10">
                <ul className='text-2xl flex flex-col gap-5'>
                <li className='text-white'><span className='text-[purple]'>05.</span>Bootstrap</li>
                <li className='text-white'><span className='text-[purple]'>06.</span>Git & GitHub</li>
                </ul>
            </div>
            </motion.div>
        </section>
    )
}

export default SectionWrapper(Skills,"skills")
