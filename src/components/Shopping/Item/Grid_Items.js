import React from "react";
import { Link } from "react-router-dom";
import product_card from "./product_data";

const Grid_Items = () => {
  const listItems = product_card.map((item) => (
    <div
      className="bg-[#e0ddd7] justify-center items-center m-3 mb-8 transition ease-in-out duration-500 "
      key={item.id}
    >
      <div className="float-right mr-4 mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <Link to="/product">
        <div className=" justify-center items-center p-20 hover:border-2 border-2 border-[#f6f5f3] hover:border-[#E5E2DC]">
          <img
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={item.thumb}
            alt={""}
          />
        </div>
      </Link>
      <div className="bg-white w-full flex-row flex items-center justify-between pt-4 ">
        <div className=" text-center text-[#443f4c] text-sm ">
          {item.product_name}
        </div>
        <div className=" text-center text-[#443f4c] text-sm font-medium ">
          {item.price}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 ">
      {listItems}
    </div>
  );
};
export default Grid_Items;
