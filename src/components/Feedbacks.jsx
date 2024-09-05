import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(145, 94, 255, 0.8)",
      }}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-transparent transition-all duration-300 hover:border-[#915eff]"
    >
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
      <span className="mt-4 inline-block text-primary hover:underline">
        Read More
      </span>
    </motion.div>
  </a>
);

const BlogSection = () => {
  const blogs = [
    {
      title: "Docker-In-Docker: The Good And the Bad",
      description:
        "Docker-in-Docker (DinD) is simply the practice of running Docker itself inside a Docker container...",
      link: "https://medium.com/@parameshwarbhat411/docker-in-docker-the-good-and-the-bad-48cfe4e0da6e",
    },
    {
      title: "Introduction to ACID Transactions in Databases — 1",
      description:
        "A fundamental guide to understanding ACID properties in databases, crucial for ensuring data integrity and reliability.",
      link: "https://medium.com/@parameshwarbhat411/introduction-to-acid-transactions-in-databases-1-57a9a056c726",
    },
    {
      title: "Understanding Atomicity in Database Systems",
      description:
        "Deep dive into atomicity, one of the key ACID properties that ensure database transactions are treated as indivisible units.",
      link: "https://medium.com/@parameshwarbhat411/understanding-atomicity-in-database-systems-21fd8c34da4e",
    },
  ];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Read my latest</p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {blogs.map((blog, index) => (
          <BlogCard key={blog.title} index={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(BlogSection, "blogs");
