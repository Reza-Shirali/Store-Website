import React from "react";

import { NavLink } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

import { BiSearchAlt } from "react-icons/bi";

const Header = ({ searchInput, setSearchInput, searchHandler }) => {
  return (
    <>
      <header className="flex lg:justify-between  sm:justify-center   justify-center p-9 border-4 border-[#756AB6] rounded-3xl bg-[#756AB6] text-black">
        <div className="hidden justify-center items-center gap-8 sm:hidden lg:flex">
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
          <ul className="hidden m-0 font-extrabold justify-center items-center sm:gap-4 md:gap-4 lg:gap-16 sm:hidden md:flex">
            <NavLink to="/">
              <li className="cursor-pointer max-w-[9rem]">Home</li>
            </NavLink>
            <NavLink to="contact-us">
              <li className="cursor-pointer max-w-[9rem]">Contact Us</li>
            </NavLink>
            <NavLink to="about-us">
              <li className="cursor-pointer max-w-[9rem]">About Us</li>
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
    </>
  );
};

export default Header;
