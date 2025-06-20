import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-2 px-4 sm:px-6 lg:px-20 border-b border-gray-200 text-sm text-gray-600 text-[15px]">
        <span className="mb-1 sm:mb-0 text-center sm:text-left">
          World's Largest Medical Equipment Market Place
        </span>
        <div className="text-black">
          <a
            href="https://1mdm.com/index.php?route=account/account"
            className="mr-2 hover:text-red-600 transition-colors duration-200"
          >
            My account
          </a>
          |
          <a
            href="/contact.php"
            className="ml-2 hover:text-red-600 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-20">
        <a href="/">
          <img src={logo} alt="1MDM Logo" className="h-10" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="/index.php" className="hover:text-red-600 transition-colors duration-200">About Us</a>
          <a href="/our-story.php" className="hover:text-red-600 transition-colors duration-200">Our Story</a>
          <a href="/seller.php" className="hover:text-red-600 transition-colors duration-200">Sell on 1MDM</a>
          <a href="/pricing.php" className="hover:text-red-600 transition-colors duration-200">Pricing</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 space-y-2 text-gray-700 pb-4">
          <a href="/index.php" className="hover:text-red-600">About Us</a>
          <a href="/our-story.php" className="hover:text-red-600">Our Story</a>
          <a href="/seller.php" className="hover:text-red-600">Sell on 1MDM</a>
          <a href="/pricing.php" className="hover:text-red-600">Pricing</a>
        </div>
      )}
    </section>
  );
};

export default Navigation;
