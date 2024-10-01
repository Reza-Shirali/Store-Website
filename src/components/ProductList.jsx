import React from "react";

const ProductList = ({ renderedProducts }) => {
  return (
    <>
      {renderedProducts.map((product) => {
        return (
          <li
            key={product.id}
            className="border-[0.2rem] border-[#674188] max-w-[40rem] h-[35rem] list-none p-4 rounded-2xl mb-8 transition-all duration-[250ms] ease-in delay-[20ms] hover:bg-[#674188] group"
          >
            <div className="flex justify-center items-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="max-w-[20rem] my-0 mx-auto"
              />
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-black text-[2rem] transition-all duration-[250ms] ease-in delay-[20ms] text-[#674188] select-text group-hover:text-white">
                {product.name}
              </span>
              <p className="text-[#ac63da] transition-all duration-[250ms] ease-in delay-[20ms] mb-[2rem] font-medium w-[30rem] h-[6rem] overflow-hidden overflow-ellipsis py-[1rem] select-text group-hover:text-white">
                {product.description}
              </p>
            </div>

            <div className="flex justify-between items-center mt-[1rem]">
              <span className="text-[#674188] transition-all duration-[250ms] ease-in delay-[20ms] font-black select-none group-hover:text-white">
                {product.price} $
              </span>
              <div className="border-[.1rem] border-[#ac63da] rounded-2xl font-semibold text-white bg-[#ac63da] py-[.2rem] px-[.8rem] cursor-pointer">
                Add to Cart
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ProductList;
