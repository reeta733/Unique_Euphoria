import React from "react";
import { FaShopify, FaUsers, FaCogs, FaGlobe, FaUndo } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaShopify />, title: "One-Stop Service" },
  { id: 2, icon: <FaUsers />, title: "Trusted By 800k+ Customers" },
  { id: 3, icon: <FaCogs />, title: "Customization Service" },
  { id: 4, icon: <FaGlobe />, title: "Worldwide Shipping" },
  { id: 5, icon: <FaUndo />, title: "Hassle-Free Return Policy" },
];

const WhyUniqueEuphoria = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold font-serif text-black mb-2">
          Why Unique Euphoria
        </h2>
        <p className="text-gray-600 mb-12">The Unique Euphoria Difference</p>

        <div className="flex flex-wrap justify-center md:justify-between items-start">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center mx-4 my-6 md:my-0 w-32"
            >
              <div className="relative">
                {feature.id > 1 && (
                  <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gray-300 transform -translate-x-full"></div>
                )}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300">
                  <span className="text-2xl text-[#BE9B81]">
                    {feature.icon}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-800">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUniqueEuphoria;
