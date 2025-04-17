import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <img src={assets.logo} alt="logo" className="w-25" />
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="hover:text-green-600">
          Home
        </a>
        <a href="#" className="hover:text-green-600">
          About
        </a>
        <a href="#" className="hover:text-green-600">
          Features
        </a>
        <a href="#" className="hover:text-green-600">
          Contact
        </a>
        <a href="/product" className="hover:text-green-600">
          Add Product
        </a>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
