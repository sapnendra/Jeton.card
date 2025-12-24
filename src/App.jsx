import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroBottom from "./components/HeroBottom";
import Page2 from "./components/Page2";
import { MdOutlineMessage } from "react-icons/md";
import BottomSticky from "./components/BottomSticky";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import LocomotiveScroll from "locomotive-scroll";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Dets from "./components/Dets";
import Page9 from "./components/Page9";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <div className="relative">
      <BottomSticky />
      <div
        data-scroll
        data-scroll-speed="-0.2"
        className="h-screen absolute top-0 left-0 inset-0"
      >
        <video
          className="h-full w-full object-cover"
          src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-12T14-00-46.569Z-jeton-jetoncard-hd.mp4#t=0.01"
          type="video/mp4"
          loop
          autoPlay
          muted
        ></video>
      </div>
      <div className="w-full absolute z-10">
        <HeroBottom />
        <Page2 />
        <Page3 />
        <Dets />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
      </div>
    </div>
  );
};

export default App;
