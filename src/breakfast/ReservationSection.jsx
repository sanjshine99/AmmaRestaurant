import React, { useState } from "react";
import { MapPin, Phone, Plus, Minus, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const initialFormData = {
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
      `Adults: ${formData.adults}%0A` +
      `Children: ${formData.children}%0A` +
      `Total Guests: ${formData.adults + formData.children}%0A` +
      `Date: ${formData.date}%0A` +
      `Time: ${formData.time}%0A` +
      `Preferred Breakfast: ${formData.cocktails || "Not specified"}`;

    window.open(`https://wa.me/94711009464?text=${message}`, "_blank");
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
          className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center
            text-white hover:border-[#86D276] hover:text-[#86D276] disabled:opacity-30
            disabled:cursor-not-allowed transition-all duration-200 shrink-0"
        >
          <Minus size={12} />
        </button>
        <span className="text-white font-semibold text-base w-6 text-center">
          {formData[field]}
        </span>
        <button
          type="button"
          onClick={() => increment(field)}
          className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center
            text-white hover:border-[#86D276] hover:text-[#86D276] transition-all duration-200 shrink-0"
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="breakfast-contact"
      className="relative w-full scroll-m-20 py-20 px-4 md:px-8 lg:px-16 bg-black text-white"
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-80 md:h-[500px] lg:h-[590px] rounded-3xl overflow-hidden border border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/contact.jpeg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* FORM */}
        <div className="rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/5 border border-white/10">

          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Secure Your Table
            </h3>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Adults Counter */}
            <CounterField label="Adults" field="adults" min={1} />

            {/* Children Counter */}
            <CounterField label="Children" field="children" min={0} />

            {/* Guest Summary */}
            <div className="md:col-span-2 flex items-center gap-2 bg-[#86D276]/5 border border-[#86D276]/20 rounded-md px-4 py-3">
              <Users size={14} className="text-[#86D276] shrink-0" />
              <span className="text-xs text-gray-300">
                Total guests:{" "}
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

            {/* Date */}
            <div className="relative border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Select Date
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

            {/* Time */}
            <div className="relative border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Select Time
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

            {/* Preferred Breakfast */}
            <div className="relative border border-white/20 rounded-md md:col-span-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Preferred Breakfast
              </label>
              <input
                type="text"
                name="cocktails"
                value={formData.cocktails}
                onChange={handleChange}
                className="w-full p-3 text-sm text-white outline-none bg-transparent"
                placeholder="e.g. Idly, Dosa, Pongal..."
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="border border-white px-12 py-3 uppercase text-xs font-bold tracking-[0.2em]
                  hover:bg-[#86D276] hover:text-black hover:border-[#86D276] rounded-xl transition-all duration-300
                  w-full lg:w-auto flex items-center justify-center gap-3"
              >
                <FaWhatsapp size={20} />
                Reservation
              </button>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 mt-8 pt-8 border-t border-white/10 text-center space-y-2 text-xs text-gray-300">
              <div className="flex justify-center gap-2 items-center">
                <MapPin size={12} className="text-[#86D276]" />
                477 Beake Ave, Coventry CV6 2HT, United Kingdom
              </div>
              <div className="flex justify-center gap-2 items-center">
                <Phone size={12} className="text-[#86D276]" />
                +44 24 7509 0098
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