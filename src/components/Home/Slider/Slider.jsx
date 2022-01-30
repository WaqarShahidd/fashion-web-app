import React from "react";
import { Slide } from "react-slideshow-image";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import "./style.css";

const slideImages = [
  "https://futuredeluxe.com/wp-content/uploads/2020/01/converse_twist_01.jpg?x53177",
  "https://i.pinimg.com/originals/23/dd/7e/23dd7e13590119d7e975a7662ebb6676.png",
  "https://cdn.shopify.com/s/files/1/1491/3294/files/PCC0002_Website_Banners_Final_2000x10003_6fa281ba-ccf8-45f5-9d3e-0df3de5aac6c_1600x.jpg?v=1609804157",
  "https://i.pinimg.com/originals/3d/1e/03/3d1e03e6d57b72dd063429c676dac234.png",
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
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-72px" }}>
      <ChevronRightIcon className="h-16 w-16 text-slate-100 mr-20 " />
    </div>
  ),
};

const Slideshow = () => {
  return (
    <div className="pt-2 h-screen w-full bg-slate-700 overflow-x-hidden overflow-y-hidden relative">
      <Slide easing="ease" {...properties}>
        <div className="each-slide">
          <div
            className="h-full w-full bg-center"
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          />
        </div>
        <div className="each-slide">
          <div
            className="h-full w-full bg-center"
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          />
        </div>
        <div className="each-slide">
          <div
            className="bg-center h-full w-full"
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          />
        </div>
        <div className="each-slide">
          <div
            className="bg-center h-full w-full"
            style={{ backgroundImage: `url(${slideImages[3]})` }}
          />
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
