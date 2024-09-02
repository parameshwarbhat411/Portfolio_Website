"use client";

import React from "react";

import { education } from "../constants";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Qualification = () => {
  return (
    <section id="education" className="py-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={education}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Qualification, "Qualification");
