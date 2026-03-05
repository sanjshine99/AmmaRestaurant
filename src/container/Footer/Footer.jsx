import React from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
// If you are using react-router-dom, uncomment the line below:
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-black text-white "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/assets/bg.png')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/85" />

      {/* Content */}
      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Contact */}
          <div>
            <h3 className="text-2xl  mb-4">Contact Us</h3>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/JuhckJ5LSQ6MjvkTA"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm opacity-90 hover:opacity-100 hover:underline transition"
            >
              477 Beake Ave,<br />
              Coventry CV6 2HT,<br />
              United Kingdom
            </a>

            {/* Phone */}
            <a
              href="tel:+442475090098"
              className="block mt-2 text-sm opacity-90 hover:opacity-100 hover:underline transition"
            >
              +44 24 7509 0098
            </a>
          </div>

          {/* Logo + Quote */}
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Amma Kitchen Logo"
              loading="lazy"
              width={210}
              height={80}
              className="mb-4"
            />

            <p className="text-sm italic max-w-xs opacity-90">
              “The best way to find yourself is to lose yourself in the service of others.”
            </p>

            <img
              src="/leafe.png"
              alt=""
              width={60}
              height={60}
              loading="lazy"
              className="my-4"
            />

            <div className="flex gap-5 text-xl">
              <a
                href="https://web.facebook.com/ammakitchen.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FiFacebook />
              </a>
              <a
                href="https://www.instagram.com/amma_kitchen_coventry/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCoW-kEyS6wXD8y0NfeRHDJA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl  mb-4">Opening Hours</h3>
            <p className="text-sm font-semibold opacity-90">Mon – Fri</p>
            <p className="mb-3 text-sm opacity-90">
              12:00 PM – 10:30 PM
            </p>
            <p className="text-sm font-semibold opacity-90">Sat – Sun</p>
            <p className="text-sm opacity-90">
              10:00 AM – 10:30 PM
            </p>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="mt-16 border-t border-white/20 pt-6 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Amma Kitchen Coventry. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="/terms" className="hover:text-yellow-400 transition underline underline-offset-4">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/privacy-policy" className="hover:text-yellow-400 transition underline underline-offset-4">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}