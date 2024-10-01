import React from "react";

const Category = ({ filterHandler, setFilterCategory }) => {
  const region = [
    "All",
    "Central America",
    "Africa",
    "South America",
    "Asia Pacific",
    "Middle East",
  ];

  const categoryValueHandler = (item) => {
    setFilterCategory(item);
    filterHandler();
  };

  return (
    <>
      <label
        htmlFor="filter_list"
        className="relative top-[-7rem]  text-3xl font-black"
      >
        Filter By:
      </label>
      <div
        id="filter_list"
        className="relative bottom-[9.4rem] mx-0 my-[4rem] flex justify-start items-center gap-16"
      >
        {region.map((item, index) => {
          return (
            <div
              key={index}
              className="min-w-[17.1rem] flex justify-center items-center border-4 border-[#756AB6] p-4 rounded-3xl cursor-pointer hover:bg-[#756ab6] hover:text-white transition-all ease-in duration-[250ms] delay-[20ms] text-3xl font-bold"
              onClick={() => categoryValueHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
