import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import BookingModal from "../../container/BookingModal";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 text-white border-b border-gray-900 font-base">
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
            onClick={() => setIsModalOpen(true)}
            className="border border-[#86D276] px-6 py-2 text-[#86D276] font-semibold hover:bg-[#86D276] hover:text-black transition duration-300"
          >
            Book Table
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

          <button
            onClick={() => {
              setToggleMenu(false);
              setIsModalOpen(true);
            }}
            className="border border-[#86D276] px-8 py-3 text-[#86D276] font-bold hover:bg-[#86D276] hover:text-black transition"
          >
            Book Table
          </button>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
