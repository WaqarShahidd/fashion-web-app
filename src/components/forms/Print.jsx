import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Print() {
  return (
    <div className="justify-center items-center w-full h-full ">
      <div className=" ">
        <div className="bg-green-400 w-96 h-96 justify-center items-center text-center border-2 border-slate-900">
          <h1>MY SHOPPING BAG</h1>
        </div>
        <div className="bg-red-500 w-96 h-96 flex flex-row">
          <div>
            <img src="" className="bg-red-100 w-10 h-10" />
          </div>
          <div>
            <h1>ITEM NAME</h1>
          </div>
          <div>
            <h1>$ 4000</h1>
            <h1> quantity</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
