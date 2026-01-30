import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ResturantoAbout() {
  const containerRef = useRef(null);
  const brandGreen = "#86D276";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation logic for 4 cards
  // Card 1: Static, then scales down/fades
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Card 2: Slides up between 20-45% scroll
  const y2 = useTransform(scrollYProgress, [0.15, 0.4], ["100vh", "0vh"]);
  const clip2 = useTransform(scrollYProgress, [0.2, 0.45], ["inset(10% 10% 10% 10% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);

  // Card 3: Slides up between 45-70% scroll
  const y3 = useTransform(scrollYProgress, [0.4, 0.65], ["100vh", "0vh"]);
  const clip3 = useTransform(scrollYProgress, [0.45, 0.7], ["inset(10% 10% 10% 10% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);

  // Card 4: Slides up between 70-95% scroll
  const y4 = useTransform(scrollYProgress, [0.65, 0.9], ["100vh", "0vh"]);
  const clip4 = useTransform(scrollYProgress, [0.7, 0.95], ["inset(10% 10% 10% 10% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);

  const cardData = [
    {
      title: "About",
      span: "Us",
      desc: "At Amma Kitchen we love South Indian Cuisine. We love to treat our customers with an exquisite dining experience, with speedy preparation and cooking, so you do not have to sit and wait for your food. Create an order easily and quickly via our website or make it even easier for yourself by downloading our free app via the App Store or Google Play. Then at the tap of a button you can send an order to us immediately.",
      img: "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg",
      reverse: false
    },
    {
      title: "Who",
      span: "We Are",
      desc: "Amma Kitchen Coventry is a passionate South Indian restaurant dedicated to bringing authentic, home-style flavours to the heart of Coventry.",
      img: "https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg",
      reverse: true
    },
    {
      title: "What",
      span: "We Do",
      desc: "We prepare a wide variety of freshly cooked South Indian dishes and make ordering easy through our restaurant, website, and mobile app for quick pickup and enjoyment.",
      img: "/gallery05.jpeg",
      reverse: false
    },
    {
      title: "Restaurant",
      span: "Location",
      desc: "When you have decided what you want to eat, you will find us at the address 477 Beake Ave, Coventry CV6 2HT, United Kingdom. We always look forward to seeing you in the restaurant when you pick up your food! Should you one day be in doubt about our address or our opening hours, remember that all information can be found in our app. The app can be downloaded from the App Store and Google Play, and ensures that you are never more than a few clicks away from our delicious food. We hope to see you soon!",
      img: "/gallery15.jpeg",
      reverse: true
    }
  ];

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black font-sans">
      
      {/* CARD 1 */}
      <div className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          style={{ scale: scale1, opacity: opacity1, borderColor: brandGreen }}
          className="relative w-full max-w-[1400px] h-[75vh] sm:h-[80vh] bg-black rounded-[30px] md:rounded-[50px] border-2 overflow-hidden flex flex-col lg:flex-row"
        >
          <CardContent data={cardData[0]} brandGreen={brandGreen} />
        </motion.div>
      </div>

      {/* CARD 2 */}
      <motion.div style={{ y: y2, zIndex: 20 }} className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          style={{ clipPath: clip2, borderColor: brandGreen }}
          className="relative w-full max-w-[1400px] h-[75vh] sm:h-[80vh] bg-zinc-900 rounded-[30px] md:rounded-[50px] border-2 overflow-hidden flex flex-col lg:flex-row-reverse"
        >
          <CardContent data={cardData[1]} brandGreen={brandGreen} />
        </motion.div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div style={{ y: y3, zIndex: 30 }} className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          style={{ clipPath: clip3, borderColor: brandGreen }}
          className="relative w-full max-w-[1400px] h-[75vh] sm:h-[80vh] bg-black rounded-[30px] md:rounded-[50px] border-2 overflow-hidden flex flex-col lg:flex-row"
        >
          <CardContent data={cardData[2]} brandGreen={brandGreen} />
        </motion.div>
      </motion.div>

      {/* CARD 4 */}
      <motion.div style={{ y: y4, zIndex: 40 }} className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          style={{ clipPath: clip4, borderColor: brandGreen }}
          className="relative w-full max-w-[1400px] h-[75vh] sm:h-[80vh] bg-zinc-900 rounded-[30px] md:rounded-[50px] border-2 overflow-hidden flex flex-col lg:flex-row-reverse"
        >
          <CardContent data={cardData[3]} brandGreen={brandGreen} />
        </motion.div>
      </motion.div>

      <div className="h-screen" />
    </div>
  );
}

// Sub-component to keep the main code clean
function CardContent({ data, brandGreen }) {
  return (
    <>
      <div className="w-full h-1/2 lg:h-full lg:w-1/2">
        <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-1/2 lg:h-full lg:w-1/2 p-6 md:p-12 lg:p-20 text-white flex flex-col justify-center">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold uppercase mb-4 leading-[0.9]">
          {data.title} <br /> <span style={{ color: brandGreen }}>{data.span}</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base lg:text-xl max-w-md">
          {data.desc}
        </p>
      </div>
    </>
  );
}