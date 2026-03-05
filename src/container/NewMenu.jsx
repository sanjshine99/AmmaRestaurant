import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import menuData from "../constants/menuData";

const ACCENT = "#86D276";

export default function NewMenu() {
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].category);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth < 640 ? 180 : 300;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const getCurrentItems = () => {
    return (
      menuData.find((cat) => cat.category === selectedCategory)?.items || []
    );
  };

  return (
    <div className="bg-black text-white min-h-screen" id="menu">
      <div className="flex flex-col lg:flex-row w-full relative">

        {/* LEFT IMAGE SECTION (UNCHANGED) */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen h-[35vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/break.jpg"
            className="w-full h-full object-cover"
            alt="Restaurant Menu"
          />
          <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
            <h2 className="text-4xl text-white">Our Menu</h2>
            <p className="mt-2 italic" style={{ color: ACCENT }}>
              Authentic South Indian & Sri Lankan Cuisine
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-[60%] px-6 md:px-16 py-12 lg:py-20">

          {/* HEADER */}
          <header className="mb-12">
            <h1 className="text-6xl mb-4 text-white tracking-tight">
              Food Menu
            </h1>
            <p className="text-gray-500 max-w-md">
              Explore our carefully crafted dishes made with traditional spices.
            </p>
          </header>

          {/* CATEGORY NAV */}
          <div className="sticky top-0 bg-black/95 backdrop-blur-md z-20 border-b border-white/5 mb-12 -mx-4 px-4 py-4">
            <div className="relative flex items-center">

              {/* LEFT ARROW (NOW WORKS ON MOBILE) */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 z-50 p-2 text-black rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center -translate-x-1/2"
                style={{ backgroundColor: ACCENT }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* SCROLLABLE CATEGORIES */}
              <div
                ref={scrollRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth flex flex-nowrap gap-3 w-full touch-pan-x px-8"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {menuData.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setSelectedCategory(cat.category)}
                    className={`whitespace-nowrap px-6 lg:px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all shrink-0 ${
                      selectedCategory === cat.category
                        ? "text-black border-transparent"
                        : "border-white/10 text-white hover:border-white/40"
                    }`}
                    style={
                      selectedCategory === cat.category
                        ? { backgroundColor: ACCENT }
                        : {}
                    }
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* RIGHT ARROW (NOW WORKS ON MOBILE) */}
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 z-50 p-2 text-black rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center translate-x-1/2"
                style={{ backgroundColor: ACCENT }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MENU ITEMS */}
          <main className="relative z-10">
            <div className="space-y-4">

              <h2
                className="text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4"
                style={{ color: ACCENT }}
              >
                <span className="h-px bg-white/10 flex-1" />
                {selectedCategory}
                <span className="h-px bg-white/10 flex-1" />
              </h2>

              {getCurrentItems().map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between gap-3 sm:gap-6 py-6 border-b border-white/5 group hover:bg-white/20 transition-all px-4 -mx-4 rounded-xl"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-gray-100 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    {item.tags && (
                      <p className="text-xs text-gray-400 leading-relaxed italic">
                        {item.tags}
                      </p>
                    )}
                  </div>

                  <div className="text-right flex flex-col items-end shrink-0">
                    <span
                      className="text-base sm:text-lg font-light whitespace-nowrap"
                      style={{ color: ACCENT }}
                    >
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
