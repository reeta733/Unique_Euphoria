import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Virgin Hair",
    subtitle: "Long-Lasting Shine",
    img: "/products/hair1.png", 
  },
  {
    id: 2,
    name: "Raw Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "/products/hair2.png",
  },
  {
    id: 3,
    name: "Custom Wigs & Closures",
    subtitle: "Long-Lasting Shine",
    img: "/products/hair3.png",
  },
  {
    id: 4,
    name: "Blonde Hair Extensions",
    subtitle: "Long-Lasting Shine",
    img: "/products/hair4.png",
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
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">
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

          <div className="flex gap-6 overflow-hidden">
            {products.slice(index, index + 3).map((item) => (
              <div
                key={item.id}
                className="bg-white text-black rounded-2xl shadow-md p-4 w-64 flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-xl"
                />
                {/* Tags */}
                <div className="flex justify-between items-center mt-3">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-xs">
                    100%
                  </span>
                  <span className="bg-gray-200 text-black px-4 py-1 rounded-full text-xs">
                    Human Hair
                  </span>
                </div>
                {/* Text */}
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
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