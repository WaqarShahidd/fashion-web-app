import React from "react";
import { Slide } from "react-slideshow-image";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import "./style.css";

const slideImages = [
  "https://images-ext-2.discordapp.net/external/XWt5pglGElHd6KAv8BaeOv3128OuYu1vwwdZfvSgRUs/https/i.pinimg.com/564x/72/1b/ee/721beed767a8ffc4bf32da39744a3578.jpg",
  "https://media.discordapp.net/attachments/719225618503565325/932351398467760148/21de76124db5aece19ad7c92d2b24e31.jpg",
  "https://qa.khaadi.com/media/wysiwyg/khaadiqadesktopbanner16112020.jpg",
  "https://roycollections.com/wp-content/uploads/2021/10/Wear-yourself-in-every-shades-of-winter-collection.jpg",
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
