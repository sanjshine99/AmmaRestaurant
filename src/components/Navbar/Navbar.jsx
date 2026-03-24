import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openOrderMenu = () => {
    if (!document.getElementById("glf-script")) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.async = true;
      script.defer = true;
      script.id = "glf-script";
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      const btn = document.querySelector(".glf-button");
      if (btn) {
        btn.click();
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 text-white border-b border-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-15 w-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <li>
            <HashLink smooth to="/#" className="hover:text-[#86D276] transition">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="hover:text-[#86D276] transition">About</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#menu" className="hover:text-[#86D276] transition">Menu</HashLink>
          </li>
          <li>
            <Link to="/breakfast" className="hover:text-[#86D276] transition">BreakFast</Link>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="hover:text-[#86D276] transition">Contact</HashLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={openOrderMenu}
            className="border border-[#86D276] px-6 py-2 text-[#86D276] rounded-full font-semibold hover:bg-[#86D276] hover:text-black transition duration-300"
          >
            Order Online
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-[#86D276]">
          <GiHamburgerMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-xl z-60">
          <MdOutlineRestaurantMenu
            size={35}
            className="absolute top-6 right-6 cursor-pointer text-[#86D276]"
            onClick={() => setToggleMenu(false)}
          />

          <HashLink smooth to="#home" className="hover:text-[#86D276]" onClick={() => setToggleMenu(false)}>Home</HashLink>
          <HashLink smooth to="#about" className="hover:text-[#86D276]" onClick={() => setToggleMenu(false)}>About</HashLink>
          <HashLink smooth to="#menu" className="hover:text-[#86D276]" onClick={() => setToggleMenu(false)}>Menu</HashLink>
          <Link to="/breakfast" className="hover:text-[#86D276]" onClick={() => setToggleMenu(false)}>BreakFast</Link>
          <HashLink smooth to="#contact" className="hover:text-[#86D276]" onClick={() => setToggleMenu(false)}>Contact</HashLink>

          {/* Corrected Mobile Order Button */}
          <button
            onClick={openOrderMenu}
            className="border border-[#86D276] px-8 py-3 text-[#86D276] font-bold rounded-full hover:bg-[#86D276] hover:text-black transition"
          >
            Order Online
          </button>
        </div>
      )}

      {/* HIDDEN TRIGGER */}
      <span
        className="glf-button"
        data-glf-cuid="06a3cfd2-79fc-45d1-b7fe-207f0c298570"
        data-glf-ruid="3d8577e8-91ec-43ce-87a4-86a045d849df"
        style={{ display: "none" }}
      >
        Order
      </span>
    </nav>
  );
};

export default Navbar;