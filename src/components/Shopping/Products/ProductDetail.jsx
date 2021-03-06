import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Shopping/shoppingActions";

const sizes = [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "2XL", inStock: true },
  { name: "3XL", inStock: true },
];

const colors = [
  {
    id: "1",
    color: "bg-red-500",
    hover: "hover:ring-red-500",
  },
  {
    id: "2",
    color: "bg-black",
    hover: "hover:ring-black",
  },
  {
    id: "3",
    color: "bg-blue-500",
    hover: "hover:ring-blue-500",
  },
  {
    id: "4",
    color: "bg-green-500",
    hover: "hover:ring-green-500",
  },

  //   orange: "#F2711C",

  //   olive: "#B5CC18",
  //   green: "#21BA45",
  //   teal: "#00B5AD",
  //   blue: "#2185D0",
  //   violet:" #6435C9",
  //   purple: "#A333C8",
  //   pink: "#E03997"
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetail({ currentItem }) {
  const { id } = useParams();
  const [product, setProduct] = React.useState(true);
  const [activeKey, setActiveKey] = useState(null);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const url = `https://fashionstore.technologiasolutions.com/api/items/${id}`;

  React.useEffect(() => {
    axios.get(url).then((json) => setProduct(json.data));
  }, [url]);

  const SizeDetail = ({ id, name, isActive }) => {
    return (
      <div
        onClick={() => setActiveKey(id)}
        key={id}
        className={`${
          isActive
            ? "ring-2 ring-indigo-500 relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
            : ""
        }"relative cursor-pointer border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"  `}
      >
        {name}
      </div>
    );
  };

  return (
    <div className="bg-white pt-44 pl-20 pr-20">
      <div className="lg:flex lg:flex-row grid grid-cols-1  pb-20">
        <div className="h-screen w-full flex-1 ">
          <img
            src={product.image}
            alt=""
            className="h-5/6 w-full object-contain"
          />
        </div>
        <div className="flex-1 lg:pl-14 py-0 ">
          <h1 className="font-bold text-2xl pb-2">{product.name}</h1>
          <p className="font-normal text-xl">${product.price}</p>
          <div className="flex flex-col pt-5">
            <span
              onClick={() => console.log(product.title)}
              className="text-lg pb-2 pl-1"
            >
              Color
            </span>

            <div className="flex flex-row ">
              {colors.map((item) => (
                <a href="" key={item.id}>
                  <div
                    className={classNames(
                      item.color,
                      item.hover,
                      "mr-3 w-10 h-10 relative rounded-full cursor-pointer focus:outline-none ring ring-white hover:ring-offset-2 "
                    )}
                  />
                </a>
              ))}
            </div>
            <span className="text-lg pb-2 pt-5 pl-1">Size</span>

            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              {sizes.map((item, index) => (
                <SizeDetail
                  isActive={activeKey === index}
                  id={index}
                  name={item.name}
                />
              ))}
            </div>
          </div>
          <div className="pt-8">
            <p className="font-normal w-full text-lg ">
              A black and neon green tie-dye hoodie with a graffiti 'not coming
              slow' print on the front.
              <br /> -280GSM 100% cotton fleece
              <br /> -Double lined hood
              <br /> -Relaxed fit
              <br /> -Soft and fine fabric finish
              <br /> -Unisex
            </p>
          </div>
          <div className="mt-10 flex flex-row gap-4 ">
            <button
              onClick={() => addProduct(product)}
              type="submit"
              className=" w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>
            <Link className="w-full" to={`/checkout/${product.id}`}>
              <button
                onClick={() => addProduct(product)}
                type="submit"
                className=" w-full bg-white border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-600 hover:bg-slate-300 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
