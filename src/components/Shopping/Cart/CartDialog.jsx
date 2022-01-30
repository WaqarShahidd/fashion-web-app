import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  adjustQty,
} from "../../../Redux/Shopping/shoppingActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

function CartDialog() {
  const state = useSelector((state) => state.shopReducer);

  let [ctotal, setCtotal] = useState(0);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecrement = (item) => {
    dispatch(adjustQty(item));
  };

  return (
    <div className="w-screen max-w-md">
      <div className="h-screen flex flex-col bg-white shadow-xl overflow-y-scroll">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 ">
          <div className="flex items-start justify-between">
            <h1 className="text-xl font-bold text-gray-900">Shopping cart</h1>
          </div>

          <div className="mt-8">
            <div className="flow-root ">
              <ul className="-my-6  divide-y divide-gray-200 ">
                {state.map((cartItems) => (
                  <li key={cartItems.id} className="py-6 flex">
                    <div className="flex w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={cartItems.image}
                        alt={cartItems.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={cartItems.href}>{cartItems.name}</a>
                          </h3>
                          <p className="ml-4">
                            ${cartItems.price * cartItems.qty}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {cartItems.color}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className=" flex-row flex">
                          <button
                            onClick={() => handleDecrement(cartItems)}
                            className="h-6 w-6 mr-8 bg-gray-200"
                          >
                            -
                          </button>
                          <p className="text-gray-500 mr-8">{cartItems.qty}</p>
                          <button
                            onClick={() => handleIncrement(cartItems)}
                            className="h-6 w-6  bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => handleRemove(cartItems)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t  border-gray-200 py-6 px-4 sm:px-6 w-full">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${ctotal} </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div
            className="mt-6"
            onClick={() => {
              setCtotal((ctotal = 0));
              state.forEach((element) => {
                setCtotal((ctotal += element.price * element.qty));
                element.total = ctotal;
              });
            }}
          >
            <p className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
              Calculate Total
            </p>
          </div>
          <div className="mt-2">
            <Link to={`/checkout/${state.id}`}>
              <p className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white border-indigo-600 hover:bg-slate-100">
                Checkout
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDialog;
