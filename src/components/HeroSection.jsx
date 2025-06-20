import React from 'react';
import { FaHeadset, FaShoppingCart } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gray-50">

      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-lg text-gray-600 font-medium">Sell on 1mdm.com</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight my-4">
            Reach millions of B2B buyers globally
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-6">
            <a href="/pricing.php">
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
                Start selling
              </button>
            </a>
            <a href="https://wa.me/+919820045154" target="_blank">
              <button className="border border-red-500 text-red-600 px-6 py-2 rounded-full hover:bg-red-50">
                Chat with consultant
              </button>
            </a>
          </div>
        </div>

        {/* Right Stats Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">26,000,000</h3>
            <p className="text-gray-600">active buyers globally</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">400,000</h3>
            <p className="text-gray-600">product inquiries daily</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">200</h3>
            <p className="text-gray-600">countries and regions represented</p>
          </div>
        </div>
      </div>

      <div className="text-center px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          1mdm.com is a leading ecommerce platform that helps SMEs go global
        </h2>
      </div>

      
    </section>
  );
};

export default HeroSection;
