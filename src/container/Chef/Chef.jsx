import React, { useEffect, useState } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const brandGreen = "#86D276";

const chefSlides = [
  {
    sub: "Chef's Word",
    title: "What We Believe In",
    text1: "Food has the power to bring people together.",
    text2: "We believe great food comes from dedication, tradition, and attention to detail. Every meal is prepared with love, balancing time-honoured techniques with consistent excellence.",
  },
  {
    sub: "Our Philosophy",
    title: "Cooking with Passion",
    text1: "Cooking is an art, perfected through passion and care.",
    text2: "At Amma Kitchen Coventry, we are committed to using fresh ingredients and authentic recipes to deliver rich flavours in every dish.",
  },
  {
    sub: "Our Promise",
    title: "Quality & Taste",
    text1: "Good food is the foundation of genuine happiness.",
    text2: "From first bite to last, quality and taste are never compromised. We bring the heart of our kitchen to your table.",
  },
];

export default function Chef() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % chefSlides.length);
        setAnimate(true);
      }, 200);
    }, 5000); // Slightly longer interval for readability
    return () => clearInterval(interval);
  }, []);

  const slide = chefSlides[index];

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 md:py-24 min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/bg.png')` }}
    >
      {/* LEFT IMAGE - Chef/Kitchen Visual */}
      <div className="flex-1 flex justify-center lg:justify-start mb-10 lg:mb-0 w-full">
        <img
          src={images.chef}
          alt="Amma Kitchen"
           loading="lazy"
          className="w-full sm:w-4/5 md:w-3/4 lg:w-[90%] max-w-[550px] object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={`flex-1 flex flex-col items-start text-white transition-all duration-700 w-full
        £{animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <SubHeading title={slide.sub} />

        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mt-4 leading-tight"
          style={{ color: brandGreen }}
        >
          {slide.title}
        </h1>

        <div className="flex flex-col mt-8 md:mt-10 w-full">
          <div className="flex items-start mb-6">
            <img 
              src={images.quote} 
              alt="quote" 
               loading="lazy"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-4" 
            />
            <p className="italic text-lg sm:text-xl md:text-2xl leading-relaxed">
              {slide.text1}
            </p>
          </div>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-[550px]">
            {slide.text2}
          </p>
        </div>

        {/* SIGNATURE SECTION */}
        <div className="flex flex-col mt-10 md:mt-14 w-full">
          <p 
            className="text-3xl sm:text-4xl md:text-5xl font-serif"
            style={{ 
              color: brandGreen,
              fontFamily: "'Cormorant Upright', serif", // Or any cursive/script font you have
            }}
          >
            Amma Kitchen
          </p>
          <div 
            className="h-px w-24 mt-2" 
            style={{ backgroundColor: brandGreen }}
          />
        </div>
      </div>
    </section>
  );
}