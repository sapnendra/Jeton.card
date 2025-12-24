import React from "react";

const Page3 = () => {
  return (
    <div className="h-[400vh] relative">
      <div
        className="h-screen sticky top-0 flex flex-col gap-20 items-center justify-evenly"
      >
        <div data-scroll data-scroll-speed="-0.1" className="flex flex-col items-center mb-10">
          <h2 className="text-[4vw] font-primary text-secondary">
            Uniquely Yours
          </h2>
          <button className="px-4 py-3 cursor-pointer bg-secondary rounded-md font-bold text-white mt-5">
            Get Jeton Card
          </button>
        </div>
      </div>
      <div className="min-h-screen absolute top-40 flex flex-col gap-120 items-center px-[4vw]">
        <div className="p-2 w-90 bg-[#fff2f2] translate-x-300 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://www.jeton.com/_ipx/q_90&w_680/cms/490faa6f5a0abeed40a88bc9dc0f684ec6179e3a-1428x1440.jpg"
            alt=""
          />
          <h2 className="text-secondary text-[1.5rem] font-semibold my-2">
            Total control over your card
          </h2>
          <p className="text-secondary/70">
            Freeze, unfreeze both your physical and virtual cards anytime. Your
            transactions are safe and under your control.
          </p>
        </div>
        <div className="p-2 w-90 bg-[#fff2f2] translate-x-0 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://www.jeton.com/_ipx/q_90&w_680/cms/989f6334818695b2577e5b258f3ee03dacac98ff-1428x1440.jpg"
            alt=""
          />
          <h2 className="text-secondary text-[1.5rem] font-semibold my-2">
            Total control over your card
          </h2>
          <p className="text-secondary/70">
            Freeze, unfreeze both your physical and virtual cards anytime. Your
            transactions are safe and under your control.
          </p>
        </div>
        <div className="p-2 w-90 bg-[#fff2f2] translate-x-280 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://www.jeton.com/_ipx/q_90&w_680/cms/94c13d5bfc2dd3c77ed758542e052b1fde0bfc1b-1071x1080.png"
            alt=""
          />
          <h2 className="text-secondary text-[1.5rem] font-semibold my-2">
            Total control over your card
          </h2>
          <p className="text-secondary/70">
            Freeze, unfreeze both your physical and virtual cards anytime. Your
            transactions are safe and under your control.
          </p>
        </div>
        <div className="p-2 w-90 bg-[#fff2f2] translate-x-100 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://www.jeton.com/_ipx/q_90&w_680/cms/1bb5c863a4d3406962d346847a35dc3c97ca6c57-1428x1440.jpg"
            alt=""
          />
          <h2 className="text-secondary text-[1.5rem] font-semibold my-2">
            Total control over your card
          </h2>
          <p className="text-secondary/70">
            Freeze, unfreeze both your physical and virtual cards anytime. Your
            transactions are safe and under your control.
          </p>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Page3;
