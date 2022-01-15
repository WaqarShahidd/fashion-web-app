import React from "react";
import product_card from "../../data/product_data";

const Grid_Items = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div
      className="bg-[#f6f5f3] justify-center items-center m-3 mb-8 transition ease-in-out duration-500 "
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
      <div className="  justify-center items-center p-20 hover:border-2 border-2 border-[#f6f5f3] hover:border-[#E5E2DC]">
        <img className="h-52 w-52" src={item.thumb} />
      </div>
      <div className="bg-white flex-row flex items-center justify-between pt-4 ">
        <div className=" text-center text-[#443f4c] text-xs font-medium">
          {item.product_name}
        </div>
        <div className=" text-center text-[#443f4c] text-xs font-medium">
          {item.price}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 ">
      {listItems}
    </div>
  );
};
export default Grid_Items;
