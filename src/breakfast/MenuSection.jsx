import { useState, useEffect } from "react";

const PricingCard = () => {
  return (
    <div className="bg-[#86D276]/10 border-[#86D276] rounded-2xl shadow-xl p-6 border-2 w-full text-white">
      <div className="bg-[#86D276] text-black text-center py-3 px-6 rounded-full font-bold text-sm uppercase tracking-wide mb-6 shadow-lg">
        Book before 12 hrs for
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
            <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
              For Adults @
            </p>
            <p className="text-[#86D276] text-4xl font-black">£8.99</p>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
            <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
              For Kids @
            </p>
            <p className="text-[#86D276] text-4xl font-black">£5.99</p>
          </div>
        </div>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-transparent px-4 text-gray-400 text-sm font-semibold">OR</span>
          </div>
        </div>

        <div className="bg-[#86D276] text-black text-center py-2 px-6 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
          Without booking
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
            <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
              For Adults @
            </p>
            <p className="text-[#86D276] text-4xl font-black">£11.99</p>
          </div>
          <div className="bg-black border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
            <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
              For Kids @
            </p>
            <p className="text-[#86D276] text-4xl font-black">£8.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuSection = () => {
  const mobileImages = ["/m1.png", "/m2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const bgImage = isMobile ? mobileImages[currentIndex] : "/bgnew.png";

  return (
    <section
      id="menu"
      className="relative text-white scroll-m-20 min-h-screen py-12 px-6 overflow-hidden"
    >
      {/* BG IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          key={bgImage}
          src={bgImage}
          alt="Background"
          loading="lazy"
          className="w-full h-full object-cover opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#86D276] uppercase tracking-tight mb-4">
            Start Your Day Right to "Unlimited Breakfast on Weekend"
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-300 italic mb-2">
            Feast Your Senses with Our Unlimited Breakfast to
            "Idly | Dosa | Poori | Pongal | Vadai | Upma | Masala Tea | Kessari"
          </h3>
          <p className="text-lg font-semibold text-gray-400 uppercase tracking-widest">
            (Only for dine in)
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md">
            <PricingCard />
          </div>
        </div>

        <a href="breakfast#breakfast-contact" className="flex justify-center">
          <button className="bg-[#86D276] hover:bg-[#6eb35f] text-black text-2xl cursor-pointer font-black py-5 px-12 rounded-full shadow-xl transition-transform hover:scale-110 active:scale-95 uppercase tracking-widest">
            Book Now
          </button>
        </a>

      </div>
    </section>
  );
};

export default MenuSection;