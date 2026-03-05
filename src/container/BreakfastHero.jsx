import React from "react";
import { Link } from "react-router-dom";

export default function BreakfastHero() {
  return (
    <section className="w-full">
      {/* Top Content */}
      <div className="bg-black text-center px-6 py-20 md:py-28 ">
        <h1 className="text-3xl md:text-5xl  font-bold text-[#86D276] mb-4">
          Start Your Day Right
        </h1>

        <p className="text-sm md:text-lg text-white mb-8 max-w-2xl mx-auto">
          Feast Your Senses with Our Unlimited Breakfast
        </p>

        <Link to="/breakfast" className="bg-[#86D276] hover:brightness-110 text-black cursor-pointer px-8 py-3 rounded-md font-medium transition duration-300">
          See More
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full h-[220px] sm:h-[300px] md:h-[420px] overflow-hidden">
        <img
          src="/break.jpg" // replace with your image path
          alt="Breakfast Buffet"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
