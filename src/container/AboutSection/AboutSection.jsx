import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSection = ({ title, text, imageUrl, isReverse, index, highlightWords = [] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Desktop-only animations
  const xTransform = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    isReverse ? ["-30%", "0%"] : ["30%", "0%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className={`lg:sticky lg:top-0 h-auto lg:h-screen w-full bg-black flex items-center justify-center overflow-hidden border-[3px] ${
        index > 0 ? "lg:rounded-t-[100px]" : ""
      }`}
      style={{ 
        zIndex: index + 1,
        borderColor: '#86D276'
      }}
    >
      <div
        className={`flex flex-col lg:flex-row w-full font-base max-w-[1600px] h-full items-center gap-6 lg:gap-12 px-6 py-12 lg:px-12 lg:py-0 ${
          isReverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <motion.div
          style={{ 
            x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? xTransform : 0,
            opacity: typeof window !== 'undefined' && window.innerWidth >= 1024 ? opacity : 1
          }}
          className="relative w-full lg:flex-1 h-[400px] lg:h-[85%] flex items-center justify-center"
        >
          <div 
            className="w-full h-full rounded-[40px] lg:rounded-[80px] overflow-hidden border-[3px]"
            style={{
              borderColor: '#86D276'
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full lg:flex-1 flex flex-col justify-center text-center lg:text-left"
          style={{ 
            opacity: typeof window !== 'undefined' && window.innerWidth >= 1024 ? opacity : 1
          }}
        >
          <h2 className="font-bold uppercase leading-[0.9] mb-4 lg:mb-8 tracking-tight text-[36px] md:text-[56px] lg:text-[80px]">
            {title.split(" ").map((word, i) => (
              <span 
                key={i} 
                className="block"
                style={{ 
                  color: highlightWords.includes(word) ? '#86D276' : '#ffffff'
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 font-base leading-relaxed tracking-wide">
            {text}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default function UIClone() {
const sections = [
  {
    title: "About Us",
    text: "At Amma Kitchen we love South Indian Cuisine. We love to treat our customers with an exquisite dining experience, with speedy preparation and cooking, so you do not have to sit and wait for your food. Create an order easily and quickly via our website or make it even easier for yourself by downloading our free app via the App Store or Google Play. Then at the tap of a button you can send an order to us immediately.",
    imageUrl: "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg",
    isReverse: false,
    highlightWords: ["Us"]
  },
  {
    title: "Who We Are",
    text: "Amma Kitchen Coventry is a passionate South Indian restaurant dedicated to bringing authentic, home-style flavours to the heart of Coventry..",
    imageUrl: "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg",
    isReverse: true,
    highlightWords: ["Are"]
  },
  {
    title: "What We Do",
    text: "We prepare a wide variety of freshly cooked South Indian dishes and make ordering easy through our restaurant, website, and mobile app for quick pickup and enjoyment.",
    imageUrl: "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg",
    isReverse: false,
    highlightWords: ["Do"]
  },
  {
    title: "Restaurant Location",
    text: "When you have decided what you want to eat, you will find us at the address 477 Beake Ave, Coventry CV6 2HT, United Kingdom. We always look forward to seeing you in the restaurant when you pick up your food! Should you one day be in doubt about our address or our opening hours, remember that all information can be found in our app. The app can be downloaded from the App Store and Google Play, and ensures that you are never more than a few clicks away from our delicious food. We hope to see you soon!.",
    imageUrl: "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg",
    isReverse: true,
    highlightWords: ["Location"]
  }
];

  return (
    <div className="bg-black min-h-screen">
      {sections.map((section, index) => (
        <ScrollSection
          key={index}
          {...section}
          index={index}
        />
      ))}
      
      {/* Extra space for scrolling - desktop only */}
      <div className="hidden lg:block h-screen bg-black"></div>
    </div>
  );
}