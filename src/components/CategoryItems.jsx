import React from "react";

const CategoryItems = ({ region, categoryValueHandler }) => {
  {
    return region.map((item, index) => {
      return (
        <div
          key={index}
          className="min-w-[17.1rem] flex justify-center items-center border-4 border-[#756AB6] p-4 rounded-3xl cursor-pointer hover:bg-[#756ab6] hover:text-white transition-all ease-in duration-[250ms] delay-[20ms] text-3xl font-bold"
          onClick={() => categoryValueHandler(item)}
        >
          {item}
        </div>
      );
    });
  }
};

export default CategoryItems;
