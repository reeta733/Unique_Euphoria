import React from "react";
import Logo from "../assets/Images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-12 ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Unique Euphoria" className="h-10" />
        </div>

        {/* Navigation Links */} 
        <nav className="flex items-center gap-8 text-sm sm:text-base font-medium text-gray-800">
          <NavLink to="/" className="hover:text-[#E0AC85]">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#E0AC85]">
            About
          </NavLink>
          <NavLink to="/awards" className="hover:text-[#E0AC85]">
            Awards
          </NavLink>
          <NavLink to="/testimonials" className="hover:text-[#E0AC85]">
            Testimonials
          </NavLink>
        </nav>

        {/* CTA Button */}
        <button className="px-5 py-2 rounded-full shadow-md border border-[#E0AC85] text-gray-800 hover:bg-[#E0AC85] hover:text-white transition">
          Explore Collection
        </button>
      </div>
    </header>
  );
};

export default Navbar;
