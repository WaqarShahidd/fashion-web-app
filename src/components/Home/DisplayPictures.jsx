import React from "react";
import "../../index.css";

const data = [
  {
    id: "1",
    title: "Year of Fashion",
    sub: "COLLECTION",
    img: "https://cdn.discordapp.com/attachments/610915006296621086/931274367722225664/lucas-hoang-ojZ4wJNUM5w-unsplash.jpg",
  },
  {
    id: "2",
    title: "BAGS",
    sub: "COLLECTION",
    img: "https://images.unsplash.com/photo-1630750796085-5fa9d4dd2818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const pic = [
  {
    id: "3",
    img: "https://cdn.shopify.com/s/files/1/0671/0621/files/284c60a479a6491bad2516eff3583571-0003_400x.jpg?v=1641041079",
  },
  {
    id: "4",
    img: "https://cdn.shopify.com/s/files/1/0671/0621/files/284c60a479a6491bad2516eff3583571-0002_400x.jpg?v=1641040978",
  },
  {
    id: "5",
    img: "https://cdn.shopify.com/s/files/1/0671/0621/files/284c60a479a6491bad2516eff3583571-0001_400x.jpg?v=1641040951",
  },
];

const DisplayPictures = () => {
  return (
    <div className="h-full w-full ">
      {data.map((item) => (
        <div key={item.id} className="flex relative ">
          <img
            className="flex lg:h-screen md:h-full sm:h-full w-full object-cover"
            src={item.img}
            alt=""
          />
          <div className="flex flex-col items-center justify-center absolute inset-x-0 inset-y-0 m-auto">
            <p className="lg:text-2xl md:text-2xl sm:text-xl text-gray-50 mb-6">
              {item.sub}
            </p>
            <p className="lg:text-7xl md:text-7xl sm:text-7xl text-gray-50 font-m  ">
              {item.title}
            </p>
            <button className="mt-6 lg:h-14 md:h-12 sm:h-12 lg:w-36 md:w-28 sm:w-24 lg:text-xl md:text-base sm:text-sm  text-white border-2 bg-slate-100 bg-opacity-10 hover:bg-[#1b1b1b] hover:border-[#1b1b1b]">
              DISCOVER
            </button>
          </div>
        </div>
      ))}
      <div className="mt-20 ">
        <h1 className="flex font-bold text-2xl justify-center font-link">
          Featured Collections
        </h1>
        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:w-4/5 md:w-screen sm:w-screen mx-auto items-center justify-center py-10  ">
          {pic.map((item) => (
            <div className=" h-80 w-80 overflow-hidden mx-5 md:mb-5 sm:mb-5">
              <img
                src={item.img}
                alt=""
                className="h-80 w-80 object-contain hover:scale-125 ease-in duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPictures;
