import React from "react";

const InfoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 ">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  max-w-6xl mx-auto px-6 py-16">
  {/* Image Left */}
  <div className="w-full h-64 sm:h-80 lg:h-[420px] overflow-hidden">
    <img
      src="../../src/assets/Images/Hair1.jpg"
      alt="Perfect Hair"
      className=" "
    />
  </div>

  {/* Text Right */}
  <div className="text-center md:text-left md:ml-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Choose Your Perfect Hair
    </h2>
    <p className="text-gray-600 mb-6 leading-relaxed">
      Find the perfect match from our premium collection of 100% Raw hair.
      Whether you’re looking for volume, length, or a complete transformation,
      we have it all.
    </p>
    <button className="bg-[#B57D5A] text-white px-6 py-2 rounded-full hover:bg-[#9c6748] transition">
      View Collection
    </button>
  </div>
</div>


      {/* Row 2 (Text Left, Image Right) */}
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Easily Place Your Order
        </h2>
        <p className="text-gray-600 mb-6">
          Enjoy a seamless shopping experience with our secure checkout and fast
          shipping. Choose your preferred length, texture, and style with just a
          few clicks.
        </p>
        <button className="bg-[#B57D5A] text-white px-6 py-2 rounded-full hover:bg-[#9c6748]">
          Order Now
        </button>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="../../src/assets/Images/Hair2.jpg"
          alt="Place Order"
          className="w-full h-[350px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Row 3 */}
      <div>
        <img
          src="../../src/assets/Images/Hair3.jpg"
          alt="Confidence"
          className="w-full h-[350px] object-cover rounded-xl shadow-md"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Style With Confidence
        </h2>
        <p className="text-gray-600 mb-6">
          Unleash your beauty with premium quality hair that speaks volumes!
          Whether you love sleek and straight, bold and curly, or luxurious
          waves, Unique Euphoria has the perfect bundles to match your vibe.
        </p>
        <button className="bg-[#B57D5A] text-white px-6 py-2 rounded-full hover:bg-[#9c6748]">
          Explore Styling Tips
        </button>
      </div>
    </section>
  );
};

export default InfoSection;
