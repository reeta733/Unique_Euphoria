import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Samantha R.",
    text: "I was hesitant to try a new stylist, but this website made it so easy to find the perfect match! The recommendations were spot-on, and I couldn’t be happier with my haircut. The stylist understood exactly what I wanted and even suggested a few enhancements that made my hair look even better. I’ve received so many compliments—I’ll definitely be back.",
    img: "/testimonials/user1.jpg",
  },
  {
    id: 2,
    name: "Emily W.",
    text: "Such a wonderful experience! The stylist was attentive and knowledgeable. My hair has never looked this healthy and shiny before. Highly recommend Unique Euphoria to anyone looking for quality extensions.",
    img: "/testimonials/user2.jpg",
  },
  {
    id: 3,
    name: "Jessica K.",
    text: "Absolutely loved it! Easy ordering, quick delivery, and amazing results. The extensions blended perfectly with my natural hair and gave me the confidence boost I needed.",
    img: "/testimonials/user3.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, text, img } = testimonials[index];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Customer Testimonials</h2>
        <p className="text-gray-400 mt-2">Real Stories from Happy Customers</p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-60 h-60 flex-shrink-0">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Stars */}
          <div className="flex text-amber-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-300 mb-6 leading-relaxed">{text}</p>

          {/* Name */}
          <p className="font-signature text-lg">{name}</p>

          {/* Navigation */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
