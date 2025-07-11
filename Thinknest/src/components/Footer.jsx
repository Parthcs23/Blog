import React from 'react';
import logo from '../assets/logo.png';
import { footer_data } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-[#F9F7FF] px-6 md:px-16 lg:px-24 xl:px-32 text-gray-700">
      <div className="flex flex-col md:flex-row justify-between gap-12 py-16 border-b border-gray-300/40">

        {/* Left: Logo & Description */}
        <div className="md:w-[40%]">
          <img src={logo} alt="Thinknest Logo" className="w-36 sm:w-44" />
          <p className="mt-6 leading-relaxed text-sm text-gray-600 max-w-md">
            Thinknest is your go-to platform for insightful blogs, premium content, and a beautifully crafted reading experience. Join us and elevate your daily knowledge.
          </p>
        </div>

        {/* Right: Footer Links */}
        <div className="flex flex-wrap w-full md:w-[50%] gap-8">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h3 className="font-semibold text-base text-[#6945BA] mb-4">{section.title}</h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#6945BA] transition duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="text-center text-xs md:text-sm text-gray-500 py-6">
        © 2025 <span className="text-[#6945BA] font-medium">Thinknest</span> — All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
