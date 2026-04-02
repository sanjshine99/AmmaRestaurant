import React, { useState } from "react";
import { siteConfig } from "../../SiteConfig";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    adults: 0,
    children: 0,
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increment = (field) =>
    setFormData((prev) => ({ ...prev, [field]: prev[field] + 1 }));

  const decrement = (field) =>
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(field === "adults" ? 1 : 0, prev[field] - 1),
    }));

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phoneNumber = siteConfig.whatsappNumber;
    const message = encodeURIComponent(
      `*Table Reservation Request*\n\n` +
      `Name: ${formData.name}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Adults: ${formData.adults}\n` +
      ` Children: ${formData.children}\n` +
      ` Notes:  ${formData.message || "None"}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    onClose();
  };

  return (
    <>
      {/* Fix date/time picker text color */}
      <style>{`
        input[type="date"],
        input[type="time"] {
          color-scheme: light;
        }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1) brightness(0.8) sepia(1) hue-rotate(80deg) saturate(4);
          cursor: pointer;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-[#0c0c0c] border border-[#86D276]/40 w-full max-w-md rounded-2xl relative shadow-[0_0_40px_rgba(134,210,118,0.15)] overflow-hidden">

          {/* Top accent bar */}
          <div className="h-1 w-full bg-linear-to-r from-transparent via-[#86D276] to-transparent" />

          <div className="p-8">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-[#86D276]/30 text-[#86D276] hover:bg-[#86D276]/10 hover:scale-110 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-7">
              <p className="text-[#86D276]/60 text-xs tracking-[0.3em] uppercase mb-1">Amma Kitchen</p>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Reserve A <span className="text-[#86D276]">Table</span>
              </h2>
            </div>

            <form onSubmit={handleWhatsAppSend} className="flex flex-col gap-4">

              {/* Name */}
              <div className="relative">
                <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-1.5 ml-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#86D276] text-white placeholder-white/25 p-3 rounded-lg outline-none transition-all duration-200 text-sm"
                />
              </div>

              {/* Date & Time */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-1.5 ml-1">Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#86D276] text-white p-3 rounded-lg outline-none transition-all duration-200 text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-1.5 ml-1">Time *</label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#86D276] text-white p-3 rounded-lg outline-none transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Adults & Children counters */}
              <div className="flex gap-3">
                {/* Adults */}
                <div className="flex-1">
                  <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-1.5 ml-1">Adults *</label>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                    <button
                      type="button"
                      onClick={() => decrement("adults")}
                      className="w-7 h-7 rounded-full border border-[#86D276]/40 text-[#86D276] flex items-center justify-center hover:bg-[#86D276]/10 transition text-lg leading-none"
                    >
                      −
                    </button>
                    <span className="text-white font-semibold text-base w-6 text-center">{formData.adults}</span>
                    <button
                      type="button"
                      onClick={() => increment("adults")}
                      className="w-7 h-7 rounded-full border border-[#86D276]/40 text-[#86D276] flex items-center justify-center hover:bg-[#86D276]/10 transition text-lg leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex-1">
                  <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-1.5 ml-1">Children *</label>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                    <button
                      type="button"
                      onClick={() => decrement("children")}
                      className="w-7 h-7 rounded-full border border-[#86D276]/40 text-[#86D276] flex items-center justify-center hover:bg-[#86D276]/10 transition text-lg leading-none"
                    >
                      −
                    </button>
                    <span className="text-white font-semibold text-base w-6 text-center">{formData.children}</span>
                    <button
                      type="button"
                      onClick={() => increment("children")}
                      className="w-7 h-7 rounded-full border border-[#86D276]/40 text-[#86D276] flex items-center justify-center hover:bg-[#86D276]/10 transition text-lg leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Guest summary pill */}
              <div className="flex items-center gap-2 bg-[#86D276]/5 border border-[#86D276]/15 rounded-lg px-4 py-2.5">
                <svg className="w-4 h-4 text-[#86D276]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="text-white/60 text-xs">
                  Total guests:{" "}
                  <span className="text-[#86D276] font-semibold">
                    {formData.adults + formData.children}
                  </span>
                  <span className="text-white/40 ml-1">
                    ({formData.adults} adult{formData.adults !== 1 ? "s" : ""}
                    {formData.children > 0 ? `, ${formData.children} child${formData.children !== 1 ? "ren" : ""}` : ""})
                  </span>
                </span>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-1.5 ml-1">Special Notes</label>
                <textarea
                  name="message"
                  placeholder="Allergies, high chair needed, anniversary..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#86D276] text-white placeholder-white/25 p-3 rounded-lg outline-none transition-all duration-200 text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-[#86D276] hover:bg-[#9de08d] active:scale-95 text-black font-bold py-4 mt-1 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(134,210,118,0.3)] text-sm tracking-wider uppercase"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L.057 23.428a.5.5 0 00.609.61l5.652-1.479A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.764-.523-5.33-1.435l-.383-.228-3.953 1.034 1.054-3.859-.249-.396A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;