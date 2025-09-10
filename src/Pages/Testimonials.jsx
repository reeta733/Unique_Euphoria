import React from "react";
import NavBar from "../Components/NavBar";
import ClientTestimonialsImg from "../assets/Images/ClientTestimonials.jpg";
import TestimonialCard from "../Components/TestimonialCard";
import Testimonial from "../Components/Testimonial";
import RealLife from "../Components/RealLife";
const Testimonials = () => {
  return (
    <>
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: `url(${ClientTestimonialsImg})` }}
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold mb-4">
          Client Testimonials
        </h1>
       
      </div>
    </section>.
    <RealLife/>
    <Testimonial/>
     <RealLife/>
    </>
    
  );
};

export default Testimonials;