import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Modal from "../components/Modal";
import CounterProduct from "../components/CounterProduct";

const HomePage = ({
  products,
  counterProduct,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [renderedProducts, setRenderedProducts] = useState(products);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = renderedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(renderedProducts.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      setShowModal(true);
    } else {
      setRenderedProducts(products);
    }
  }, [products]);

  const handleCloseModal = () => {
    setShowModal(false);
    setRenderedProducts(products);
  };

  return (
    <>
      {showModal && <Modal handleCloseModal={handleCloseModal} />}
      <CounterProduct counterProduct={counterProduct} />
      <ul
        className={`${
          renderedProducts > 0
            ? `flex flex-wrap justify-center items-center mt-[-8rem]`
            : `flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 items-center mt-[-8rem]`
        }`}
      >
        {renderedProducts.length > 0 ? (
          <ProductList
            currentProducts={currentProducts}
          />
        ) : (
          <p className="relative right-[-22%] top-[10rem] text-4xl font-bold text-[#756ab6] mb-[23rem]">
            There are no products available. Please re-enter the name or
            description of your product.
          </p>
        )}
      </ul>
      <div className="flex justify-center items-center my-8 gap-16">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`py-2 px-4 bg-[#674188] text-white rounded-lg font-bold ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#5a3472]"
          }`}
        >
          Previous
        </button>
        <span className="text-xl font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`py-2 px-4 bg-[#674188] text-white rounded-lg font-bold ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#5a3472]"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default HomePage;
