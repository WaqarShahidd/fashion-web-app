import React from "react";
import { Slide } from "react-slideshow-image";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import "./style.css";

const slideImages = [
  "https://images-ext-1.discordapp.net/external/I3I3o7LsaEmSLsD44fY_aHMH7ehLnc4kdp5mOGqxT-s/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1469%26q%3D80/https/images.unsplash.com/photo-1524672353063-4f66ee1f385e?width=993&height=663",
  "https://images-ext-1.discordapp.net/external/I3I3o7LsaEmSLsD44fY_aHMH7ehLnc4kdp5mOGqxT-s/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1469%26q%3D80/https/images.unsplash.com/photo-1524672353063-4f66ee1f385e?width=993&height=663",
  "https://images-ext-1.discordapp.net/external/I3I3o7LsaEmSLsD44fY_aHMH7ehLnc4kdp5mOGqxT-s/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1469%26q%3D80/https/images.unsplash.com/photo-1524672353063-4f66ee1f385e?width=993&height=663",
];

const properties = {
  indicators: true,
  indicators: () => <div className="indicator"></div>,
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: (
    <div style={{ width: "25px", marginRight: "-25px" }}>
      <ChevronLeftIcon className="h-16 w-16 text-slate-100 ml-2 text-sm" />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-slate-100 ml-2 text-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg> */}
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-72px" }}>
      <ChevronRightIcon className="h-16 w-16 text-slate-100 mr-20 " />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-slate-100 mr-20 text-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg> */}
    </div>
  ),
};

const Slideshow = () => {
  return (
    <div className="h-screen w-screen bg-slate-700 overflow-x-hidden overflow-y-hidden relative">
      <Slide easing="ease" {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
