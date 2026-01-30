import React from "react";

const PricingCard = () => {
  return (
    <div className="bg-[#86D276]/10 border-[#86D276] rounded-2xl shadow-xl p-6 border-2 w-full text-white">
      {/* Header Badge */}
      <div className="bg-[#86D276] text-black text-center py-3 px-6 rounded-full font-bold text-sm uppercase tracking-wide mb-6 shadow-lg">
        Book before 12 hrs for
      </div>

      {/* Pricing Grid */}
      <div className="space-y-4 mb-6">

        {/* With Booking */}
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

        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-gray-400 text-sm font-semibold">
              OR
            </span>
          </div>
        </div>

        {/* Without Booking Badge */}
        <div className="bg-[#86D276] text-black text-center py-2 px-6 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
          Without booking
        </div>

        {/* Without Booking */}
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
  return (
    <section
      id="menu"
      className="bg-black text-white scroll-m-20 min-h-screen py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Headings */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#86D276] uppercase tracking-tight mb-4">
            Start Your Day Right to “Unlimited Breakfast on Weekend & Bank Holidays”
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-gray-300 italic mb-2">
            Feast Your Senses with Our Unlimited Breakfast to
            “Idly | Dosa | Poori | Pongal | Vadai | Upma | Masala Tea | Kessari”
          </h3>

          <p className="text-lg font-semibold text-gray-400 uppercase tracking-widest">
            (Only for dine in)
          </p>
        </div>

        {/* Image + Pricing */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <img
              src="/gallery05.jpeg"
              alt="Breakfast Spread"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center">
            <PricingCard />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="bg-[#86D276] hover:bg-[#6eb35f] text-black text-2xl font-black py-5 px-12 rounded-full shadow-xl transition-transform hover:scale-110 active:scale-95 uppercase tracking-widest">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
