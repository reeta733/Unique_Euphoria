import React from "react";
import model5 from "../assets/Images/model5.png";
const Appointment = () => {
  return (
  <section
          className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
          style={{ backgroundImage: `url(${model5})` }}
        >
         
          <div className="absolute inset-0  bg-opacity-40"></div>
  
          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold mb-4">
              Client Testimonials
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto px-4">
              Hear what our satisfied clients have to say about their experience
            </p>
          </div>
        </section>
  );
};

export default Appointment;
