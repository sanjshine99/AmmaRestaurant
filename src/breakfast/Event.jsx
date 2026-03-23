import { useState, useEffect } from "react";

const Event = () => {
  const btnClass = "inline-block border border-white/40 rounded-lg px-10 py-3 uppercase tracking-widest text-xs font-semibold text-white hover:bg-[#86D276] hover:border-[#86D276] hover:text-black transition-all duration-300";

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide uppercase">
              Weekend & Bank Holiday <br className="hidden lg:block" />
              <span className="text-[#86D276]">Unlimited</span>{" "}
              <br className="hidden lg:block" />
              Breakfast
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              At Amma Kitchen we love South Indian Cuisine. We love to treat our
              customers with an exquisite dining experience, with speedy
              preparation and cooking, so you do not have to sit and wait for
              your food. Create an order easily and quickly via our website or
              make it even easier by downloading our free app via the App Store
              or Google Play.
            </p>

            <div className="pt-4">
              <a href="breakfast#breakfast-contact" className={btnClass}>
                Discover Breakfast
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">

            <div className="aspect-4/5 overflow-hidden rounded-xl border border-white/10">
              <img
                src="/fulls.png"
                alt="Food preparation"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
              />
            </div>

            <div className="hidden md:block aspect-4/5 overflow-hidden translate-y-12 lg:translate-y-20 rounded-xl border border-white/10">
              <img
                src="/full.png"
                alt="Breakfast dishes"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;