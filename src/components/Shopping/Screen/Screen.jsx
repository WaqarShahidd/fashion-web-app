import React from "react";
import Grid from "../Products/Grid";
import { connect } from "react-redux";

export default function Screen({ products }) {
  return (
    <div className="pt-44 ">
      <div className="mx-20 relative z-10 flex items-baseline justify-between pb-6 border-b border-gray-200 ">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          New Arrivals
        </h1>
      </div>
      <div className="flex">
        <Grid />
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.shop.products,
//   };
// };

// export default connect(mapStateToProps) (Screen);
