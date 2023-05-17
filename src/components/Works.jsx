import React from "react";
import { motion } from "framer-motion";
import { styles } from "../assets/styles";
import gitimg from "/github.png";
import { SectionWrapper } from "../assets/hoc";
import { projects } from "../assets/constants/projects";
import { fadeIn, textVariant } from "../assets/utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 2)}
      className="cursor-pointer"
    >
      {/* <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      
    > */}
      <div className="bg-[#151030] p-5 rounded-2xl max-w-[360px] w-full">
        <div
          className="relative w-full h-[230px]"
          onClick={() => window.open(link, "_blank")}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={gitimg}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {/* </Tilt> */}
      </div>

    </motion.div>
  );
};



const Works = () => {
  return (
    <section className="projects sm:pl-16 pt-12 pb-16 pl-8 sm:pr-0 pr-8" id="projects">
      <motion.div variants={textVariant()}>
        <p className={`text-white text-2xl`}>
          My <span className="text-[purple]">work</span>{" "}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap sm:flex-row flex-col gap-7 items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
