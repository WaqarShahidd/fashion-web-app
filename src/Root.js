import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Home/Slider/Slider";
import DisplayPictures from "./components/Home/DisplayPictures";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Screen from "./components/Shopping/Screen/Screen";
import ProductDetail from "./components/Shopping/Products/ProductDetail";
import MyCart from "./components/Shopping/ShoppingCart/MyCart";
import { XIcon } from "@heroicons/react/outline";
import CheckoutForm from "./components/forms/CheckoutForm";
import Print from "./components/forms/Print";
import Useform from "./components/forms/Validation/useForm";
import Form from "./components/forms/Form";

export default function Root() {
  const [x, setX] = useState(true);

  return (
    <div>
      <div>
        {x && (
          <div className=" bg-indigo-800 h-10 flex w-full flex-row items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8 z-50">
            <p className="mx-auto">Get free delivery on orders over Rs. 2000</p>
            <XIcon
              className=" h-4 w-4 cursor-pointer"
              onClick={() => setX(false)}
            />
          </div>
        )}

        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            element={
              <>
                <Slider />
                <DisplayPictures />
              </>
            }
          />
          <Route path="/grid/:id/:id1" element={<Screen />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart/:id" element={<MyCart />} />
          <Route path="/checkout/:id" element={<CheckoutForm />} />
          <Route path="/form" element={<Form />} />
        </Switch>
      </div>
    </div>
  );
}
