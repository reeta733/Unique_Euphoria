import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-sans ">
      <div className="w-[700] border-b border-gray-700 pt-10"></div>
      <div className="px-6 lg:px-20 ">
        <div className="py-4  flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1  px-6 lg:px-20 py-6 flex flex-col md:flex-row  text-gray-500 ">
            <h2 className="text-2xl font-semibold mb-2 font-sans">Ready To Glow?</h2>
            <p className="text-gray-400  text-left ">
              Subscribe for info on our latest products + discounts, sales and
              more!
            </p>
          </div>
           <div className="hidden lg:flex h-12 border-l border-gray-700 h-24 mx-4 self-center"></div>
          <div className="hidden lg:flex items-stretch px-6">
           
          </div>
          <div className="flex-1 w-full lg:w-auto max-w-md mx-auto lg:mx-0">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 text-black focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 text-white font-medium  transition text-sm bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm"
              >
                Subscribe
              </button>
            </div>
          
          </div>
         
        </div>
         <div className=" border-b border-gray-700"></div>
        
      </div>

      <div className="px-6 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
        <div className="space-y-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative flex justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden p-2 w-[240px] sm:w-[280px] lg:w-[360px] ">
                <img
                  src="./../src/assets/Images/logo2.png"
                  alt="Luxury Hair"
                  className="rounded-xl w-full object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm ">
            At Unique Euphoria, we offer premium-quality hair extensions and
            wigs that enhance your beauty and confidence. Elevate your style
            with our luxurious, natural-looking products designed to bring out
            your best, inside and out.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 text-lg">
            <a href="#" className="">
              <FaInstagram />
            </a>
            <a href="#" className="">
              <FaFacebookF />
            </a>
            <a href="#" className="">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Awards</a>
            </li>
            <li>
              <a href="#">Video Review</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Volume</a>
            </li>
            <li>
              <a href="#">Length</a>
            </li>
            <li>
              <a href="#">Coverage</a>
            </li>
            <li>
              <a href="#">Style</a>
            </li>
            <li>
              <a href="#">Color</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+91 00000 00000</li>
            <li>
              Budhia Jadavwadi,
              <br />
              Opp Digital Equipment Ltd,
              <br />
              Mumbai
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs text-center">
        <p className="mb-2 md:mb-0">
          © 2025 Unique Euphoria All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#">Terms and Condition</a>
          <a href="#">Return Policy</a>
        </div>
      </div>
    </footer>
  );
}
