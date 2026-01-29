import React, { useState } from "react";
import { images } from "../../constants";
import BookingModal from "../BookingModal";

const AboutUs = () => {
  // Brand color from your image
  const brandGreen = "#86D276";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen px-6 py-16 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* AKC Overlay - background letter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/AKC.png"
          alt="overlay"
          loading="lazy"
          className="w-[200px] sm:w-[350px] md:w-[500px] lg:w-[700px] opacity-10 sm:opacity-20"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full max-w-7xl">

        {/* About Us Section */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          <h1
            style={{ color: brandGreen }}
            className="font-serif text-[45px] sm:text-[64px] leading-[1.3] capitalize tracking-wider"
          >
            About Us
          </h1>
          <img src="/leafe.png" loading="lazy" alt="leaf" className="w-[45px] my-4 rotate-180 lg:rotate-0" />
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-7 max-w-md">
            At Amma Kitchen we love South Indian Cuisine. We love to treat our customers with an exquisite dining experience, with speedy preparation and cooking, so you do not have to sit and wait for your food. Create an order easily and quickly via our website or make it even easier for yourself by downloading our free app via the App Store or Google Play. Then at the tap of a button you can send an order to us immediately.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: brandGreen }}
            className="text-black font-serif font-bold text-base hover:text-white px-6 py-2 mt-6 border-none cursor-pointer hover:bg-white transition-colors"
          >
            Order Now
          </button>
        </div>

        {/* Knife Image (Middle) */}
        <div className="flex justify-center my-8 lg:my-0">
          <img
            src={images.knife}
            alt="knife"
            loading="lazy"
            className="h-[350px] sm:h-[500px] md:h-[700px] lg:h-[800px] object-contain"
          />
        </div>

        {/* Restaurant Location Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1
            style={{ color: brandGreen }}
            className="font-serif text-[45px] sm:text-[64px] leading-[1.3] capitalize tracking-wider"
          >
            Restaurant Location
          </h1>
          <img src="/leafe.png" loading="lazy" alt="leaf" className="w-[45px] my-4" />
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-7 max-w-md">
            When you have decided what you want to eat, you will find us at the address 477 Beake Ave, Coventry CV6 2HT, United Kingdom. We always look forward to seeing you in the restaurant when you pick up your food! Should you one day be in doubt about our address or our opening hours, remember that all information can be found in our app. The app can be downloaded from the App Store and Google Play, and ensures that you are never more than a few clicks away from our delicious food. We hope to see you soon!
          </p>
          <a
            href="#contact"
            style={{ backgroundColor: brandGreen }}
            className="text-black font-serif hover:text-white font-bold text-base px-6 py-2 mt-6 border-none cursor-pointer hover:bg-white transition-colors"
          >
            Find Us
          </a>
        </div>
      </div>
      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default AboutUs;