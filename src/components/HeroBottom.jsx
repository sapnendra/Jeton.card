import Navbar from "./Navbar";
import { TbWorld } from "react-icons/tb";


const HeroBottom = () => {
  return (
    <div className="h-screen relative overflow-hidden flex items-end justify-between w-full py-10">
      <Navbar />
      <div className="flex items-start justify-between w-full pl-[4vw]">
        <div className="w-1/2 flex flex-col gap-10 items-start">
          <h1 className="text-[6vw] w-4/5 text-white font-primary leading-[7vw]">
            Ready to use right away
          </h1>
          <button className="border bg-white/30 text-xs text-primary border-white/50 hover:bg-white/50 px-4 py-1 rounded-full">
            Scroll
          </button>
        </div>

        <div className="w-1/3 flex flex-col items-start pt-25">
          <h2 className="text-[1.5rem] text-white font-primary">
            No hidden fees, no surprises.
          </h2>
          <button className="px-4 py-3 bg-white rounded-md font-bold text-red-700 mt-5">
            Get Jeton Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
