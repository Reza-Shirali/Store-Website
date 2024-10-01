import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Modal from "../components/Modal";
import CounterProduct from "../components/CounterProduct"

const HomePage = ({ products , counterProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [renderedProducts, setRenderedProducts] = useState(products); 

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
      <CounterProduct counterProduct={counterProduct}/>
      <ul className={`${renderedProducts > 0 ? `flex flex-wrap justify-between items-center mt-[-8rem]` : `flex flex-wrap justify-between items-center mt-[-8rem]`}`}>
        {renderedProducts.length > 0 ? (
          <ProductList renderedProducts={renderedProducts}/>
        ) : <p className="relative right-[-22%] top-[10rem] text-4xl font-bold text-[#756ab6] mb-[23rem]">There are no products available. Please re-enter the name or description of your product.</p>}
      </ul>
    </>
  );
};

export default HomePage;
