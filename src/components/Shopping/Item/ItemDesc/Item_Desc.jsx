import React from "react";

function Item_Desc() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden  h-full w-full">
      <div class="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 sm:row-end-auto">
        <div class="flex-1 text-grey-darker bg-slate-50 px-4 py-2 m-2 lg:row-start-1 sm:row-start-2">
          <div className="flex items-stretch mt-6">
            <h3 className="mr-3 text-slate-500 font-bold">Collection </h3>
            <h3 className="mr-3 text-slate-300 font-bold"> / </h3>
            <h3 className="mr-3 text-slate-500 font-bold">Category</h3>
          </div>

          <h1 className="text-6xl font-bold m-5 ml-0">Red Shirt</h1>
          <h2 className="text-3xl m-5 ml-0 mt-0">$ 350</h2>
          <h3 className="text-xl text-slate-400 mr-32 text-justify	">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin
          </h3>
          <div className="mt-14 flex items-stretch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 fill-green-600 mr-4"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h4 className="text-xl">In stock and ready to ship</h4>
          </div>

          <button
            onClick={() => {
              alert("Added to cart");
            }}
            className="block w-full justify-center items-center text-center p-5 mt-20 bg-blue-600 rounded-xl border-2 border-white text-white hover:bg-blue-700 hover:border-blue-600 hover:text-white hover:transition hover:duration-500 hover:ease-in-out"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              alert("Added to cart");
            }}
            className="block w-full justify-center items-center text-center p-5 mt-4 border-2 border-blue-600 bg-white rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white hover:transition hover:duration-500 hover:ease-in-out"
          >
            Continue Shopping
          </button>
          <div className="mt-8 flex items-stretch justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h4 className="text-l">Lifetime Guarantee</h4>
          </div>
        </div>
        <div class="flex-1  bg1/2 lg:row-start-1 sm:row-start-1 "></div>
      </div>
    </div>
  );
}

export default Item_Desc;
