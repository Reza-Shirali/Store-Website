import React from "react";
import CategoryItems from "./CategoryItems";

import region from "../utils/reginData";

const Category = ({ filterHandler, setFilterCategory }) => {
  const categoryValueHandler = (item) => {
    setFilterCategory(item);
    filterHandler();
  };

  return (
    <>
      <div
        id="filter_list"
        className="relative md:flex-wrap flex-wrap bottom-[9.4rem] top-[-7rem] xl:top-[-7rem] 2xl:top-[-7rem] mx-0 my-[4rem] flex justify-center md:justify-start items-center gap-16 pt-40 md:pt-12"
      >
        <CategoryItems
          region={region}
          categoryValueHandler={categoryValueHandler}
        />
      </div>
    </>
  );
};

export default Category;
