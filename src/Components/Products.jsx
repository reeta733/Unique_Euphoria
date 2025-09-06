import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Virgin Hair",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair7.jpg",
  },
  {
    id: 2,
    name: "Raw Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair6.jpg",
  },
  {
    id: 3,
    name: "Custom Wigs & Closures",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair8.jpg",
  },
  {
    id: 4,
    name: "Blonde Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair4.jpg",
  },
    {
    id: 4,
    name: "Blonde Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair4.jpg",
  },
    {
    id: 4,
    name: "Blonde Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair4.jpg",
  },
    {
    id: 4,
    name: "Blonde Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair4.jpg",
  },
    {
    id: 4,
    name: "Blonde Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "../../src/assets/Images/Hair4.jpg",
  },
];

const Products = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((old) => (old === 0 ? products.length - 1 : old - 1));
  };

  const nextSlide = () => {
    setIndex((old) => (old === products.length - 1 ? 0 : old + 1));
  };

  return (
    <section className="bg-[var(--ink)] text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white font-mariposa">
          Explore Our Products
        </h2>
        <p className="text-gray-300 mb-8">
          Discover the Perfect Blend of Quality, Innovation, and Style
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center mb-10">
          <button className="bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm">
            New Arrivals
          </button>
          <button className="border border-gray-400 px-5 py-1 rounded-full text-sm">
            See All Product
          </button>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 lg:-left-12 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden">
            {products.slice(index, index + 3).map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center w-72 flex-shrink-0"
              >
                {/* Card with image */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-80 object-cover"
                  />

                  {/* Single pill center */}
                  <div className="absolute inset-0 flex justify-center items-end m-4">
                    <div className="bg-white rounded-full flex items-center shadow px-2 py-1">
                      <span className="bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-l-full">
                        100%
                      </span>
                      <span className="text-black text-xs sm:text-sm px-3 py-1 rounded-r-full">
                        Human Hair
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text outside card */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 lg:-right-12 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
