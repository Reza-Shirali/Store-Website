import React from "react";
import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider";
import Category from "../components/Category";
import Footer from "../components/Footer";

// ICON

const Layout = ({
  children,
  searchInput,
  setSearchInput,
  searchHandler,
  filterHandler,
  setFilterCategory,
}) => {
  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} searchHandler={searchHandler}/>
      <BannerSlider />
      <Category
        setFilterCategory={setFilterCategory}
        filterHandler={filterHandler}
      />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
