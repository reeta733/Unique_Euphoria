import React from 'react'

const Testimonial = () => {
  return (
<div className="bg-black grid   text-white py-16 px-6 lg:px-20">
  
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold mb-2">Customer Testimonials</h2>
    <p className="text-gray-400">Real Stories from Happy Customers</p>
  </div>

  <div className="flex flex-row lg:flex-row items-center  lg:items-start gap-12">

    <div className=" lg:justify-start">
      <img
        src="../../src/assets/Images/model3.jpg"
        alt="Customer"
        className="rounded-2xl w-[350px]  p-2 object-scale-down   md:object-cover object-cover"
      />
    </div>

    <div className="flex-1 text-left">
      
      <div className="flex items-center mb-4">
        <span className="text-xl">★★★★★</span>
      </div>

      
      <p className="text-gray-300 mb-6 leading-relaxed">
        I was hesitant to try a new stylist, but this website made it so easy
        to find the perfect match! The recommendations were spot-on, and I
        couldn't be happier with my haircut. The stylist understood exactly
        what I wanted and even suggested a few enhancements that made my hair
        look even better. I've received so many compliments—I'll definitely be back.
      </p>

      {/* Signature */}
      <p className="font-handwriting text-lg">Samantha R.</p>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200">
          ←
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b37b4d] text-white hover:bg-opacity-90">
          →
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonial
