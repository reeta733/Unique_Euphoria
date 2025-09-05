import React from "react";
import Logo from "../assets/Images/Logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="w-full bg-[var(--bg)] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Unique Euphoria" className="h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-[var(--ink)] font-medium">
          <NavLink to="/" className=" text-[var(--ink)] font-medium">
            Home
          </NavLink>
          <NavLink to="/about" className="">
            About
          </NavLink>
          <NavLink to="/awards" className="">
            Awards
          </NavLink>
          <NavLink to="/testimonials" className="">
            Testimonials
          </NavLink>
        </nav>

        {/* CTA Button */}
        <button className="bg-white text-[var(--ink)] px-5 py-2 rounded-full shadow-md border hover:bg-[var(--primary)] hover:text-white transition">
          Explore Collection
        </button>
      </div>
    </header>
  );
};

export default Navbar;