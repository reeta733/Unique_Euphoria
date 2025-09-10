import React from "react";
import model5 from "../assets/Images/model5.png";
const Appointment = () => {
  return (
    <>
   <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-2">
        
        <div className="w-60 h-48 overflow-hidden  md:h-96">
          <img
            src={model5}
            alt="Consultation Model"
            className="w-full h-full object-cover object-top"
          />
        </div>

        
        <div className="bg-[#BE9B81] p-10 md:p-16 flex flex-col justify-center text-left">
          <div className="ml-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
              Have Any Questions?
              <br />
              Get Free Consultation
            </h2>
            <p className="text-sm md:text-base font-sans font-normal text-gray-700 mb-6">
              Expert Advice Just a Click Away!
            </p>
            <div className="flex justify-left">
              <button className="bg-black text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Appointment;
