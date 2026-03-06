import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const row1 = [
  { name: "Adithya Jakka", stars: 5, text: "I had a delightful experience at Amma Kitchen Coventry. The ambience is pleasant and comfortable..." },
  { name: "Ahil Raja Thanu Maheswari", stars: 5, text: "South South Indian dishes served here are authentic and tasty. Must try restaurant..." },
  { name: "Sunil K", stars: 5, text: "Went for dinner this evening. Service was very good by Sai & the food was amazing..." },
  { name: "Karthick Ram", stars: 5, text: "🎉 Birthday celebration at Amma Kitchen – such a wonderful atmosphere and truly delicious food!" },
  { name: "Akhil chowdary", stars: 5, text: "i came to Coventry for my job purpose. i have just tried chicken dosa and mutton biryani simply awesome." },
];

const row2 = [
  { name: "PranithPrithvi Durairaj", stars: 5, text: "Fastest serving !!! Yummy and delicious food!! Very tasty! Highly recommended!! We enjoyed our family dinner out" },
  { name: "Deep Sangar", stars: 5, text: "If you’re looking for proper, authentic Indian food, this place absolutely delivers. The flavours are beautiful and genuinely taste like they’ve come straight from India — rich, fresh, and full of depth in every bite..." },
  { name: "Rahul Kathir", stars: 5, text: "We had a lovely Valentine’s Day dinner at Amma's Kitchen. The food was absolutely delicious, full of authentic flavours, and beautifully presented." },
  { name: "Chi", stars: 5, text: "Amma Kitchen in Coventry feels like a warm embrace of authentic South Indian cooking. The name says it all—it's homely, comforting food made with care." },
  { name: "Maruboina Jayanth", stars: 5, text: "I visited Amma's Kitchen yesterday for dinner, and honestly, it felt like having a home-cooked meal...." },
];

export default function ReviewsSection() {
  const containerRef = useRef(null);
  const brandGreen = "#86D276";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 overflow-hidden "
    >
      {/* ===== BACKGROUND IMAGE LAYER ===== */}
      <div 
        className="absolute inset-0 z-0  pointer-events-none"
        style={{ 
          backgroundImage: "url('/bg.png')", // Public folder path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content wrapper with relative z-index to stay above BG */}
      <div className="relative z-10">
        
        {/* ===== MOVING TITLE ===== */}
        <div className="overflow-hidden whitespace-nowrap mb-16 sm:mb-24">
          <div className="flex w-max animate-[marquee_25s_linear_infinite] text-[48px] sm:text-[80px] font-bold  incline-text tracking-tighter">
            {[...Array(10)].map((_, i) => (
              <span 
                key={i} 
                className="mr-12"
                style={{ color: i % 2 === 0 ? "#2a2a2a" : brandGreen }}
              >
                REVIEWS •
              </span>
            ))}
          </div>
        </div>

        {/* ===== ROW 1 ===== */}
        <motion.div
          style={{ x: x1 }}
          className="flex items-center gap-6 sm:gap-8 px-4 py-4 select-none"
        >
          {[...row1, ...row1, ...row1].map((r, i) => (
            <ReviewPill key={`row1-${i}`} {...r} brandGreen={brandGreen} />
          ))}
        </motion.div>

        {/* ===== ROW 2 ===== */}
        <motion.div
          style={{ x: x2 }}
          className="flex items-center gap-6 sm:gap-8 px-4 py-4 mt-4 sm:mt-6 select-none"
        >
          {[...row2, ...row2, ...row2].map((r, i) => (
            <ReviewPill key={`row2-${i}`} {...r} brandGreen={brandGreen} />
          ))}
        </motion.div>
      </div>

      <style>{`
        :root {
        .incline-text { transform: skewX(-10deg); display: inline-block; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function ReviewPill({ name, stars, text, brandGreen }) {
  return (
    <div className="shrink-0 w-[280px] sm:w-[420px] min-h-[150px] rounded-3xl sm:rounded-[40px] bg-linear-to-br from-neutral-900/80 to-black/90 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-10 border border-white/10 shadow-2xl flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h4 
          className="text-lg sm:text-2xl font-bold  incline-text tracking-wide"
          style={{ color: brandGreen }}
        >
          {name}
        </h4>
        <div className="flex gap-0.5 text-xs sm:text-lg">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < stars ? "text-yellow-500" : "text-neutral-700"}>★</span>
          ))}
        </div>
      </div>
      <p className="text-neutral-400 text-xs sm:text-base leading-relaxed incline-text italic opacity-90 line-clamp-4">
        "{text}"
      </p>
    </div>
  );
}