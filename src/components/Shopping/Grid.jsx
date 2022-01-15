import React from "react";

const products = [
  {
    id: 1,
    name: "",
  },
];

export default function Grid() {
  return (
    <div className="bg-white pt-20">
      <div className="mx-auto py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Products</h2>
        <div className="grid grid-cols-1 bg-black"></div>
      </div>
    </div>
  );
}
