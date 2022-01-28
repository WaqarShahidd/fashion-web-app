import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

export default function MyCart() {
  return (
    <div className="bg-white pt-36 pl-20 pr-20 ">
      <div className="mx-20 relative z-10 items-center ">
        <h1 className="text-4xl font-semibold text-center text-gray-900 pb-14">
          SHOPPING CART
        </h1>
      </div>
      <div className="flex relative flex-col justify-center items-center ">
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col sm:cols-start-1  lg:w-4/5 lg:h-48 sm:h-full sm:w-4/5 items-center justify-between py-20 pb-20 px-8 border-y border-gray-300 ">
          <div className="flex h-48 lg:w-72 sm:w-full ">
            <img
              src="https://hottopic.scene7.com/is/image/HotTopic/13509737_hi?$productMainDesktop$"
              alt=""
              className="h-40 w-32 pt-7"
            />
            <div className=" flex-col w-72  py-10 pl-8">
              <p className="h-20 lg:w-64 pb-8 md:w-48 break-words">
                'not coming slow' Neon Green Tie-Dye Hoodie
              </p>
              <p className="h-full ">SIZE: XS</p>
            </div>
          </div>
          <div className="flex flex-row justify-between pl-44 sm:flex sm:flex-row sm:justify-between sm:pl-44 md:pl-16 md:w-4/6 lg:pl-10 lg:w-3/5 lg:py-10 items-center ">
            <div className="flex flex-col sm:pr-10">
              <h3 className="font-semibold  pb-8">Price</h3>
              <p>350$</p>
            </div>
            <div className="flex flex-col sm:pr-10">
              <h3 className="font-semibold  pb-8">Quantity</h3>
              <p>2</p>
            </div>
            <div className="flex flex-col sm:pr-10">
              <h3 className="font-semibold  pb-8">Total</h3>
              <p>700$</p>
            </div>
            <div className="flex">
              <a href="">
                <TrashIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
