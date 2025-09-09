import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

import model7 from "../../src/assets/Images/model7.png";
import model9 from "../../src/assets/Images/model9.png";
import model12 from "../../src/assets/Images/model12.png";
import model6 from "../../src/assets/Images/model6.png";
import model4 from "../../src/assets/Images/model4.png";

// Custom PrevArrow component
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-md border hover:bg-[#E0AC85] hover:text-white transition z-10 cursor-pointer"
  >
    <IoIosArrowRoundBack className="text-2xl" />
  </button>
);

// Custom NextArrow component
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-md border hover:bg-[#E0AC85] hover:text-white transition z-10 cursor-pointer"
  >
    <IoIosArrowRoundForward className="text-2xl" />
  </button>
);

const TestimonialCard = () => {
  const testimonials = [
    { img: model7 },
    { img: model9 },
    { img: model12 },
    { img: model6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-3 text-black">
            See It In Real Life
          </h2>
          <p className="text-black mb-8">
            Bringing Concepts to Life - See, Feel, and Experience the Difference
          </p>

          <div className="relative">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="relative px-3">
                  <img
                    src={item.img}
                    alt="Testimonial"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-lg cursor-pointer hover:bg-[#E0AC85] hover:text-white transition">
                      <FaPlay className="text-black group-hover:text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex justify-center items-end mb-4">
                    <button className="bg-white text-black cursor-pointer rounded-full shadow px-4 py-1 text-sm hover:bg-[#E0AC85] hover:text-white transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-16">
        <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-12">
          <div className="flex items-center justify-center px-8">
            <div className="w-1/2 flex justify-center items-start pt-0">
              <img
                src={model4}
                alt="Hair Collection"
                className="w-full h-[500px] object-cover shadow-md"
              />
            </div>
            <div className="w-1/2 pl-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                Love And Care
              </h1>
              <p className="text-gray-600 mb-6 text-justify">
                At Unique Euphoria, we believe beauty is about confidence and
                empowerment. We support communities through charitable
                initiatives, helping individuals with hair loss and empowering
                women with high-quality, confidence-boosting solutions. Our
                journey continues, dedicated to making a difference, one strand
                at a time.
              </p>
              <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:text-white hover:scale-105 transition-all duration-300">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialCard;