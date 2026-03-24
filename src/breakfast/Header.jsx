import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link import

const RestaurantHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bgImages = [
    '/SambarIdli.jpeg',
    '/vada.jpeg',
    '/Venn Pongal.jpeg'
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3-COLUMN ANIMATED BACKGROUND */}
      <div className="absolute inset-0 flex w-full h-full z-0">
        {bgImages.map((img, index) => (
          <div key={index} className="relative flex-1 overflow-hidden border-r border-white/5 last:border-r-0">
            <motion.div
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.3
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
        ))}
      </div>

     

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 min-h-[80vh]">
        <motion.img
          src='logo.png'
          loading="lazy"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-black text-white uppercase leading-[0.8] tracking-tighter"
        />

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className=" max-w-2xl text-sm md:text-lg text-white/90 font-light leading-relaxed px-6"
        >
          We bring you a fusion of flavours crafted with passion. From fresh ingredients to expertly prepared dishes, every bite is a celebration of quality and flavour.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12"
        >
          {/* UPDATED BUTTON: Link instead of anchor */}
          <a
            href="/breakfast#breakfast-contact"
          >
            <div className="inline-block bg-transparent text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] border border-white/40 hover:bg-[#86D276] hover:text-black transition-all duration-500">
              Book a table
            </div>
          </a>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-8 text-white text-xl uppercase tracking-widest"
        >
          <X className="absolute top-6 right-6 cursor-pointer" size={32} onClick={() => setIsOpen(false)} />
          {['Story', 'Reservation', 'Gallery', 'Blogs', 'Contact Us'].map(item => (
            <button key={item} className="font-bold tracking-widest" onClick={() => setIsOpen(false)}>{item}</button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RestaurantHero;