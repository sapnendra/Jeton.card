import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const Page8 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const letters = ["J", "e", "t", "o", "n"];

  const transforms = [];
  for (let i = 0; i < letters.length; i++) {
    const start = i * 0.04;
    const end = Math.min(1, start + 0.45);
    const y = useTransform(scrollYProgress, [start, end], [50, 0]);
    const opacity = useTransform(scrollYProgress, [start, end], [0.8, 1]);
    transforms.push({ y, opacity });
  }

  return (
    <motion.div ref={containerRef} className="h-[70vh] flex items-center justify-center">
      <div className="flex gap-5 text-[35vw] font-primary text-secondary">
        {letters.map((ltr, i) => (
          <motion.span key={i} style={transforms[i]} className="inline-block">
            {ltr}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Page8;
