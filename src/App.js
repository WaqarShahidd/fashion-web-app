import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SliderCarousel from "./components/Home/SliderCarousel";
import DisplayPictures from "./components/Home/DisplayPictures";
import Grid from "./components/Shopping/Grid";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact element={<DisplayPictures />} />
          <Route path="/grid" element={<Grid />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
