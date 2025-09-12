import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm font-sans">
      <div className="w-full border-b border-gray-700 pt-10 px-6 lg:px-20"></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="flex flex-col-2 lg:flex-row justify-between items-center lg:items-end gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-white mb-2 text-left">
              Ready To Glow?
            </h2>
            <p className="text-gray-400 text-sm text-left">
              Subscribe for info on our latest products + discounts, sales and
              more!
            </p>
          </div>

          <div className=" lg:block border-l border-gray-700 h-16 mx-6 ps-50"></div>

          <div className="flex-1 w-full lg:max-w-md">
            <div className="flex bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 text-black focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="m-2 p-2 pl-6 pr-6 bg-[#E0AC85] text-white rounded-full text-sm font-medium hover:bg-white hover:text-[#E0AC85] transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700 py-4 px-6 lg:px-20"></div>

      <div className="py-10 px-6 lg:px-20">
        <div className="grid  grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center lg:text-left">
          <div className="lg:pr-10">
            <h3 className="text-white font-semibold mb-4 text-left">
              Unique Euphoria
            </h3>
            <p className="mb-4 text-gray-400 text-sm leading-relaxed text-left">
              At Unique Euphoria, we offer premium-quality hair extensions and
              wigs that enhance your beauty and confidence. Elevate your style
              with our luxurious, natural-looking products designed to bring out
              your best, inside and out.
            </p>
            <div className="flex  lg:justify-start gap-4 text-lg ">
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300 text-left"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300 text-left"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white border border-gray-700 p-2 rounded-full hover:bg-[#E0AC85] transition-colors duration-300 text-left"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="justify-self-end lg:justify-self-auto text-left">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Video Review
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          
          <div className="justify-self-end lg:justify-self-auto text-left">
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Volume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Length
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Coverage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Style
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Color
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-self-end lg:justify-self-auto text-justify">
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>+91 00000 00000</li>
              <li>
                Buddha Jadawadi,
                <br />
                Opp Digital Equipment Ltd,
                <br />
                Mumbai
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-gray-700 mt-0 pt-0"></div>

      <div className="py-4 px-6 lg:px-20 flex flex-col-2 lg:flex-row justify-between items-center text-gray-500 text-xs">
        <p className="mb-2 lg:mb-0  ">
          © 2025 Unique Euphoria. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-2 lg:mt-0 justify-center text-left lg:justify-end">
          <a href="#" className="hover:underline text-left ">
            Terms and Condition
          </a>
          <a href="#" className="hover:underline text-left">
            Return Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
