import React from "react";

const CounterProduct = ({ counterProduct }) => {
  return (
    <p className="relative top-[-10rem] mx-0 my-[1rem] font-semibold text-3xl underline decoration-[#581c87]">
      Total number of products: {counterProduct}
    </p>
  );
};

export default CounterProduct;
