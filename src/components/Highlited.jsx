import React from "react";

const Highlited = () => {
  return (
    <>
      {/* Top Red Banner */}
      <div className="bg-red-600 text-white text-center py-14 px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug max-w-4xl mx-auto">
          Largest number of products & categories of{" "}
          <br className="hidden sm:block" />
          medical devices on a single platform – 1mdm.com
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium">
          Connect with buyers worldwide for your product and{" "}
          <br className="hidden sm:block" />
          start selling now.
        </p>
      </div>

      {/* Section Heading */}
      <div className="text-center py-10 px-4 sm:px-6 lg:px-20">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-800 leading-snug">
          Grow your business with a suite of tools built for you
        </h3>
      </div>
    </>
  );
};

export default Highlited;
