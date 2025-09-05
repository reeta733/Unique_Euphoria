import React from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import Group from "../../src/assets/Images/Group.png";
import Hair2 from "../../src/assets/Images/Hair2.jpg";
import Hair6 from "../../src/assets/Images/Hair6.jpg";
import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair3 from "../../src/assets/Images/Hair3.jpg";

const Hero = () => {
  const categories = [
    { name: "Topper Collection", img: Hair2 },
    { name: "Wig Collection", img: Hair6 },
    { name: "Hair Lace", img: Hair4 },
    { name: "New Arrivals", img: Hair3 },
  ];

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-[#F0DDCF] via-[#E0AC85] to-[#F6EAE0] px-4 sm:px-6 lg:px-12">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="text-left space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-700 font-medium font-sans">
            Luxurious, Confident, and Empowering
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6B4226] leading-tight">
            Luxury Hair, <br /> Timeless Beauty
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md font-medium ">
            Premium quality hair for every woman, every style, and every
            occasion.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
          <div className="relative z-10 rounded-2xl overflow-hidden p-2 w-[240px] sm:w-[280px] lg:w-[360px] border-4 border-[#E0AC85]/40 shadow-lg">
            <img
              src={Group}
              alt="Luxury Hair"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </div>

    
   
<div className="relative mt-12 sm:mt-16  flex justify-center ">
  {/* Category Cards */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 ">
    {categories.map((item, idx) => (
      <div
        key={idx}
        className="w-36 sm:w-44 lg:w-52 p-4 flex flex-col items-center gap-2 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-xl"
        />
        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-xs sm:text-sm font-medium text-gray-800">
            {item.name}
          </p>
          <MdArrowOutward className="text-[14px] text-black" />
        </div>
      </div>
    ))}
  </div>

  {/* Overlay Arrows */}
  <div className="absolute flex flex-wrap justify-start left-0 top-1/2 right-1/2-translate-y-1/2 flex flex-row gap-4">
    {/* Left Button */}
    <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-md border hover:bg-[#E0AC85] hover:text-white transition">
      <BsArrowLeftCircleFill className="text-2xl" />
    </button>

    {/* Right Button */}
    <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-md border hover:bg-[#E0AC85] hover:text-white transition">
      <BsArrowRightCircleFill className="text-2xl" />
    </button>
  </div>
</div>

    </section>
  );
};

export default Hero;
