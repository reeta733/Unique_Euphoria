import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import model3 from "../../src/assets/Images/model3.jpg";
import model6 from "../../src/assets/Images/model6.png"; 
import model12 from "../../src/assets/Images/model12.png";


const testimonials = [
  {
    img: model3,
    name: "Samantha R.",
    rating: 5,
    text: "I was hesitant to try a new stylist, but this website made it so easy to find the perfect match! The recommendations were spot-on, and I couldn't be happier with my haircut. The stylist understood exactly what I wanted and even suggested a few enhancements that made my hair look even better. I've received so many compliments—I'll definitely be back.",
  },
  {
    img: model6,
    name: "Jessica K.",
    rating: 4,
    text: "Amazing experience! The stylist was professional and listened to my needs. My hair has never looked better.",
  },
  {
    img: model12,
    name: "Olivia M.",
    rating: 5,
    text: "Highly recommend! The website made booking so simple, and the stylist's suggestions were perfect.",
  },
];


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 z-10"
  >
    ←
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-[#b37b4d] text-white hover:bg-opacity-90 z-10"
  >
    →
  </button>
);

const Testimonial = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">Customer Testimonials</h2>
        <p className="text-gray-400">Real Stories from Happy Customers</p>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col-2 lg:flex-row items-center lg:items-start gap-12">
              <div className="lg:justify-start">
                <img
                  src={item.img}
                  alt="Customer"
                  className="rounded-2xl w-[350px] p-2 object-scale-down md:object-cover"
                />
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center mb-4">
                  <span className="text-xl ">{"★".repeat(item.rating)}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.text}
                </p>
                <p className="font-handwriting text-lg">{item.name}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
