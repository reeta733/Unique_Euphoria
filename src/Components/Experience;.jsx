import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaHandsHelping, FaUsers, FaCogs, FaGlobe, FaUndo } from "react-icons/fa";

const videos = [
  { id: 1, img: "/reviews/review1.jpg", title: "View Details" },
  { id: 2, img: "/reviews/review2.jpg", title: "View Details" },
  { id: 3, img: "/reviews/review3.jpg", title: "View Details" },
  { id: 4, img: "/reviews/review4.jpg", title: "View Details" },
];

const features = [
  { id: 1, icon: <FaHandsHelping className="text-3xl text-amber-600" />, text: "One-Stop Service" },
  { id: 2, icon: <FaUsers className="text-3xl text-amber-600" />, text: "Trusted By 800K+ Customers" },
  { id: 3, icon: <FaCogs className="text-3xl text-amber-600" />, text: "Customization Service" },
  { id: 4, icon: <FaGlobe className="text-3xl text-amber-600" />, text: "Worldwide Shipping" },
  { id: 5, icon: <FaUndo className="text-3xl text-amber-600" />, text: "Hassle-Free Return Policy" },
];

const Experience = () => {
  return (
    <section className="bg-gradient-to-b from-[#f6e6dc] to-white py-16">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">See It In Real Life</h2>
        <p className="text-gray-600 mt-2">
          Bringing Concepts to Life – See, Feel, and Experience the Difference
        </p>
      </div>

      {/* Video Carousel */}
      <div className="flex justify-center gap-6 overflow-x-auto pb-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative w-60 h-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
          >
            <img src={video.img} alt="review" className="w-full h-full object-cover" />
            {/* Play Button */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <FaPlay className="text-amber-600 text-xl" />
              </div>
            </div>
            {/* Button */}
            <div className="absolute bottom-4 w-full text-center">
              <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm">
                {video.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Love and Care Section */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">
        <img src="/reviews/loveandcare.jpg" alt="Love and Care" className="rounded-lg shadow-lg" />
        <div>
          <h3 className="text-2xl font-bold mb-4">Love And Care</h3>
          <p className="text-gray-600 mb-6">
            At Unique Euphoria, we believe beauty is about confidence and empowerment. We support
            communities through charitable initiatives, helping individuals with hair loss and
            empowering women with high-quality, confidence-boosting solutions. Our journey continues,
            dedicated to making a difference, one strand at a time.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full">
            Explore Styles
          </button>
        </div>
      </div>

      {/* Why Unique Euphoria */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold">Why Unique Euphoria</h3>
        <p className="text-gray-600 mt-2">The Unique Euphoria Difference</p>

        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center w-40 text-center">
              {item.icon}
              <p className="mt-3 text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
