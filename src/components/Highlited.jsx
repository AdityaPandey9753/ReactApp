import React from "react";

const Highlited = () => {
  return (
    <>
      <div className="bg-red-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
          Largest number of products & categories of{" "}
          <br className="hidden md:block" />
          medical devices on a single place – 1mdm.com
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Connect with buyers worldwide for your product &
          <br className="hidden md:block" />
          start selling now.
        </p>
      </div>

      <div className="text-center py-10 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-red-800">
          Grow your business with a suite of tools built for you
        </h3>
      </div>
    </>
  );
};

export default Highlited;
