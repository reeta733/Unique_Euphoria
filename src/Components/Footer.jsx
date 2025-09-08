import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="w-[700] border-b border-gray-700 pt-10"></div>
      <div className="border-b border-gray-700 py-10 px-6 lg:px-20 ">
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold text-white mb-2">Ready To Glow?</h2>
      <p className="text-gray-400 text-sm">
        Subscribe for info on our latest products + discounts, sales and more!
      </p>
    </div>


    <div className="border-l border-gray-700 h-16 mx-6 pr-50"></div>

    <div className="flex-1 max-w-md">
      <div className="flex bg-white rounded-full overflow-hidden shadow-sm">
        <input
          type="email"
          placeholder="Enter email"
          className="flex-1 px-4 py-2 text-black focus:outline-none text-sm"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[var(--primary)] text-white rounded-full text-sm font-medium"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

  
<div className="border-b border-gray-700 py-10 px-6 lg:px-20">
  <div className="grid grid-cols-4 gap-6 text-left">
   
    <div>
      <h3 className="text-white font-semibold mb-4">Unique Euphoria</h3>
      <p className="mb-4 text-gray-400 text-sm leading-relaxed">
        At Unique Euphoria, we offer premium-quality hair extensions and wigs
        that enhance your beauty and confidence. Elevate your style with our
        luxurious, natural-looking products designed to bring out your best,
        inside and out.
      </p>
       <div className="flex  gap-4 text-lg">
            <a href="#" className="text-gray-400 hover:text-white border p-2 rounded-full hover:bg-[#E0AC85]">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white border p-2 rounded-full hover:bg-[#E0AC85]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white border p-2 rounded-full hover:bg-[#E0AC85]">
              <FaTwitter />
            </a>
          </div>
    </div>
    

    
    <div className="">
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-0">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Video Review</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
    </div>

   
    <div>
      <h3 className="text-white font-semibold mb-4">Our Services</h3>
      <ul className="space-y-2">
        <li>Volume</li>
        <li>Length</li>
        <li>Coverage</li>
        <li>Style</li>
        <li>Color</li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
      <ul className="space-y-2">
        <li>+91 00000 00000</li>
        <li>Buddha Jadawadi,<br />Opp Digital Equipment Ltd,<br />Mumbai</li>
      </ul>
    </div>
  </div>
</div>

  
  <div className="py-4 px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center text-gray-500 text-xs">
    <p>© 2025 Unique Euphoria. All rights reserved.</p>
    <div className="flex space-x-6 mt-2 lg:mt-0">
      <a href="#" className="hover:underline ">Terms and Condition</a>
      <a href="#" className="hover:underline ">Return Policy</a>
    </div>
  </div>
</footer>

  );
}