import React from "react";
import logo from "../assets/logo.png";
const Navigation = () => {
  return (
    <section className="mx-26">
      <div className="flex items-center justify-between py-2  px-6 border-b border-gray-200 text-sm text-gray-600 text-[15px]">
        <span>World's Largest Medical Equipment Market Place</span>
        <div className="text-black">
          <a
            href="https://1mdm.com/index.php?route=account/account"
            className="mr-2 hover:text-red-600  transition-colors duration-200"
          >
            My account
          </a>
          |
          <a
            href="/contact.php"
            className="ml-2 hover:text-red-600  transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      <nav className="flex justify-between items-center py-4 px-6 shadow-sm">
        <a>
          <img src={logo} alt="1MDM Logo" className="h-10" />
        </a>
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a
            href="/index.php"
            className="hover:text-red-600  transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="/our-story.php"
            className="hover:text-red-600  transition-colors duration-200"
          >
            Our Story
          </a>
          <a
            href="/seller.php"
            className="hover:text-red-600  transition-colors duration-200"
          >
            Sell on 1MDM
          </a>
          <a
            href="/pricing.php"
            className="hover:text-red-600  transition-colors duration-200"
          >
            Pricing
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
