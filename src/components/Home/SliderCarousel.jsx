import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

const SliderCarousel = () => {
  return (
    <div className="absolute h-full w-full mt-2 bg-slate-800">
      <Carousel className="h-full">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: item.color,
              }}
              className="flex items-center justify-center text-center"
            >
              <h2 className="absolute inset-x-0">{item.name}</h2>
              <img src={item.imageSrc} alt={""} className=" object-center " />
              <h2 className="absolute inset-x-0"> {item.description}</h2>
              <button className="">Check it out!</button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

const items = [
  {
    name: "Lear Music Reader",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    href: "https://github.com/Learus/Lear-Music-Reader",
    imageSrc: "https://wallpaperaccess.com/full/427852.jpg",
  },
  {
    name: "Hash Code 2019",
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    href: "https://github.com/Learus/HashCode2019",
    imageSrc: "https://wallpaperaccess.com/full/427852.jpg",
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    href: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
    imageSrc: "https://wallpaperaccess.com/full/427852.jpg",
  },
  {
    name: "React Carousel",
    description: "A Generic carousel UI component for React using material ui.",
    color: "#C9A27E",
    href: "https://github.com/Learus/react-material-ui-carousel",
    imageSrc: "https://wallpaperaccess.com/full/427852.jpg",
  },
];

export default SliderCarousel;
