import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import BookingModal from "../../container/BookingModal";
import { siteConfig } from "../../../SiteConfig";

export default function HeroSection() {
  const brandGreen = "#86D276";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef(null); // Ref to hold the interval ID

  // 1. Manage Script Loading and Cleanup
  useEffect(() => {
    if (!document.getElementById("glf-script")) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.async = true;
      script.defer = true;
      script.id = "glf-script";
      document.body.appendChild(script);
    }

    // Cleanup: Clear interval if component unmounts
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const openOrderMenu = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const btn = document.querySelector(".glf-button");
      if (btn) {
        btn.click();
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 200);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/amma_kitchen.mp4"
        autoPlay
        preload="metadata"
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
          className="flex flex-col sm:flex-row items-center gap-4 mt-0 w-full justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: brandGreen }}
            className="w-[200px] py-3 text-black text-sm font-bold uppercase cursor-pointer tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book A Table
          </button>

          {/* CONNECTED TO openOrderMenu */}
          <button
            onClick={openOrderMenu}
            className="w-[200px] py-3 border-2 text-sm font-bold uppercase tracking-widest rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center group"
            style={{ borderColor: brandGreen }}
          >
            <span className="text-[#86D276] group-hover:scale-105 transition-colors duration-300">
              Order Online
            </span>
          </button>
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
            Mon-Fri: {siteConfig.day} | Sat-Sun: {siteConfig.weekend}
          </p>
        </motion.div>
      </div>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* HIDDEN ORDER TRIGGER */}
      <span
        className="glf-button"
        data-glf-cuid="06a3cfd2-79fc-45d1-b7fe-207f0c298570"
        data-glf-ruid="3d8577e8-91ec-43ce-87a4-86a045d849df"
        style={{ display: "none" }}
      >
        Order
      </span>
    </section>
  );
}