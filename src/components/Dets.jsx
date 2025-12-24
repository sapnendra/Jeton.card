import React from "react";

const Dets = () => {
  return (
    <div className="h-[50vh mb-90">
      <div
        data-scroll
        className="flex flex-col items-left items-start justify-center w-full px-[4vw]"
      >
        <button className="border bg-transparent text-lg text-secondary border-secondary hover:bg-white/60 px-5 py-1 rounded-full cursor-pointer">
          Wallets
        </button>
        <h2 className="text-[4vw] w-2/5 font-primary text-secondary leading-[4vw] py-5">
          Jeton Card, all your spendings under control.
        </h2>
        <p className="text-secondary/70 w-1/3 text-[1.4rem] font-semibold font-primary tracking-wider">
          Safely shop online, buy in stores, or tap into the power of virtual
          cards with Jeton. Freeze and unfreeze your card anytime within the
          Jeton app, and enjoy better payments today.
        </p>
      </div>
    </div>
  );
};

export default Dets;
