import React from "react";
import HeroImg from "../../src/assets/Images/model.png";
import Hair1 from "../../src/assets/Images/Hair1.jpg"
import Hair2 from "../../src/assets/Images/Hair2.jpg";

const Hero = () => {
  return (
    <section className="relative bg-[var(--bg)] py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
        {/* Left Text */}
        <div className="text-left space-y-6">
          <p className="text-sm uppercase tracking-wide text-[var(--primary)] font-medium">
            Luxurious, Confident, and Empowering
          </p>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] leading-tight">
            Luxury Hair, <br /> Timeless Beauty
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Premium quality hair for every woman, every style, and every
            occasion.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-2 border-[var(--primary)] p-2">
            <img
              src={HeroImg}
              alt="Luxury Hair"
              className="rounded-[1.5rem] w-[280px] lg:w-[360px]"
            />
          </div>

          {/* Floating Hair Images */}
          <img
            src={Hair1}
            alt="Hair Extension"
            className="absolute -left-10 bottom-10 w-28 lg:w-36 shadow-lg rounded-xl"
          />
          <img
            src={Hair2}
            alt="Hair Extension"
            className="absolute -right-10 top-10 w-28 lg:w-36 shadow-lg rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Category Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {[
          { name: "Topper Collection", img: "../../src/assets/Images/Hair2.jpg" },
          { name: "Wig Collection", img: "../../src/assets/Images/Hair6.png" },
          { name: "Hair Lace", img: "../../src/assets/Images/Hair4.png" },
          { name: "New Arrivals", img: "../../src/assets/Images/Hair3.png" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="card w-44 p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-28 object-cover rounded-xl"
            />
            <p className="text-sm font-medium text-[var(--ink)]">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
