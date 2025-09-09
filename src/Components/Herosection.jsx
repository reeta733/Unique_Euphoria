import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import Group from "../../src/assets/Images/Group.png";
import Hair2 from "../../src/assets/Images/Hair2.jpg";
import Hair6 from "../../src/assets/Images/Hair6.jpg";
import Hair4 from "../../src/assets/Images/Hair4.jpg";
import Hair3 from "../../src/assets/Images/Hair3.jpg";

const Hero = () => {
  const categories = [
    { name: "Topper Collection", img: Hair2 },
    { name: "Wig Collection", img: Hair6 },
    { name: "Hair Lace", img: Hair4 },
    { name: "New Arrivals", img: Hair3 },
  ];

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-6 lg:-left-12 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 z-10 cursor-pointer"
    >
      <IoIosArrowRoundBack className="text-2xl" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-6 lg:-right-12 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 z-10 cursor-pointer"
    >
      <IoIosArrowRoundForward className="text-2xl" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative lg:py-16 px-4 sm:px-6 lg:px-12">
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-700 font-medium">
            Luxurious, Confident, and Empowering
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#6B4226] leading-tight">
            Luxury Hair, <br /> Timeless Beauty
          </h1>
          <p className="text-base sm:text-lg font-serif text-[20px] text-black max-w-md font-medium">
            Premium quality hair for every woman, every style, and every
            occasion.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={Group}
            alt="Luxury Hair"
            className="rounded-xl w-[260px] sm:w-[320px] lg:w-[400px] object-contain"
          />
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto relative mt-12 sm:mt-16">
        <Slider {...settings} className="px-6">
          {categories.map((item, idx) => (
            <div key={idx} className="px-3">
              <div className="p-4 flex flex-col items-center gap-2 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-28 sm:h-32 lg:h-36 object-cover rounded-xl"
                />
                <div className="flex items-center justify-between w-full mt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-800">
                    {item.name}
                  </p>
                  <MdArrowOutward className="text-base text-black" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
