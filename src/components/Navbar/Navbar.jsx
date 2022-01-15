import React, { useState, Fragment } from "react";
import {
  MenuIcon,
  ShoppingBagIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import { data } from "./navbarData";
import { XIcon } from "@heroicons/react/outline";
import "../../index.css";
import { Link } from "react-router-dom";
import Grid from "../Shopping/Grid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [x, setX] = useState(true);

  // h-20 flex items-center justify-center text-white bg-gradient-to-b from-slate-500 hover:bg-black hover:from-black
  return (
    <div className="fixed z-50 w-full">
      {x && (
        <div className=" bg-indigo-800 h-10 flex w-full flex-row items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8 z-50">
          <p className="mx-auto">Get free delivery on orders over Rs. 2000</p>
          <XIcon
            className=" h-4 w-4 cursor-pointer"
            onClick={() => setX(false)}
          />
        </div>
      )}
      <header className="h-24 flex w-full absolute inset-x-0 bg-white ">
        <nav className=" items-center justify-center">
          <div className="justify-between flex w-5/6 mx-auto absolute inset-0 border-b-2 border-slate-400 ">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white p-2  rounded-md lg:hidden"
            >
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* LOGO */}
            <div className="ml-4 flex lg:ml-4 float-left items-center">
              <a href="/" className="font-m font-light">
                M Ü N I C H
              </a>
            </div>
            {/* FLYOVER */}
            <div className="cat-display hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="ml-24 h-full flex space-x-8">
                {data.catalog.map((catalog) => (
                  <Popover className="flex" key={catalog.name}>
                    {({ open }) => (
                      <>
                        <div className="relative flex ">
                          <Popover.Button
                            className={`${
                              open
                                ? " text-red-500 border-b-red-500 font-link "
                                : "border-b-transparent text-gray-800 hover:text-gray-500 font-link font-bold text-md"
                            } " relative z-10 flex items-center ease-out duration-200 font-medium border-b-2 " `}
                          >
                            {catalog.name}
                          </Popover.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-600"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                            <div className="relative z-10 w-5/6 mx-auto pl-8 pr-6 shadow rounded bg-white bg-opacity-90">
                              <div className="grid grid-cols-2 py-16 gap-y-10 ">
                                <div className="row-start-1 grid grid-cols-3 ">
                                  {catalog.categories.map((category) => (
                                    <div key={category.name}>
                                      <p
                                        id={`${category.name}`}
                                        className="font-bold text-gray-900 "
                                      >
                                        {category.name}
                                      </p>
                                      <ul className="mt-6 space-y-6 text-gray-700">
                                        {category.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link to="/grid">
                                              <a
                                                href="/"
                                                className="hover:text-gray-600"
                                              >
                                                {item.name}
                                              </a>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                                <div className="col-start-2 grid grid-cols-2 ">
                                  {catalog.featured.map((item) => (
                                    <div key={item.name} className="group">
                                      <div className="aspect-w-1 aspect-h-1 mr-4 rounded-lg bg-black overflow-hidden group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={""}
                                          className="object-cover "
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-6 block font-medium text-gray-900"
                                      >
                                        {item.name}
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
              </div>
            </div>
            {/* CART & Sign In */}
            <div className="lg:mr-4 mr-2 flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="/"
                  className="text-sm font-medium text-gray-800 hover:text-gray-500"
                >
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-800" />
                <a
                  href="/"
                  className="text-sm font-medium text-gray-800 hover:text-gray-500"
                >
                  Create account
                </a>
              </div>
              <div className="ml-4 flex flex-row lg:ml-6">
                <a href="/">
                  <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 mr-4 text-gray-600 group-hover:text-gray-500" />
                </a>
                <a href="/">
                  <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-600 group-hover:text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
