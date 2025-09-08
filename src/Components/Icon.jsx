import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
const Icon = () => {
  return (
    <div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-gray-800 tracking-wider">
     Why Unique Euphoria
        </h1>
        <p className="text-lg md:text-xl font-light mb-12 text-gray-600 tracking-wide">
          The Unique Euphoria Difference
        </p>
      </div>
      <div className="flex flex-row md:flex-row justify-center items-center md:space-x-12 lg:space-x-24 space-y-8 md:space-y-0">
        {/* <!-- Icon 1 --> */}
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#bda88f]">
            <FaRegThumbsUp />
          </div>
          <h3 className="mt-4 text-base md:text-lg font-medium text-gray-800">
            One-Stop Service
          </h3>
        </div>
        {/* <!-- Icon 2 --> */}
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#bda88f]">
            <FaRegThumbsUp />
          </div>
          <h3 className="mt-4 text-base md:text-lg font-medium text-gray-800">
            Trusted By 800K+ Customers
          </h3>
        </div>
        {/* <!-- Icon 3 --> */}
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#bda88f]">
            <FaRegThumbsUp />
          </div>
          <h3 className="mt-4 text-base md:text-lg font-medium text-gray-800">
            Customization Service
          </h3>
        </div>
        {/* <!-- Icon 4 --> */}
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#bda88f]">
            <FaRegThumbsUp />
          </div>
          <h3 className="mt-4 text-base md:text-lg font-medium text-gray-800">
            Worldwide Shipping
          </h3>
        </div>
        <div className="flex flex-col items-center max-w-[200px]">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-[#bda88f]">
            <FaRegThumbsUp />
          </div>
          <h3 className="mt-4 text-base md:text-lg font-medium text-gray-800">
            Hassle-Free Return Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Icon;
