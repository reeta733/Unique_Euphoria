import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-12 py-0 gap-8 bg-white">
      <div className="flex items-center justify-center px-8 py-12 ">
        <div className="w-1/2 flex justify-center items-start pt-0">
          <img
            src="../../src/assets/Images/Hair4.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px]  object-cover  shadow-md"
          />
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6 text-justify text-wrap">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
          <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full ">
            View Collection
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-1/2 pr-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
          <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full ">
            View Collection
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/Hair9.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px]  object-cover  shadow-md"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/Hair2.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px]  object-cover shadow-md"
          />
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6 text-balance ">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
          <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full ">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
