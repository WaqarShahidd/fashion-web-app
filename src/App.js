import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Home/Slider/Slider";
import DisplayPictures from "./components/Home/DisplayPictures";
import Grid from "./components/Shopping/Products/Grid";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Screen from "./components/Shopping/Screen/Screen";

import ProductDetail from "./components/Shopping/Products/ProductDetail";
import MyCart from "./components/Shopping/ShoppingCart/MyCart";

function App() {
  return (
    <Router>
      <div>
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
          <Route path="/grid" element={<Screen />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<MyCart />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
