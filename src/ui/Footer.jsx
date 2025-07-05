import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaPhone, FaEnvelope, FaHome, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050065] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Y.F Enterprises</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Y.F Enterprises provides reliable and eco-friendly UPS & electrical products to ensure safe power solutions across India.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="bg-blue-800 p-3 rounded-md"><FaFacebookF /></a>
            <a href="#" className="bg-blue-800 p-3 rounded-md"><FaTwitter /></a>
            <a href="#" className="bg-blue-800 p-3 rounded-md"><FaDribbble /></a>
            <a href="#" className="bg-blue-800 p-3 rounded-md"><FaBehance /></a>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-start gap-4 mb-4">
              <img src={`https://source.unsplash.com/50x50/?worker,industry&sig=${i}`} alt="post" className="w-14 h-14 object-cover rounded" />
              <div className="text-sm">
                <p className="text-green-400 font-semibold mb-1">24th October 2021</p>
                <p className="font-bold leading-snug">We can build or hill ground or building.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe our Newsletter to get Our Latest updates & news</p>
          <div className="flex items-center bg-white rounded overflow-hidden">
            <input type="email" placeholder="Enter Email Address" className="text-black px-4 py-2 w-full outline-none" />
            <button className="bg-blue-600 p-3 text-white"><FaPaperPlane /></button>
          </div>
          <p className="text-xs text-gray-400 mt-3">*** We never spam</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="flex items-start gap-3 mb-4">
            <FaPhone className="text-xl text-blue-400 mt-1" />
            <div>
              <p className="text-sm text-gray-300">Phone Number</p>
              <p className="font-bold">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <FaEnvelope className="text-xl text-blue-400 mt-1" />
            <div>
              <p className="text-sm text-gray-300">Email Address</p>
              <p className="font-bold">yfenterprises@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaHome className="text-xl text-blue-400 mt-1" />
            <div>
              <p className="text-sm text-gray-300">Office Address</p>
              <p className="font-bold">15/C, Yang Tower, Delhi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 border-t border-white/20 pt-6 text-sm text-gray-300">
        © 2024 Y.F Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
