import React from "react";
import NavBar from "../Components/NavBar";
import ClientTestimonialsImg from "../assets/Images/ClientTestimonials.jpg";
import TestimonialCard from "../Components/TestimonialCard";
import Testimonial from "../Components/Testimonial";
const Testimonials = () => {
  return (
    <>
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: `url(${ClientTestimonialsImg})` }}
    >
      {/* NavBar is now placed directly inside the section */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold mb-4">
          Client Testimonials
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto px-4">
          Hear what our satisfied clients have to say about their experience
        </p>
      </div>
    </section>
    <TestimonialCard/>
    <Testimonial/>
     <TestimonialCard/>
    </>
    
  );
};

export default Testimonials;