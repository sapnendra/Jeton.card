import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Page3 from "./Page3";

const Page2 = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll-linked animations
  const width = useTransform(scrollYProgress, [0, 1], ["75%", "25%"]);
  const radius = useTransform(scrollYProgress, [0, 1], ["5vw", "2vw"]);
  // Container fade transforms
  const containerBg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#ffffff", "#ffffff", "#ffffff", "#F2432500", "#F2432500", "#F2432500"]
  );

  const cardY = useTransform(scrollYProgress, [0.4, 1], ["0%", "238%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <div className="h-[470vh] relative">
      <div className="h-screen sticky top-0 bg-[#F24325]">
        <motion.h1
          style={{ opacity: textOpacity }}
          className="absolute left-1/2 top-40 text-white -translate-x-1/2 text-[4vw] text-center font-primary leading-[4vw] tracking-wide w-1/2"
        >
          Access your money anywhere, hassle-free
        </motion.h1>
      </div>
      <div ref={sectionRef} className="h-[300vh] w-full relative -top-100 z-30">
        <motion.div
          style={{
            width,
            borderRadius: radius,
            backgroundColor: containerBg,
          }}
          className="h-[80vh] sticky top-30 mx-auto p-5 rounded-[5vw] flex items-center justify-center"
        >
          <motion.div
            style={{ y: cardY }}
            className="absolute z-1000 w-102 h-60 bg-[#F16D5E] border border-white/10 rounded-3xl"
          >
            <h1 className="text-[2vw] text-center text-white font-primary tracking-wider">
              Jeton Card
            </h1>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-[70vh] w-full flex items-center relative -top-100">
        <div className="flex flex-col items-center justify-center gap-70 mx-auto w-full text-center">
          <div className="relative">
            <img className="h-80 w-110" src="/wallet.webp" alt="" />
            <img
              className="w-80 w-110 object-contain absolute top-40 z-1001"
              src="/download.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-[4vw] leading-[4vw] font-primary w-4/6 mx-auto">
              Pay on-the-go
            </h2>
            <p className="text-white text-[1.5rem] font-primary w-5/8 mx-auto">
              Simply add Jeton Card to Apple or Google Wallet for quick and
              convenient access whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
