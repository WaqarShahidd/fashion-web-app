import React from "react";
import Grid_Items from "../Item_List/Grid_Items";
function Screen() {
  return (
    <div>
      <div className="ml-40 mt-10">
        <h1 className="text-xl">Shirts</h1>
      </div>
      <div className=" min-h-screen flex items-center justify-center bg-white">
        <Grid_Items />
      </div>
    </div>
  );
}

export default Screen;
