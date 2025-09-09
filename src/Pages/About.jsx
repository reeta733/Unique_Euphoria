import React from "react";
import Icon from "../Components/Icon";
import model11 from "../assets/Images/model11.png";
import model13 from "../assets/Images/model13.png";
import model14 from "../assets/Images/model14.png";
import hair1 from "../assets/Images/Hair1.jpg";
import hair5 from "../assets/Images/Hair5.jpg";

const About = () => {
  return (
    <header className="container  mx-auto grid h-full gap-10  grid-cols-1 items-center lg:grid-cols-2">
      <div className="flex items-center  justify-center px-8  ">
        <div className="w-1/2 pl-12 ">
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
        <div className="w-1/2 grid grid-cols-2  pt-6 gap-4">
        <img
                src={model14}
                alt="Hair Collection"
                className="  rounded-lg object-cover  gap-4"
              />
                
           

          <div className=" flex flex-row mt-6 lg:mt-0 gap-4">
            <div className=" mt-6 lg:mt-0 gap-4 ">
              
              <img
                src={model13}
                alt="Hair Collection"
                className="  object-cover  rounded-lg  gap-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row items-start justify-center px-6 md:px-12  bg-white">
        <div className="flex items-center justify-center px-8  ">
          <div className="w-1/2 flex justify-center items-start pt-0">
            <img
              src={model11}
              alt="logo"
              className=" bg-black"
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
              src={hair1}
              alt="Hair Collection"
              className=" w-full h-[500px] object-cover  shadow-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-center px-8 ">
          <div className="w-1/2 flex justify-center">
            <img
              src={hair5}
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
