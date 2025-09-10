import React from "react";
import Logo from "../assets/Images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-12 border-4 border-[#E0AC85]/40 rounded-full mt-4"> 
        
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Unique Euphoria" className="h-10" />
        </div>

      
        <nav className="flex items-center gap-8 text-sm sm:text-base font-medium  font-montserrat ">
          <NavLink to="/" className="hover:text-[#E0AC85]">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#E0AC85]">
            About
          </NavLink>
        
          <NavLink to="/testimonials" className="hover:text-[#E0AC85]">
            Testimonials
          </NavLink>
            <NavLink to="/collection" className="hover:text-[#E0AC85]">
            Collection
          </NavLink>
        </nav>

        
        <button className="px-5 py-2 rounded-full  text-gray-800 bg-white text-black font-montserrat font-medium hover:text-white hover:bg-[var(--primary)] transition cursor-pointer duration-300 ease-in-out">
          Explore Collection
        </button>
      </div>
    </header>
  );
};

export default Navbar;
