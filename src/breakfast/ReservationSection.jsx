import React, { useState, useEffect } from "react";
import { MapPin, Phone, Plus, Minus, Users } from "lucide-react";

const siteConfig = {
  whatsappNumber: "1234567890",
  address: "123 Amma Kitchen St, Food City",
  displayPhone: "+1 234 567 890"
};

export default function Contact() {
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

  const initialFormData = {
    fullName: "", // Added fullName to state
    adults: 0,
    children: 0,
    date: "",
    time: "",
    cocktails: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const increment = (field) =>
    setFormData((prev) => ({ ...prev, [field]: prev[field] + 1 }));

  const decrement = (field) =>
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(field === "adults" ? 1 : 0, prev[field] - 1),
    }));

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const message =
      `Hello Amma Kitchen, I would like to reserve a table:%0A%0A` +
      `Name: ${formData.fullName}%0A` + // Added fullName to WhatsApp message
      `Adults: ${formData.adults}%0A` +
      `Children: ${formData.children}%0A` +
      `Total Guests: ${formData.adults + formData.children}%0A` +
      `Date: ${formData.date}%0A` +
      `Time: ${formData.time}%0A` +
      `Preferred Breakfast: ${formData.cocktails || "Not specified"}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, "_blank");
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const CounterField = ({ label, field, min = 0 }) => (
    <div className="border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276] px-2 pt-1 pb-2">
      <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
        {label}
      </label>
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => decrement(field)}
          disabled={formData[field] <= min}
          className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#86D276] hover:text-[#86D276] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shrink-0"
        >
          <Minus size={12} />
        </button>
        <span className="text-white font-semibold text-base w-6 text-center">
          {formData[field]}
        </span>
        <button
          type="button"
          onClick={() => increment(field)}
          className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#86D276] hover:text-[#86D276] transition-all duration-200 shrink-0"
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="breakfast-contact"
      className="relative w-full scroll-m-20 py-20 px-4 md:px-8 lg:px-16 text-white overflow-hidden"
    >
      <style>{`
        input[type="date"], input[type="time"] { color-scheme: light; }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1) brightness(0.8) sepia(1) hue-rotate(80deg) saturate(4);
          cursor: pointer;
        }
        select option { background-color: #111; color: white; }
      `}</style>

      {/* BACKGROUND IMAGE */}
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

      {/* CONTENT — single column centered */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">

        {/* FORM */}
        <div className="w-full rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/5 border border-white/10">

          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Secure Your Table 
            </h3>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FULL NAME FIELD */}
            <div className="relative border border-white/20 rounded-md md:col-span-2 focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pb-2 px-2 outline-none text-sm text-white bg-transparent"
                placeholder="e.g. John Doe"
              />
            </div>

            <CounterField label="Adults *" field="adults" min={1} />
            <CounterField label="Children *" field="children" min={0} />

            <div className="md:col-span-2 flex items-center gap-2 bg-[#86D276]/5 border border-[#86D276]/20 rounded-md px-4 py-3">
              <Users size={14} className="text-[#86D276] shrink-0" />
              <span className="text-xs text-gray-300">
                Total guests :{" "}
                <span className="text-[#86D276] font-semibold">
                  {formData.adults + formData.children}
                </span>
                <span className="text-gray-500 ml-1">
                  ({formData.adults} adult{formData.adults !== 1 ? "s" : ""}
                  {formData.children > 0
                    ? `, ${formData.children} child${formData.children !== 1 ? "ren" : ""}`
                    : ""})
                </span>
              </span>
            </div>

            <div className="relative border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Select Date *
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full pb-2 px-2 outline-none text-sm cursor-pointer text-white bg-transparent"
              />
            </div>

            <div className="relative border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Select Time *
              </label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full pb-2 px-2 outline-none text-sm cursor-pointer text-white bg-transparent"
              />
            </div>

            <div className="relative border border-white/20 rounded-md md:col-span-2 focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Preferred Breakfast *
              </label>
              <input
                type="text"
                name="cocktails"
                value={formData.cocktails}
                onChange={handleChange}
                className="w-full pb-2 px-2 outline-none text-sm text-white bg-transparent"
                placeholder="e.g. Idly, Dosa, Pongal..."
              />
            </div>

            <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="border border-white px-12 py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#86D276] hover:text-black hover:border-[#86D276] rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Reservation
          </button>
        </div>

            <div className="md:col-span-2 mt-8 pt-8 border-t border-white/10 text-center space-y-2 text-xs text-gray-300">
              <div className="flex justify-center gap-2 items-center">
                <MapPin size={12} className="text-[#86D276]" />
                {siteConfig.address}
              </div>
              <div className="flex justify-center gap-2 items-center">
                <Phone size={12} className="text-[#86D276]" />
                {siteConfig.displayPhone}
              </div>
            </div>
          </form>

          <p className="text-xs text-center mt-5 text-gray-400">
            By submitting this form, you agree to us processing your details to
            respond to your enquiry. Your information is handled securely and in
            line with our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}