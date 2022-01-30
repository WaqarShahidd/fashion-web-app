import React, { useState } from "react";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { TrashIcon } from "@heroicons/react/outline";
import { removeFromCart } from ".././././../Redux/Shopping/shoppingActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fname: yup.string().required(),
  lname: yup.string().required(),
  email: yup.string().email().required(),
  pass: yup.string().min(8).max(15).required(),
  addr: yup.string().required(),
  zip: yup.number().max(6).required(),
});

export default function CheckoutForm() {
  //Redux state
  const state = useSelector((state) => state.shopReducer);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  let [ctotal, setCtotal] = useState(0);

  //API for Countries
  const [country, setcountry] = React.useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const url = `https://fashionstore.technologiasolutions.com/api/Countries`;

  React.useEffect(() => {
    axios.get(url).then((json) => setcountry(json.data));
  }, [url]);

  const handleSelect = (event) => {
    setSelectedItem(event.target.value);
  };

  //API for States
  const [states, setstates] = React.useState([]);

  const url1 = `https://fashionstore.technologiasolutions.com/api/States/${selectedItem}`;

  React.useEffect(() => {
    axios.get(url1).then((json) => setstates(json.data));
  }, [url1]);

  //Method to post form data
  const url3 = "https://fashionstore.technologiasolutions.com/api/Users/signup";

  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    addr: "",
    zip: "",
  });
  //validation
  const [efname, setefname] = useState("");
  const [elname, setelname] = useState("");
  const [eemail, seteemail] = useState("");
  const [epass, setepass] = useState("");
  const [eaddr, seteaddr] = useState("");
  const [ezip, setezip] = useState("");

  function submit(e) {
    e.preventDefault();
    Axios.post(url3, {
      firstName: data.fname,
      lastName: data.lname,
      email: data.email,
      password: data.pass,
      address: data.addr,
      postCode: data.zip,
      countryId: selectedItem,
      stateId: 1,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setdata(newData);
    console.log(newData);
  }

  //Validations
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="pt-36 ">
      <div className="mx-20 relative z-10 flex items-baseline justify-between pb-6 border-b border-gray-200 ">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          CHECKOUT
        </h1>
      </div>
      <div className="flex pt-5 pb-6 mx-20 border-b border-gray-200 h-full ">
        <div className="flex pr-10">
          <div className="hidden sm:block">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form
                  onSubmit={(e) => {
                    submit(e);
                  }}
                  action="#"
                  method="POST"
                >
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            placeholder="First name"
                            type="text"
                            name="fname"
                            id="fname"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-b-2 sm:text-sm border-gray-300 rounded-md h-10"
                            value={data.fname}
                            onBlur={() => {
                              if (!data.fname.match(/^[A-Za-z]+$/)) {
                                setefname(
                                  "First Name must have alphabets only"
                                );
                              } else {
                                setefname("");
                              }
                            }}
                          />
                          <p className="text-red-500 text-xs">{efname}</p>
                          {errors.fname && <p>Last name is required.</p>}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            value={data.lname}
                            placeholder="Last name"
                            type="text"
                            name="lname"
                            id="lname"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-b-2 sm:text-sm border-gray-300 rounded-md h-10"
                            onBlur={() => {
                              if (!data.fname.match(/^[A-Za-z]+$/)) {
                                setelname("Last Name must have alphabets only");
                              } else {
                                setelname("");
                              }
                            }}
                          />
                          <p className="text-red-500 text-xs">{elname}</p>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            value={data.email}
                            placeholder="Email address"
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-b-2 sm:text-sm border-gray-300 rounded-md h-10"
                            onBlur={() => {
                              if (
                                !data.email.match(
                                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                                )
                              ) {
                                seteemail("please enter a Valid email");
                              } else {
                                seteemail("");
                              }
                            }}
                          />
                          <p className="text-red-500 text-xs">{eemail}</p>
                        </div>

                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            value={data.pass}
                            placeholder="Password"
                            type="password"
                            name="pass"
                            id="pass"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-b-2 sm:text-sm border-gray-300 rounded-md h-10"
                            onBlur={() => {
                              if (
                                data.pass.length === 0 ||
                                data.pass.length < 7 ||
                                data.pass.length > 20
                              ) {
                                setepass("please enter 8-20 words");
                              } else {
                                setepass("");
                              }
                            }}
                          />
                          <p className="text-red-500 text-xs">{epass}</p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>

                          <select
                            onChange={handleSelect}
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
                          >
                            <option value="1">Select your option</option>
                            {country.map((c) => (
                              <option
                                placeholder="YERS"
                                value={c.countryId}
                                key={c.countryId}
                              >
                                {c.countryName}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            value={data.addr}
                            placeholder="Street address"
                            type="text"
                            name="addr"
                            id="addr"
                            autoComplete="street-address"
                            className="h-10 mt-1 focus:ring-indigo-500 border-b-2 focus:border-indigo-500 block w-full border-b-2 sm:text-sm border-gray-300 rounded-md"
                            onBlur={() => {
                              if (data.addr === "") {
                                seteaddr("please enter a address ");
                              } else {
                                seteaddr("");
                              }
                            }}
                          />
                          <p className="text-red-500 text-xs">{eaddr}</p>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                            onClick={() => console.log(states)}
                          >
                            States
                          </label>
                          <select
                            id="States"
                            name="States"
                            autoComplete="States-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10"
                          >
                            {states.map((s) => (
                              <option key={s.stateId}>{s.stateName}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            onChange={(e) => handle(e)}
                            value={data.zip}
                            placeholder="ZIP / Postal code"
                            type="text"
                            name="zip"
                            id="zip"
                            autoComplete="postal-code"
                            className=" h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-b-2 sm:text-sm border-gray-300 rounded-md"
                            onBlur={() => {
                              if (!data.zip.match(/^[0-9]+$/)) {
                                setezip("numbers only");
                              } else {
                                setezip("");
                              }
                            }}
                          />
                          <p className="text-red-500 text-xs">{ezip}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        onSubmit={handleSubmit(onSubmit)}
                        type="submit"
                        className="mr-4 inline-flex justify-center py-2 px-4 border border-transparent border-b-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                      <Link to="/print">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent border-b-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Confirm Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="h-4/5 flex flex-col bg-white shadow-xl overflow-y-scroll ">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 ">
              <div className="flex items-start justify-between ">
                <h1 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h1>
              </div>

              <div className="mt-8 ">
                <div className=" ">
                  <ul className="-my-6  divide-y divide-gray-200 ">
                    {state.map((cartItems) => (
                      <li key={cartItems.id} className="py-6 flex">
                        <Badge
                          className="  "
                          badgeContent={cartItems.qty}
                          color="primary"
                        >
                          {" "}
                        </Badge>
                        <div className="flex relative w-24 h-24 border border-gray-200 rounded-md overflow-hidden bg-blue-300">
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
                            <div className=" flex-row flex"></div>
                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                <TrashIcon
                                  onClick={() => handleRemove(cartItems)}
                                  className="h-6 w-6 cursor-pointer"
                                />
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
                <p className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md border-b-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                  Calculate Total
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
