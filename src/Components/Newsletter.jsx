import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Hair1 from "../../src/assets/Images/Hair1.jpg";
import Hair2 from "../../src/assets/Images/Hair2.jpg";
import Hair3 from "../../src/assets/Images/Hair3.jpg";

const blogs = [
  {
    id: 1,
    image: Hair1,
    title:
      "Transform Your Hair with Expert Tips, Styling Secrets, and Trend Insights",
    description:
      "Stay updated with the latest hair trends, styling guides, and expert advice to keep your look fresh, flawless, and effortlessly beautiful every day.",
  },
  {
    id: 2,
    image: Hair2,
    title:
      "Your Go-To Destination for Hair Care, Styling Advice, and Beauty Trends",
    description:
      "Explore professional tips, trend insights, and expert recommendations to maintain, style, and enhance your hair for a confidence-boosting look.",
  },
  {
    id: 3,
    image: Hair3,
    title:
      "Luxury Hair Secrets: Expert Tips, Trendy Styles, and Essential Hair Care",
    description:
      "From styling hacks to premium hair care tips, discover everything you need to know to achieve salon-perfect hair every day.",
  },
];

const Blogs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900">News & Blogs</h2>
        <p className="text-gray-500 mt-2">Latest Updates & Expert Insights</p>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3 mt-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <button className="flex items-center gap-2 bg-[#b77e5e] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#9c6644] transition-all duration-300 mx-auto">
            View More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;