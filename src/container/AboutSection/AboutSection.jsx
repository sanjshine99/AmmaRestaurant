import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const mobileImages = ["/m1.png", "/m2.png"];

const useMobileBg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return { isMobile, currentIndex };
};

const ScrollSection = ({ title, text, imageUrl, isReverse, index, highlightWords = [], desktopBg }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { isMobile, currentIndex } = useMobileBg();
  const bgImage = isMobile ? mobileImages[currentIndex] : desktopBg;

  const xTransform = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    isReverse ? ["-20%", "0%"] : ["20%", "0%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className={`sticky top-0 h-screen w-full scroll-m-20 flex items-center justify-center overflow-hidden border-[3px] ${index > 0 ? "rounded-t-[50px] lg:rounded-t-[100px]" : ""}`}
      style={{ zIndex: index + 1, borderColor: "#86D276" }}
      id="about"
    >
      {/* BG IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          key={bgImage}
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row w-full max-w-[1600px] h-full items-center gap-6 lg:gap-12 px-6 py-10 lg:px-12 lg:py-0 ${isReverse ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Image Section */}
        <motion.div
          style={{ x: xTransform, opacity: opacity }}
          className="relative w-full lg:flex-1 h-[35%] md:h-[45%] lg:h-[80%] flex items-center justify-center"
        >
          <div
            className="w-full h-full rounded-[30px] lg:rounded-[80px] overflow-hidden lg:border-[3px]"
            style={{ borderColor: "#86D276" }}
          >
            <img src={imageUrl} alt={title} className="w-full h-full object-top" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:flex-1 flex flex-col justify-center text-center lg:text-left"
          style={{ opacity: opacity }}
        >
          <h2 className="font-bold uppercase leading-[1.1] lg:leading-[0.9] mb-4 lg:mb-8 tracking-tight text-[28px] md:text-[45px] lg:text-[80px]">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block lg:block mr-2 lg:mr-0"
                style={{ color: highlightWords.includes(word) ? "#86D276" : "#ffffff" }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="text-white/80 text-sm md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
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
      imageUrl: "about.png",
      isReverse: false,
      highlightWords: ["Us"],
      desktopBg: "/bgnew.png",
    },
    {
      title: "Who We Are",
      text: "Amma Kitchen Coventry is a passionate South Indian restaurant dedicated to bringing authentic, home-style flavours to the heart of Coventry..",
      imageUrl: "who.png",
      isReverse: true,
      highlightWords: ["Are"],
      desktopBg: "/bgnew.png",
    },
    {
      title: "What We Do",
      text: "We prepare a wide variety of freshly cooked South Indian dishes and make ordering easy through our restaurant, website, and mobile app for quick pickup and enjoyment.",
      imageUrl: "we.png",
      isReverse: false,
      highlightWords: ["Do"],
      desktopBg: "/bgnew.png",
    },
    {
      title: "Restaurant Location",
      text: "When you have decided what you want to eat, you will find us at the address 477 Beake Ave, Coventry CV6 2HT, United Kingdom. We always look forward to seeing you in the restaurant when you pick up your food! Should you one day be in doubt about our address or our opening hours, remember that all information can be found in our app. The app can be downloaded from the App Store and Google Play, and ensures that you are never more than a few clicks away from our delicious food. We hope to see you soon!.",
      imageUrl: "location.png",
      isReverse: true,
      highlightWords: ["Location"],
      desktopBg: "/bgnew.png",
    },
    {
      title: "Start Your Weekend",
      text: "Feast your senses at Amma Kitchen with our unlimited South Indian breakfast—where every plate feels like home. From soft, fluffy idlis and golden, crispy dosas to steaming hot sambar, fresh chutneys, and comforting classics made with authentic spices, each bite is packed with warmth and flavor. Cooked fresh every morning and served with love.",
      imageUrl: "break.jpg",
      isReverse: false,
      highlightWords: ["Weekend"],
      desktopBg: "/bgnew.png",
    },
  ];

  return (
    <div className="bg-black">
      {sections.map((section, index) => (
        <ScrollSection key={index} {...section} index={index} />
      ))}
      <div className="h-screen bg-black"></div>
    </div>
  );
}