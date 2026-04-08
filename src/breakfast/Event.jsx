const Event = () => {
  const btnClass = "inline-block border border-white/40 rounded-lg px-10 py-3 uppercase tracking-widest text-xs font-semibold text-white hover:bg-[#86D276] hover:border-[#86D276] hover:text-black transition-all duration-300";

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Adjusted gap and items positioning for a cleaner 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide uppercase">
              Weekend <br className="hidden md:block" />
              <span className="text-[#86D276]">Unlimited</span>{" "}
              <br className="hidden md:block" />
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

          {/* RIGHT SIDE: Single Image (Fully Responsive) */}
          <div className="w-full max-w-xl mx-auto lg:max-w-none">
            <div className="aspect-5/5 overflow-hidden rounded-xl border border-white/10">
              <img
                // Using /fulls.png from your original 'first' image slot
                src="/contact.jpeg" 
                alt="Amma Kitchen Food Preparation"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 hover:brightness-100"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Event;