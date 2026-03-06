import { motion } from "framer-motion";
import React, { useState } from "react";
import BookingModal from "../../container/BookingModal";
import { siteConfig } from "../../../SiteConfig";

export default function HeroSection() {
  const brandGreen = "#86D276";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/amma_kitchen.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-5 bg-black/60" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src="/logo.png"
            alt="Amma Kitchen Logo"
            loading="lazy"
            className="h-30 md:h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(134,210,118,0.4)]"
          />
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-1 mt-0 w-full justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: brandGreen }}
            className="w-[200px] py-3 text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book A Table
          </button>

          <a
            href={`tel:${siteConfig.phoneNumber}`}
            className="w-[200px] py-3 border-2 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#86D276] transition-all duration-300 flex items-center justify-center group"
            style={{ borderColor: brandGreen }}
          >
            <span className="text-[#86D276] group-hover:text-black">
              Call Us
            </span>
          </a>
        </motion.div>

        {/* INFO TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-white space-y-2"
        >
          <p>{siteConfig.address}</p>
          <p
            style={{ color: brandGreen }}
            className="font-medium tracking-[0.2em]"
          >
            Mon-Fri: 12PM-10:30PM | Sat-Sun: 10AM-10:30PM
          </p>
        </motion.div>
      </div>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
