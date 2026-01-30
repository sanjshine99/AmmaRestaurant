import React from "react";
import { motion } from "framer-motion";

const categories = [
  { title: "TIFFIN", image: "/Gemini_Generated_Image_1os7141os7141os7.jpeg" },
  { title: "SOUP", image: "/Gemini_Generated_Image_o0k353o0k353o0k3.jpeg" },
  { title: "WILD DELICACY", image: "/Gemini_Generated_Image_qhs71pqhs71pqhs7.jpeg" },
  { title: "NAAN", image: "/Gemini_Generated_Image_qbopg8qbopg8qbop.jpeg" },
  { title: "FRESH JUICE", image: "/Gemini_Generated_Image_use9d4use9d4use9.jpeg" },
];

export default function MenuCategories({ onCategoryClick }) {
  // Brand color code: #86D276
  const brandGreen = "#86D276";

  const handleCategoryClick = (categoryTitle) => {
    // Scroll to menu section
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Trigger category change after a small delay to allow scroll
    setTimeout(() => {
      if (onCategoryClick) {
        onCategoryClick(categoryTitle);
      }
    }, 300);
  };

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-8">
        
        {/* SECTION TITLE */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-base tracking-wide"
            style={{ 
              background: `linear-gradient(135deg, ${brandGreen}, #ffffff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Specialities
          </h1>
          
          {/* LEAF IMAGE UNDER HEADING */}
          <div className="flex justify-center mt-0">
            <img 
              src="/leafe.png" 
              alt="Decorative leaf" 
              className="w-25 h-16 md:w-45 md:h-20 object-contain opacity-80"
            />
          </div>
        </motion.div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 place-items-center">
          
          {categories.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              onClick={() => handleCategoryClick(item.title)}
            >
              
              {/* TITLE with HOVER EFFECT */}
              <h2 
                style={{ "--hover-color": brandGreen }}
                className="mb-8 text-[24px] font-bold tracking-[0.2em] text-white/80 font-base incline-text group-hover:scale-110 transition-all duration-500"
              >
                {item.title}
              </h2>

              {/* IMAGE CARD */}
              <div className="relative w-[210px] h-[380px] overflow-hidden rounded-[140px] border border-white/10 shadow-2xl">
                
                {/* ZOOMING IMAGE */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />
                
                {/* BRAND GREEN GLOW EFFECT */}
                <div 
                  style={{ background: `linear-gradient(to top right, ${brandGreen}33, transparent)` }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />

                {/* SHINY BORDER ON HOVER */}
                <div 
                  style={{ boxShadow: `0 0 20px ${brandGreen}80` }}
                  className="absolute inset-0 rounded-[140px] ring-1 ring-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                />
              </div>

            </motion.div>
          ))}
          
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@600;700&display=swap');
        .font-base { font-family: 'Cormorant Upright', serif; }
        .incline-text { transform: skewX(-10deg); display: inline-block; }
      `}</style>
    </section>
  );
}