import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [counterProduct, setCounterProduct] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  console.log(products);

  useEffect(() => {
    setCounterProduct(searchProduct.length);
  }, [searchProduct]);
  console.log(counterProduct);

  // Search Handler
  const searchHandler = () => {
    const searchProducts = products.filter((product) => {
      const lowerCaseInput = searchInput.toLocaleLowerCase();
      return (
        product.name.toLowerCase().includes(lowerCaseInput) ||
        product.description.toLowerCase().includes(lowerCaseInput) ||
        product.price.toString() === lowerCaseInput
      );
    });
    setSearchProduct(searchProducts);
  };

  // Filter Handler
  const filterHandler = () => {
    let filterProducts = products;
    if (filterCategory && filterCategory !== "All") {
      filterProducts = products.filter((product) => {
        return product.region === filterCategory;
      });
    }
    setSearchProduct(filterProducts);
  };

  // Fetch Data For Api
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fake-coffee-api.vercel.app/api");
        setProducts(res.data);
        setSearchProduct(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error Fetching the products", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter Handler UseEffect
  useEffect(() => {
    filterHandler();
  }, [filterCategory, products]);

  return (
    <BrowserRouter>
      <Layout
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchHandler={searchHandler}
        setFilterCategory={setFilterCategory}
        filterHandler={filterHandler}
      >
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <div className="flex justify-center items-start gap-4 h-screen">
                  <HashLoader color="#756AB6" />
                  <span className="text-[#756AB6] text-4xl relative top-4">
                    Loading...
                  </span>
                </div>
              ) : (
                <HomePage products={searchProduct} counterProduct={counterProduct} />
              )
            }
          />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
