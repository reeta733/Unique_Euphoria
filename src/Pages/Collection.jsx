import React from "react";
import NavBar from "../Components/NavBar";
import Items from "../Components/Slider";
import CollectionImg from "../assets/Images/Collections.png";
import { FaPlay } from "react-icons/fa";

import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import model15 from "../assets/Images/model15.png";
import model16 from "../assets/Images/model16.png";
import model17 from "../assets/Images/model17.png";
import model18 from "../assets/Images/model18.png";

const videos = [
  {
    image: model15,
    title: "Video Tutorial By Our Professional Team",
  },
  {
    image: model16,
    title: "Video Tutorial By Our Professional Team",
  },
  {
    image: model17,
    title: "Video Tutorial By Our Professional Team",
  },
  {
    image: model18,
    title: "Video Tutorial By Our Professional Team",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-10 -mr-4 cursor-pointer"
  >
    <IoIosArrowRoundForward className="text-2xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-10 -ml-4 cursor-pointer"
  >
    <IoIosArrowRoundBack className="text-2xl" />
  </button>
);

const Collection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: `url(${CollectionImg})` }}
      >
        
        <div className="absolute top-0 left-0 w-full z-50">
          <NavBar />
        </div>

        <div className="absolute inset-0  bg-opacity-40"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold mb-4">
            Client Testimonials
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto px-4">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>
      </section>
      <Items />
      <Items />

    
      <div className="min-h-screen bg-[#ECDED3] text-black p-8 flex flex-col items-center justify-center font-inter">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#333]">
            Professionals
          </h2>
          <p className="text-lg md:text-xl font-inter text-gray-600 mt-2">
            Video Tutorial By Our Professional Team
          </p>
        </div>

        <div className="relative w-full max-w-6xl">
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="px-3">
                <div className="w-full bg-white rounded-3xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-auto object-cover rounded-3xl"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className=" bg-opacity-50 rounded-full p-4 cursor-pointer hover:bg-opacity-70 transition">
                        <FaPlay className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-transparent text-center">
                    <button className="text-gray-800 border border-gray-400 rounded-full px-6 py-2 mt-2 font-medium cursor-pointer hover:text-white hover:bg-[var(--primary)] hover:text-white transition">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Items />
    </>
  );
};

export default Collection;
