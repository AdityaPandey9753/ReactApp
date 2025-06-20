import { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import person3 from '../assets/person3.jpg'
import person2 from '../assets/person2.jpg'

const testimonials = [
  {
    name: "Rupesh Kanna",
    description:
      "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specialised high-quality pigmented imaging process, so he decided to create his own product line.",
    image: person3,
  },
  {
    name: "Amelia Smith",
    description:
      "Amelia turned her healthcare passion into a thriving B2B medical export business. After onboarding 1mdm.com, her outreach grew 300%.",
    image: person2,
  },
  {
    name: "David Lin",
    description:
      "David used 1mdm to connect with global labs for his custom diagnostic kits. He praises the analytics tools and seamless logistics.",
    image: person3,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
        }
      });
      setIsAnimating(false);
    }, 300); // Duration should match the fade-out transition
  };

  const { name, description, image } = testimonials[currentIndex];

  return (
    <div className="bg-[#f1f3f7] py-12 px-4 md:px-20 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">
        Success stories from 1mdm.com sellers
      </h2>

      {/* Arrows (outside the box) */}
      <button
        onClick={() => handleChange("prev")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => handleChange("next")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition"
      >
        <FaArrowRight />
      </button>

      {/* Content with transition */}
      <div
        className={`bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row transition-all duration-500 ease-in-out ${
          isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Left */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <FaQuoteLeft className="text-red-600 text-3xl mb-4" />
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            {description}
          </p>
          <span className="font-semibold text-gray-700">— {name}</span>
        </div>

        {/* Right */}
        <div className="md:w-1/2 h-96">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
