import React from "react";

const InfoSection = () => {
  return (
    <section className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 bg-white  ">
      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/Hair1.jpg"
            alt="Hair Collection"
            className="w-80 h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">
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
          <button className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">
            View Collection
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/Hair1.jpg"
            alt="Hair Collection"
            className="w-80 h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-1/2 flex justify-center">
          <img
            src="../../src/assets/Images/Hair9.jpg"
            alt="Hair Collection"
            className="w-80 h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
