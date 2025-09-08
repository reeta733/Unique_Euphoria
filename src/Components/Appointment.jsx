import React from "react";
// import model5 from '../../src/assets/Images/model5.jpg'

const Appointment = () => {
  return (

    
     <div
    //   style={{ backgroundImage: `url(${model5})` }} 
      className="bg-no-repeat bg-none bg-cover bg-center  grid grid-cols-2 relative w-full  md:h-[500px] "
    >
        <div className="absolute inset-y-0 right-64 w-full md:w-1/2 ">
          <div className="absolute  inset-y-0 right-0  md:w-1/2 p-8 md:p-12 flex flex-col justify-center ">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight font-serif text-right">
              Have Any Questions? <br />
              Get Free Consultation
            </h2>
            <p className="text-lg mb-8 font-medium  ">
              Expert Advice Just a Click Away!
            </p>
            <button className=" bg-black hover:text-[#E0AC85] text-white px-6 py-3 rounded-full ">
              Get Appointment
            </button>
          </div>
        </div>

      
      </div>

  );
};

export default Appointment;
