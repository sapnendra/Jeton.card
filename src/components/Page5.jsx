import React from "react";
import { motion } from "motion/react";

const img1 = {
  hidden: {
    transform: "translateX(-50%) translateY(-50%) scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "translateX(-120%) translateY(-100%) scale(1)",
    opacity: 1,
  },
  transition: {
    duration: 1,
    delay: 0.2,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
};

const img2 = {
  hidden: {
    transform: "translateX(-50%) translateY(-50%) scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "translateX(20%) translateY(-90%) scale(1)",
    opacity: 1,
  },
  transition: {
    duration: 1,
    delay: 0.3,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
};

const img3 = {
  hidden: {
    transform: "translateX(-50%) translateY(-50%) scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "translateX(-120%) translateY(-20%) scale(1)",
    opacity: 1,
  },
  transition: {
    duration: 1,
    delay: 0.4,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
};

const img4 = {
  hidden: {
    transform: "translateX(-50%) translateY(-50%) scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "translateX(50%) translateY(-20%) scale(1)",
    opacity: 1,
  },
  transition: {
    duration: 1,
    delay: 0.5  ,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
};

const Page5 = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="h-screen relative bg-white flex items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 flex flex-col items-center mb-10">
        <h2 className="text-[4vw] font-primary text-primary">Uniquely Yours</h2>
        <p className="px-4 py-3 text-2xl cursor-pointer rounded-md font-bold text-white mt-5">
          Get Jeton Card
        </p>
      </div>
      <div className="h-full">
        <ul className="h-full flex flex-col items-center justify-center">
          <img
            className="h-150 w-180 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99"
            src="https://www.jeton.com/_ipx/q_90&w_1360/cms/af29cc24a0de362ecdec62cf83dfa2107e4057d3-2334x1557.png"
            alt=""
          />
          <motion.img
            variants={img1}
            initial="hidden"
            whileInView="visible"
            transition={img1.transition}
            className="h-90 w-130 object-cover absolute top-1/2 left-1/2 z-99"
            src="https://www.jeton.com/_ipx/q_90&w_1360/cms/a64bd1b222372cf59ed31d35e10b001b2d35aa3f-1434x954.png"
            alt=""
          />
          <motion.img
            variants={img2}
            initial="hidden"
            whileInView="visible"
            transition={img2.transition}
            className="h-90 w-140 object-cover absolute top-1/2 left-1/2 z-99"
            src="https://www.jeton.com/_ipx/q_90&w_1360/cms/cc53d6356aa561dc7bca117cb98ae5c633cd7c25-1800x1200.png"
            alt=""
          />
          <motion.img
            variants={img3}
            initial="hidden"
            whileInView="visible"
            transition={img3.transition}
            className="h-120 w-90 object-cover absolute top-1/2 left-1/2 z-99"
            src="https://www.jeton.com/_ipx/q_90&w_1360/cms/fde321f05ff5c6a6eadd0108cf2258c6fdd67a21-1131x1518.png"
            alt=""
          />
          <motion.img
            variants={img4}
            initial="hidden"
            whileInView="visible"
            transition={img4.transition}
            className="h-100 w-80 object-cover absolute top-1/2 left-1/2 z-99"
            src="https://www.jeton.com/_ipx/q_90&w_1360/cms/2930d412096a8c1c9ac3a2cb6351a832e7a2aada-1005x1479.png"
            alt=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Page5;
