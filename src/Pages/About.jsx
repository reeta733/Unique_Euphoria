import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import Icon from "../Components/Icon";

const About = () => {
  return (
    <header className="container  mx-auto grid h-full gap-10 w-full grid-cols-1 items-center lg:grid-cols-2">
      <div className="flex items-center justify-center px-8  ">
        <div className="w-1/2 pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Unique Euphoria
          </h2>
          <p className="text-gray-600 mb-6 text-justify text-wrap">
            At Unique Euphoria, we redefine beauty with luxury hair solutions
            designed for confidence and elegance. Our brand is built on the
            foundation of quality, innovation, and self-expression, offering
            premium hair products that empower individuals to embrace their
            unique beauty. From ethically sourced hair extensions to expertly
            crafted wigs, every product is designed to deliver unmatched
            quality, versatility, and a natural look. We are more than just a
            beauty brand—we are a movement that celebrates diversity,
            confidence, and the art of transformation. With a commitment to
            excellence and customer satisfaction, Unique Euphoria continues to
            inspire and elevate beauty standards, making luxury hair accessible
            to all.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-start pt-6 ">
          <div className=" grid grid-cols-12 mt-6 lg:mt-0 gap-4">
            <div className="grid col-span-4 mt-6 lg:mt-0 gap-4">
              <img
                src="../../src/assets/Images/model13.png"
                alt="Hair Collection"
                className=" w-full h-[240px] rounded-lg object-cover col-span-4 gap-4"
              />
              <div className=" justify-center w-[240px] max-w-sm mx-auto bg-black  rounded-2xl shadow-md p-6 flex items-center justify-center text-center">
                <h1 className="text-white text-lg font-medium">15 +
                  <p className="text-gray-300 mt-2">Years of Experience</p>
                </h1>
                
              </div>
            </div>

            <img
              src="../../src/assets/Images/model13.png"
              alt="Hair Collection"
              className=" w-full  object-cover h-[500px] rounded-lg col-span-4 gap-4"
            />
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row items-start justify-center px-6 md:px-12  bg-white">
        <div className="flex items-center justify-center px-8  ">
          <div className="w-1/2 flex justify-center items-start pt-0">
            <img
              src="../../src/assets/Images/logo1.jpg"
              alt="logo"
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

          <div className="w-1/2 flex justify-center ">
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
      <Icon/>
    </header>
  );
};

export default About;
