import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Page3 from "./Page3";

const Page2 = () => {
  const sectionRef = useRef(null);

  // Track scroll only when THIS section is active
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll-linked animations
  const width = useTransform(scrollYProgress, [0, 1], ["75%", "25%"]);
  const radius = useTransform(scrollYProgress, [0, 1], ["5vw", "2vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0]);

  return (
    <div className="h-[470vh] relative">
      <div className="h-screen sticky top-0 bg-[#F24325]">
        <h1 className="absolute left-1/2 top-40 text-white -translate-x-1/2 text-[4vw] text-center font-primary leading-[4vw] tracking-wide w-1/2">
          Access your money anywhere, hassle-free
        </h1>
      </div>
      <div
        ref={sectionRef}
        className="h-[300vh] w-full relative -top-100 z-12 bg-[#F24325]"
      >
        <motion.div
          style={{ width, borderRadius: radius, opacity }}
          className="bg-white border border-white/50 h-[85vh] sticky top-20 w-9/12 mx-auto p-5 rounded-[5vw] flex items-center justify-center"
        >
          <motion.div data-scroll data-scroll-speed="0" className="absolute z-999 w-100 h-60 bg-secondary rounded-xl flex items-center justify-center">
            <h1 className="text-[2vw] text-white font-primary tracking-wider">
              Jeton Card
            </h1>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-screen w-full flex items-end relative -top-100 z-12 bg-[#F24325]">
        <div className="flex flex-col items-center justify-end gap-70 mx-auto w-full mb-10 text-center">
          <div data-scroll data-scroll-speed="0.2" className="sticky top-70">
            <img className="h-80 w-110" src="/wallet.webp" alt="" />
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
