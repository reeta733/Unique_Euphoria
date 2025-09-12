import React from "react";
import RealLife from "../Components/RealLife"

import model4 from "../../src/assets/Images/model4.png";



const TestimonialCard = () => {


  return (
    <div className="relative">
      
      <RealLife/>

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
