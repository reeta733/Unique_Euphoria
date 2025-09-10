import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-12  bg-white">
      <div className="flex items-center justify-center px-8  ">
        <div className="w-1/2 flex justify-center items-start pt-0">
          <img
            src="../../src/assets/Images/Hair4.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px]  object-cover  shadow-md"
          />
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif ">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6 text-justify text-wrap">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
          <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:text-white hover:scale-105 transition-all duration-300">
            View Collection
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center px-8 ">
        <div className="w-1/2 pr-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif ">
            Easily place <br /> your order
          </h2>
          <p className="text-gray-600 mb-6">
            Enjoy a seamless shopping experience with our secure checkout and
            fast shipping. Choose your preferred length, texture, and style with
            just a few clicks.
          </p>
          <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:text-white hover:scale-105 transition-all duration-300">
            View Collection
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/hair5.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px] object-cover  shadow-md"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-8 ">
        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/Hair2.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px]  object-cover shadow-md"
          />
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
            Style With <br /> Confidence
          </h2>
          <p className="text-gray-600 mb-6 text-balance ">
            Unleash your beauty with premium quality hair that speaks volumes!
            whether you love sleek and straight, bold and curly, or luxurious
            waves, Unique Euphoria has the perfect bundles to match your
            vibe.{" "}
          </p>
          <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:text-white hover:scale-105 transition-all duration-300">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
