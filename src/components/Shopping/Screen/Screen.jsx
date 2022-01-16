import React from "react";
import Grid from "../Products/Grid";
import Grid_Items from "../Item_List/Grid_Items";
function Screen() {
  return (
    <div className="pt-44 ">
      <div className="mx-20 relative z-10 flex items-baseline justify-between pb-6 border-b border-gray-200 ">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          New Arrivals
        </h1>
      </div>
      <div className="flex ">
        <Grid />
      </div>
    </div>
  );
}

export default Screen;
