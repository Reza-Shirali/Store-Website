import React,{ useEffect } from "react";

const Modal = ({ handleCloseModal }) => {
  // Key Enter
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseModal]);

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">No products found</h2>
          <p className="mb-4">
            There are no products in the list. Please try again later.
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
