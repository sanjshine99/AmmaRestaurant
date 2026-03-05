
import React, { useState, useRef } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

const dishData = [
  {
    title: "Tiffin & Dosa",
    subtitle:
      "Classic South Indian tiffin items and crispy veg dosas, perfect for any time of day.",
    icon: "🫓",
    tag: "Vegetarian",
  },
  {
    title: "Starters & Soups",
    subtitle:
      "A variety of veg and non-veg starters, warming soups, and flavourful appetizers.",
    icon: "🍲",
    tag: "Veg & Non-Veg",
  },
  {
    title: "Tandoori & Wild Delicacy",
    subtitle:
      "Smoky, perfectly spiced tandoori dishes and special wild delicacies prepared with traditional techniques.",
    icon: "🔥",
    tag: "Chef's Special",
  },
  {
    title: "Gravy & Curries",
    subtitle:
      "Rich, aromatic gravies with both vegetarian and non-vegetarian options.",
 
    tag: "House Favourite",
  },
  {
    title: "Fresh Juices & Beverages",
    subtitle:
      "Refreshing, freshly made fruit juices and cooling drinks—perfect to pair with your meal.",
    tag: "Refreshing",
  },
];

const LeafIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 22C2 22 10 20 16 12C22 4 22 2 22 2C22 2 20 2 12 8C4 14 2 22 2 22Z"
      fill="#86D276"
    />
  </svg>
);

export default function SignatureDishes() {
  const brandGreen = "#86D276";
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const startX = useRef(null);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(dishData.length - 1, a + 1));

  // Touch/swipe support
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    startX.current = null;
  };

  return (
    <section
      id="menu"
      className="relative bg-[#0c0c0c] bg-cover bg-center bg-fixed px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ── Left: Heading + Slider ── */}
        <div className="flex-1 w-full text-white">
          <SubHeading title="Signature Dishes" />

          <h1
            className="text-4xl sm:text-5xl md:text-[56px] leading-tight mt-4 font-bold"
            style={{ color: brandGreen }}
          >
            Our Delicious Menu
          </h1>

          {/* Slider */}
          <div
            className="mt-10 relative"
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Cards track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {dishData.map((dish, i) => (
                  <div
                    key={i}
                    className="min-w-full pr-0"
                    aria-hidden={i !== active}
                  >
                    <div
                      className="rounded-2xl p-6 sm:p-8 border flex flex-col gap-4"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(134,210,118,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                        borderColor: "rgba(134,210,118,0.18)",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
                      }}
                    >
                      {/* Tag */}
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start"
                        style={{
                          background: "rgba(134,210,118,0.12)",
                          color: brandGreen,
                          border: "1px solid rgba(134,210,118,0.25)",
                        }}
                      >
                        {dish.tag}
                      </span>

                      {/* Icon + Title */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl"><LeafIcon /></span>
                        <h2
                          className="text-2xl sm:text-3xl font-bold"
                          style={{ color: brandGreen }}
                        >
                          {dish.title}
                        </h2>
                      </div>

                      {/* Divider */}
                      <div
                        className="h-px w-16 rounded"
                        style={{ background: "rgba(134,210,118,0.35)" }}
                      />

                      {/* Subtitle */}
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {dish.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between mt-6 gap-4">
              {/* Dot indicators */}
              <div className="flex gap-2">
                {dishData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="rounded-full transition-all duration-300 focus:outline-none"
                    style={{
                      width: i === active ? "28px" : "10px",
                      height: "10px",
                      background:
                        i === active
                          ? brandGreen
                          : "rgba(134,210,118,0.28)",
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  disabled={active === 0}
                  aria-label="Previous dish"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none disabled:opacity-30"
                  style={{
                    background: "rgba(134,210,118,0.12)",
                    border: "1px solid rgba(134,210,118,0.3)",
                    color: brandGreen,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={active === dishData.length - 1}
                  aria-label="Next dish"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none disabled:opacity-30"
                  style={{
                    background: "rgba(134,210,118,0.12)",
                    border: "1px solid rgba(134,210,118,0.3)",
                    color: brandGreen,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Step counter */}
            <p className="text-gray-500 text-sm mt-4  tracking-widest">
              <span style={{ color: brandGreen }}>{String(active + 1).padStart(2, "0")}</span>
              {" / "}
              {String(dishData.length).padStart(2, "0")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}