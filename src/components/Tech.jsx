import React from "react";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";
import { Badge } from "./ui/badge";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const BLUR_FADE_DELAY = 0.2; // Adjust this value as needed

const Tech = () => {
  return (
    <section id="skills" className="py-10">
      {/* Motion div for heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My skills so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      {/* Skills section with BlurFade and Badge */}
      <div className="flex min-h-0 flex-col gap-y-3">
        <div className="flex flex-wrap gap-1 justify-center">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DATA = {
  skills: [
    "Python",
    "Java",
    "R",
    "Matplotlib",
    "Apache Kafka",
    "Apache Spark",
    "Apache Hadoop",
    "Snowflake",
    "Airflow",
    "DBT",
    "MySQL",
    "PostgreSQL",
    "Hive SQL",
    "MongoDB",
    "Neo4J",
    "Google Cloud Platform",
    "AWS",
    "GitHub",
    "Atlassian Suite (JIRA, Bitbucket)",
    "Docker",
    "Power BI",
    "Kubernetes",
    "Jenkins",
    "Django",
  ],
};

export default SectionWrapper(Tech, "tech");
