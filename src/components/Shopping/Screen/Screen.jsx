import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "../Products/Grid";

export default function Screen() {
  const { id, id1 } = useParams();

  return (
    <div className="pt-36 ">
      <div className="mx-20 relative z-10 flex items-baseline justify-between pb-6 border-b border-gray-200 ">
        {id === "1" ? (
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            SHOP MEN
          </h1>
        ) : (
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            SHOP WOMEN
          </h1>
        )}
      </div>
      <div className="flex ">
        <Grid catalogId={id} categoryId={id1} />
      </div>
    </div>
  );
}
