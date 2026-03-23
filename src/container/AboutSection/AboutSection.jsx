import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSection = ({ title, text, imageUrl, isReverse, index, highlightWords = [] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    isReverse ? ["-20%", "0%"] : ["20%", "0%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className={`sticky top-0 h-screen w-full scroll-m-20 bg-black flex items-center justify-center overflow-hidden border-[3px] ${index > 0 ? "rounded-t-[50px] lg:rounded-t-[100px]" : ""
        }`}
      style={{
        zIndex: index + 1,
        borderColor: '#86D276'
      }}
      id="about"
    >
      <div
        className={`flex flex-col lg:flex-row w-full  max-w-[1600px] h-full items-center gap-6 lg:gap-12 px-6 py-10 lg:px-12 lg:py-0 ${isReverse ? "lg:flex-row-reverse" : ""
          }`}
      >
        {/* Image Section */}
        <motion.div
          style={{
            x: xTransform,
            opacity: opacity
          }}
          className="relative w-full lg:flex-1 h-[35%] md:h-[45%] lg:h-[80%] flex items-center justify-center"
        >
          <div
            className="w-full h-full rounded-[30px] lg:rounded-[80px] overflow-hidden border-2px lg:border-[3px]"
            style={{ borderColor: '#86D276' }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-top"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:flex-1 flex flex-col justify-center text-center lg:text-left"
          style={{ opacity: opacity }}
        >
          {/* Title: inline (single line) on mobile, block (stacked) on desktop */}
          <h2 className="font-bold uppercase leading-[1.1] lg:leading-[0.9] mb-4 lg:mb-8 tracking-tight text-[28px] md:text-[45px] lg:text-[80px]">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                // 'inline-block' on mobile keeps them on one line unless they wrap, 
                // 'lg:block' restores the desktop vertical stacking.
                className="inline-block lg:block mr-2 lg:mr-0"
                style={{
                  color: highlightWords.includes(word) ? '#86D276' : '#ffffff'
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="text-white/80 text-sm md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0  leading-relaxed">
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
      imageUrl: "n1.jpeg",
      isReverse: false,
      highlightWords: ["Us"]
    },
    {
      title: "Who We Are",
      text: "Amma Kitchen Coventry is a passionate South Indian restaurant dedicated to bringing authentic, home-style flavours to the heart of Coventry..",
      imageUrl: "n2.jpeg",
      isReverse: true,
      highlightWords: ["Are"]
    },
    {
      title: "What We Do",
      text: "We prepare a wide variety of freshly cooked South Indian dishes and make ordering easy through our restaurant, website, and mobile app for quick pickup and enjoyment.",
      imageUrl: "n3.jpeg",
      isReverse: false,
      highlightWords: ["Do"]
    },
    {
      title: "Restaurant Location",
      text: "When you have decided what you want to eat, you will find us at the address 477 Beake Ave, Coventry CV6 2HT, United Kingdom. We always look forward to seeing you in the restaurant when you pick up your food! Should you one day be in doubt about our address or our opening hours, remember that all information can be found in our app. The app can be downloaded from the App Store and Google Play, and ensures that you are never more than a few clicks away from our delicious food. We hope to see you soon!.",
      imageUrl: "n4.jpeg",
      isReverse: true,
      highlightWords: ["Location"]
    },
    {
      title: "Start Your Weekend",
      text: "Feast your senses at Amma Kitchen with our unlimited South Indian breakfast—where every plate feels like home. From soft, fluffy idlis and golden, crispy dosas to steaming hot sambar, fresh chutneys, and comforting classics made with authentic spices, each bite is packed with warmth and flavor. Cooked fresh every morning and served with love.",
      imageUrl: "n5.jpeg",
      isReverse: false,
      highlightWords: ["Weekend"]
    }
  ];

  return (
    <div className="bg-black">
      {sections.map((section, index) => (
        <ScrollSection
          key={index}
          {...section}
          index={index}
        />
      ))}
      <div className="h-screen bg-black"></div>
    </div>
  );
}