import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: [0, 1] }, // Use an array to define keyframes for animation
      { duration: 0.5, delay: stagger(0.2) } // Adjust duration and delay for desired effect
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-regular", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-[16px] leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
