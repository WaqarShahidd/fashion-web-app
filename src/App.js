import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Print from "./components/forms/Print";
import Root from "./Root";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/*" element={<Root />} />
          <Route path="/print" exact element={<Print />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
