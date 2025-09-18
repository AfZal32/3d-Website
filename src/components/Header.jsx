import React, { useState } from "react";
import "../index.css";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-3xl font-base m-0 bg-gradient-to-r from-[#e99b63] to-[white] bg-clip-text text-transparent"
      >
        Technology
      </h1>
      <nav
        className="hidden  md:flex items-center gap-12
       cursor-pointer"
      >
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="nav-menu-items"
        >
          Home
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="nav-menu-items"
        >
          About
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="nav-menu-items"
        >
          Features
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="nav-menu-items"
        >
          Docs
        </a>
      </nav>
      <button
        className="hidden md:block bg-[#a7a7a7]
       text-black py-3 px-8 rounded-full border-none
        font-medium transition-all duration-500
         hover:bg-white cursor-pointer z-50"
      >
        Signin
      </button>
      <button
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="md:hidden text-3xl p-2 z-50 transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        {menuIsOpen ? (
          <i className="fa-solid fa-xmark transform rotate-180 transition-transform duration-300"></i>
        ) : (
          <i className="fa-solid fa-bars transform rotate-0 transition-transform duration-300"></i>
        )}
      </button>

      <div
        className={`  ${
          menuIsOpen ? `` : `hidden`
        } fixed top-16 bottom-0 right-0 
      left-0 p-5 flex justify-center md:hidden z-40
       bg-black bg-opacity-70 backdrop-blur-md`}
      >
        <nav className="flex flex-col gap-6 ">
          <a className="nav-menu-items">Home</a>
          <a className="nav-menu-items">About</a>
          <a className="nav-menu-items">Features</a>
          <a className="nav-menu-items">Docs</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
