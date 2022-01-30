import React, { useState, Fragment } from "react";
import { MenuIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { Popover, Transition } from "@headlessui/react";
import { data } from "./navbarData";
import "../../index.css";
import { Link } from "react-router-dom";
import CartDialog from "../Shopping/Cart/CartDialog";
import { useSelector } from "react-redux";

const Navbar = ({ disabled }) => {
  const state = useSelector((state) => state.shopReducer);

  const [open, setOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  // h-20 flex items-center justify-center text-white bg-gradient-to-b from-slate-500 hover:bg-black hover:from-black
  return (
    <div
      // style={
      //   disabled
      //     ? { display: "none" }
      //     : { position: "fixed", width: "100%", zIndex: "50" }
      // }
      className="fixed z-50 w-full"
    >
      <header className="h-24 flex w-full absolute inset-x-0 bg-white ">
        <nav className=" items-center justify-center">
          <div className="justify-between flex  mx-20 absolute inset-0 border-b-2 border-slate-400 ">
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
              <div className="ml-28 h-full flex space-x-8">
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
                                            <Link
                                              to={`grid/${catalog.id}/${item.id}`}
                                            >
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
                                      <div className="h-96 aspect-w-1 aspect-h-1 mr-4 rounded-lg  overflow-hidden group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={""}
                                          className="object-cover rounded-md"
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
                <p
                  onClick={() => console.log(disabled)}
                  className="text-sm font-medium text-gray-800 hover:text-gray-500"
                >
                  Sign in
                </p>
                <span className="h-6 w-px bg-gray-800" />
                <Link to="/form">
                  <p className="text-sm font-medium text-gray-800 hover:text-gray-500">
                    Create account
                  </p>
                </Link>
              </div>
              <div className="ml-6 flex lg:flex-0.5 lg:space-x-4 flex-row  lg:ml-6">
                <Drawer
                  anchor="right"
                  open={cartOpen}
                  onClose={() => setCartOpen(false)}
                >
                  <CartDialog />
                </Drawer>
                <IconButton
                  className="h-6 w-6"
                  onClick={() => setCartOpen(true)}
                >
                  <Badge
                    className="p-0 -right-1/3"
                    badgeContent={state.length}
                    color="secondary"
                  >
                    <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-gray-600 group-hover:text-gray-500" />
                  </Badge>
                </IconButton>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
