import React from "react";
import RealLife from "../Components/RealLife";
import model4 from "../../src/assets/Images/model4.png";
import model5 from "../../src/assets/Images/model5.png";
import model6 from "../../src/assets/Images/model6.png";

const TestimonialCard = () => {
    const testimonials = [
    { img: model4 },
    { img: model5 },
    { img: model6 },
  ];


  return (
      <div className="relative no-space">
      <RealLife
    
        title="Real Life Results"
        subtitle="See how our collection makes a difference"
        testimonials={testimonials}
      />


      <section className="bg-white text-gray-900 ">
        <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8">
          
       
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={model4}
              alt="Hair Collection"
              className="w-full max-w-sm md:max-w-md h-auto object-cover shadow-md "
            />
          </div>

  
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif text-center md:text-left">
              Love And Care
            </h1>
            <p className="text-gray-600 mb-6 text-justify text-sm md:text-base">
              At Unique Euphoria, we believe beauty is about confidence and
              empowerment. We support communities through charitable
              initiatives, helping individuals with hair loss and empowering
              women with high-quality, confidence-boosting solutions. Our
              journey continues, dedicated to making a difference, one strand at
              a time.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-full cursor-pointer hover:bg-[#E0AC85] hover:scale-105 transition-all duration-300">
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
