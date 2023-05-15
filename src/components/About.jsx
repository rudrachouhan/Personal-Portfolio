import React from 'react'
import '../index.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/utils/motion'
import { SectionWrapper } from '../assets/hoc'

const About = () => {
  return (
    <section id='about' className='about sm:flex w-full justify-around py-10 sm:px-0 px-7'>
    <motion.div className='about__me my-12' variants={fadeIn("right","spring",1,1)}>
      <div className="about__img">
       <img src="src/assets/Rudra.jpg" alt="myself" className='sm:h-96 sm:w-96 h-[100%] w-[100%]' /> 
       </div>
    </motion.div>
    <motion.div className='py-24 sm:w-[40%] flex flex-col w-[100%]' variants={fadeIn("left","spring",1,1)}>
    <h1 className='text-white text-2xl'>My <span className='text-[purple]'>Intro</span> </h1>
    <h1 className='text-white text-4xl font-bold mt-1'>About Me</h1>
    <p className='text-gray-400 mt-5 text-xl'>Frontend Developer, I am a fresher who is eager to learn and possesses what it takes. I have made some awesome projects that will hopefully impress you and you can contact me down here.</p>
    <div className="text-xl font-bold mt-6">
          <a href="#contact"><button className="bg-slate-800 text-xl font-bold transition duration-[1s] py-4 px-8 border text-white hover:bg-white hover:text-black">
            Contact me
          </button></a>
        </div>
    </motion.div>
    </section>
  )
}

export default SectionWrapper(About,"about")