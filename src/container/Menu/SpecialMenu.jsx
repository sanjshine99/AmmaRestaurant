import React, { useState, useEffect, useRef } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import menuData from "../../constants/menuData";

export default function SpecialMenu({ selectedCategory }) {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const scrollContainerRef = useRef(null);

  // Update active category when selectedCategory prop changes
  useEffect(() => {
    if (selectedCategory) {
      // Match the category from menuData (case-insensitive)
      const matchedCategory = menuData.find(
        (item) => item.category.toUpperCase() === selectedCategory.toUpperCase()
      );
      
      if (matchedCategory) {
        setActiveCategory(matchedCategory.category);
      }
    }
  }, [selectedCategory]);

  // Scroll active button into view on mobile
 

  const activeData = menuData.find(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="menu"
      className="bg-[#0b0b0b] scroll-m-10 text-white px-6 py-20 font-base"
    >
      {/* HEADER */}
      <div className="text-center mb-12">
        <SubHeading title="Special Selection" />
        <h1 className="text-[56px] md:text-[40px] font-medium mt-4">
          Delicious Menu
        </h1>
      </div>

      {/* CATEGORY NAV */}
      <div className="mb-16">
        {/* Mobile: Scrollable */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6"
        >
          <div className="flex gap-6 min-w-max pb-2">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`relative text-[15px] uppercase tracking-[0.15em] pb-2 transition whitespace-nowrap ${
                  activeCategory === cat.category
                    ? "active-category text-[#cfa670] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#cfa670]"
                    : "text-white/60"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: Wrapped */}
        <div className="hidden md:flex justify-center gap-10 flex-wrap">
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`relative text-[15px] uppercase tracking-[0.15em] pb-2 transition ${
                activeCategory === cat.category
                  ? "text-[#cfa670] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#cfa670]"
                  : "text-white/60 hover:text-[#cfa670]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* MENU GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {activeData?.items.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f1d14] rounded-[18px] p-6 h-80
              flex flex-col justify-between
              shadow-[0_20px_40px_rgba(0,0,0,0.4)]
              transition-transform duration-300 hover:-translate-y-1.5"
          >
            {/* IMAGE */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[180px] w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-[18px] font-medium text-[#cfa670]">
                {item.title}
              </h3>
              <span className="text-[18px] font-semibold text-[#00ff9d] whitespace-nowrap">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}