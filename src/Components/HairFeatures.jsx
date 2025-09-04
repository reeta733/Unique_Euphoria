import React from "react";

const features = [
  {
    id: 1,
    title: "Choose Your Perfect Hair",
    desc: "Find the perfect match from our premium collection of 100% Raw Hair. Whether you're looking for volume, length, or a complete transformation, we have it all.",
    btn: "View Collection",
    btnColor: "bg-amber-600 hover:bg-amber-700",
    img: "/features/hair1.png",
    reverse: false,
  },
  {
    id: 2,
    title: "Easily Place Your Order",
    desc: "Enjoy a seamless shopping experience with our secure checkout and fast shipping. Choose your preferred length, texture, and style with just a few clicks.",
    btn: "Order Now",
    btnColor: "bg-orange-500 hover:bg-orange-600",
    img: "/features/hair2.png",
    reverse: true,
  },
  {
    id: 3,
    title: "Style With Confidence",
    desc: "Unleash your beauty with premium quality hair that speaks volumes! Whether you love sleek and straight, bold and curly, or luxurious waves, Unique Euphoria has the perfect bundles to match your vibe.",
    btn: "Explore Styling Tips",
    btnColor: "bg-rose-500 hover:bg-rose-600",
    img: "/features/hair3.png",
    reverse: false,
  },
];

const HairFeatures = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {features.map((item) => (
          <div
            key={item.id}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              item.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <button
                className={`${item.btnColor} text-white px-6 py-2 rounded-full shadow-md transition`}
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HairFeatures;
