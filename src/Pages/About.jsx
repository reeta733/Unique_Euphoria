import React from "react";

import Icon from "../Components/Icon";

const About = () => {
  return (
    <header className="container bg-white mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
      <div className="flex items-center justify-center px-8  ">
        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your <br /> Perfect Hair
          </h2>
          <p className="text-gray-600 mb-6 text-justify text-wrap">
            Find the perfect match from our premium collection of 100% Raw hair.
            Whether you're looking for volume, length, or a complete
            transformation, we have it all.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-start pt-0">
          <img
            src="../../src/assets/Images/Hair4.jpg"
            alt="Hair Collection"
            className=" w-full h-[500px]  object-cover  shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-12  bg-white">
        <div className="flex items-center justify-center px-8  ">
          <div className="w-1/2 flex justify-center items-start pt-0">
            <img
              src="../../src/assets/Images/logo1.jpg"
              alt="Hair Collection"
              className=" w-full h-[500px]  object-cover  shadow-md"
            />
          </div>

          <div className="w-1/2 pl-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h1>
            <p className="text-gray-600 mb-6 text-justify text-wrap">
              At Unique Euphoria, we believe that beauty is an expression of
              confidence and individuality. Our journey began with a simple
              mission: to provide luxurious, high-quality hair solutions that
              empower individuals to feel their best. With a passion for
              elegance and excellence, we curate hair products that blend beauty
              with timeless sophistication.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-8 ">
          <div className="w-1/2 pr-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h1>
            <p className="text-gray-600 mb-6">
              Our mission is to redefine luxury hair care by offering premium,
              ethically sourced products that enhance natural beauty and boost
              self-confidence. We are dedicated to providing every customer with
              an exceptional experience, ensuring they feel empowered, radiant,
              and uniquely themselves.
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            <img
              src="../../src/assets/Images/hair1.jpg"
              alt="Hair Collection"
              className=" w-full h-[500px] object-cover  shadow-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-center px-8 ">
          <div className="w-1/2 flex justify-center">
            <img
              src="../../src/assets/Images/Hair5.jpg"
              alt="Hair Collection"
              className=" w-full h-[500px]  object-cover shadow-md"
            />
          </div>

          <div className="w-1/2 pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-600 mb-6 text-balance ">
              Every strand of hair we offer is carefully selected and ethically
              sourced to ensure unmatched quality and durability. From natural
              textures to stunning styles, our products are crafted to enhance
              your beauty effortlessly. Whether you seek volume, length, or a
              fresh new look, Unique Euphoria is dedicated to delivering hair
              that feels as incredible as it looks.
            </p>
          </div>
        </div>
      </div>
      <Icon />
    </header>
  );
};

export default About;
