import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import '../index.css'
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../assets/hoc";
import { education } from "../assets/constants/education";
import { textVariant } from "../assets/utils/motion";
import {styles} from "../assets/styles"

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      iconStyle={{ background: education.iconBg }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      icon={
        <div className="flex justify-center items-center w-full h-full text-white">
          {education.icon}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.board}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const Education = () => {
  return (
    <section className="education pb-20">
      <motion.div variants={textVariant()} className="py-10 pl-16">
        <p className={`${styles.sectionSubText} `}>
          My <span className="text-[purple]">Qualifications</span>{" "}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
      </section>
  );
};

export default SectionWrapper(Education,"")
