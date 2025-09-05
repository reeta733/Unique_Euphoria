import React from "react";
import { BsArrowRightCircleFill,BsArrowLeftCircleFill  } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Group from "../../src/assets/Images/Group.png";
import Hair1 from "../../src/assets/Images/Hair1.jpg";
import Hair2 from "../../src/assets/Images/Hair2.jpg";
import Hair3 from "../../src/assets/Images/Hair3.jpg";
import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair5 from "../../src/assets/Images/Hair5.jpg";
import Hair6 from "../../src/assets/Images/Hair6.jpg";

const Hero = () => {
  const categories = [
    { name: "Topper Collection", img: Hair2 },
    { name: "Wig Collection", img: Hair6 },
    { name: "Hair Lace", img: Hair4 },
    { name: "New Arrivals", img: Hair3 },
  ];

  return (
    <section className="relative bg-[var(--bg)] py-12 lg:py-20 overflow-hidden bg-[#E1BEA3]/10 backdrop-blur-md px-4 sm:px-6 lg:px-12 rounded-lg">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="text-left space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[var(--ink)] font-medium">
            Luxurious, Confident, and Empowering
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--brand-text)] leading-tight">
            Luxury Hair, <br /> Timeless Beauty
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md font-mariposa text-bold text-[var(--ink)]">
            Premium quality hair for every woman, every style, and every
            occasion.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
          <div className="relative z-10 rounded-[1.5rem] overflow-hidden p-2 w-[240px] sm:w-[280px] lg:w-[360px] ">
            <img
              src={Group}
              alt="Luxury Hair"
              className="rounded-[1rem] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Category Cards */}
      <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
        {/* <div className="hidden sm:flex absolute top-1/2 transform -translate-y-1/2 w-full justify-between px-4 lg:px-12">
          <button className="bg-white text-black p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100">
            <FaArrowLeft />
            
            <FaArrowRight />
          </button>
        </div> */}
        <BsArrowLeftCircleFill className="bg-white text-black p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100" />
        <BsArrowRightCircleFill className="bg-white text-black p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100" />

        {categories.map((item, idx) => (
          <div
            key={idx}
            className="card w-36 sm:w-44 lg:w-52 p-3 sm:p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-xl"
            />

            {/* Text + Icon */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2 ">
              <p className="text-xs sm:text-sm text-left font-medium text-[var(--ink)]">
                {item.name}
              </p>
              <MdArrowOutward className="text-[10px]  sm:text-[14px] text-black" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
