import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ResturantoAbout() {
  const containerRef = useRef(null);
  const brandGreen = "#86D276";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoother easing - ease function as 4th parameter
  const scale1 = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.75], ["100vh", "0vh"]);
  const clipPath2 = useTransform(
    scrollYProgress,
    [0.4, 0.8],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );
  const contentScale = useTransform(scrollYProgress, [0.4, 0.8], [1.15, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black font-sans">
      
      {/* SECTION 1: WHO WE ARE */}
      <div className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-6 lg:p-10">
        <motion.div
          style={{ 
            scale: scale1, 
            opacity: opacity1,
            borderColor: brandGreen 
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-[1400px] h-[85vh] md:h-[80vh] bg-black rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-2 overflow-hidden flex flex-col lg:flex-row items-center"
        >
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379bb18b6ca4aa4d4722_about1.jpg"
              alt="Who we are"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-6 md:p-10 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase mb-4 md:mb-6 leading-[0.9]">
              Who <br /> <span style={{ color: brandGreen }}>We Are</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-md">
              Amma Kitchen Coventry is a passionate South Indian restaurant dedicated to bringing authentic, home-style flavours to the heart of Coventry.
            </p>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: WHAT WE DO */}
      <motion.div
        style={{ y: y2 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-6 lg:p-10 z-20"
      >
        <motion.div
          style={{ 
            clipPath: clipPath2,
            borderColor: brandGreen 
          }}
          className="relative w-full max-w-[1400px] h-[85vh] md:h-[80vh] bg-black rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border-2 overflow-hidden"
        >
          <motion.div 
            style={{ scale: contentScale }}
            className="w-full h-full flex flex-col lg:flex-row-reverse items-center"
          >
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6410dee2412dc599c7e61e0b/6423379ff8be2448d15a6448_about2.jpg"
                alt="What we do"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-6 md:p-10 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase mb-4 md:mb-6 leading-[0.9]">
                What <br /> <span style={{ color: brandGreen }}>We Do</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-md">
                We prepare a wide variety of freshly cooked South Indian dishes and make ordering easy through our restaurant, website, and mobile app for quick pickup and enjoyment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="h-screen" />
    </div>
  );
}