import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Newsletter */}
      <div className="border-b border-gray-800 px-6 lg:px-20 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-display mb-2">Ready To Glow?</h2>
          <p className="text-gray-400 max-w-md">
            Subscribe for info on our latest products + discounts, sales and
            more!
          </p>
        </div>
        <form className="flex w-full md:w-auto max-w-md">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-1 px-4 py-2 rounded-l-full bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-r-full bg-brand text-white font-medium hover:bg-brand/90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Middle Content */}
      <div className="px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="space-y-4">
          <h3 className="text-lg font-display tracking-wide">
            UNIQUE EUPHORIA
          </h3>
          <p className="text-gray-400 text-sm">
            At Unique Euphoria, we offer premium-quality hair extensions and
            wigs that enhance your beauty and confidence. Elevate your style
            with our luxurious, natural-looking products designed to bring out
            your best, inside and out.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-brand">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-brand">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-brand">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Video Review</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Volume</a></li>
            <li><a href="#">Length</a></li>
            <li><a href="#">Coverage</a></li>
            <li><a href="#">Style</a></li>
            <li><a href="#">Color</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+91 00000 00000</li>
            <li>Budhia Jadavwadi,<br />Opp Digital Equipment Ltd,<br />Mumbai</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
        <p>© 2025 Unique Euphoria All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#">Terms and Condition</a>
          <a href="#">Return Policy</a>
        </div>
      </div>
    </footer>
  );
}