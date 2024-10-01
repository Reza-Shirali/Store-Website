import React from "react";
import { NavLink } from "react-router-dom";

// ICON
import { FaGithub } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

// Swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Images
import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";
import Slide4 from "../assets/images/slide4.jpg";
import Slide5 from "../assets/images/slide5.jpg";
import Category from "../components/Category";

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
      <header className="flex justify-between items-center p-9 border-4 border-[#756AB6] rounded-3xl bg-[#756AB6] text-black">
        <div className="flex justify-center items-center gap-8">
          <h3 className="text-3xl font-black select-none">
            RezaShirali - ReactJS
          </h3>
          <a
            href="https://github.com/Reza-Shirali"
            target="_blank"
            className="flex justify-center item-center"
          >
            <FaGithub className="text-6xl" />
          </a>
        </div>
        <div className="flex gap-16 content-center items-center">
          <ul className="flex m-0 font-extrabold justify-center items-center gap-20">
            <NavLink to="/">
              <li className="cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="contact-us">
              <li className="cursor-pointer">Contact Us</li>
            </NavLink>
            <NavLink to="about-us">
              <li className="cursor-pointer">About Us</li>
            </NavLink>
          </ul>
          <div className="flex justify-center items-center gap-4  p-4 border-2 rounded-3xl border-[#E0AED0]">
            <input
              type="text"
              placeholder="Search by name, description and price..."
              className="min-w-[28rem] bg-transparent h-[100%] outline-none placeholder-gray-800"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div
              className="flex justify-center item-center"
              onClick={searchHandler}
            >
              <BiSearchAlt className="text-5xl cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
      <div className="w-full h-[60vh] my-0 mx-auto rounded-3xl mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src={Slide1}
              className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slide2}
              className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slide3}
              className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slide4}
              className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slide5}
              className="w-[100%] my-0 mx-auto h-[50rem] object-fit-cover rounded-3xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Category
        setFilterCategory={setFilterCategory}
        filterHandler={filterHandler}
      />
      {children}
      <footer className="flex justify-center item-center p-9 border-4 border-[#756AB6] rounded-3xl bg-[#756AB6] text-black font-black">
        <p>Develop with ❤️‍🔥 by Reza</p>
      </footer>
    </>
  );
};

export default Layout;
