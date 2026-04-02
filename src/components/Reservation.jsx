import React, { useState } from "react";
import { siteConfig } from "../../SiteConfig";

const BookingSection = () => {
    // 1. Define the initial state so we can reuse it for resetting
    const initialFormState = {
        name: "",
        date: "",
        time: "",
        adults: 1,
        children: 0,
        message: "",
    };

    const [formData, setFormData] = useState(initialFormState);

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
            `Children: ${formData.children}\n` +
            `Notes: ${formData.message || "None"}`
        );

        // Open WhatsApp in a new tab
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

        // 2. Reset the form data after sending
        setFormData(initialFormState);
    };

    return (
        <section id="book-a-table" className="py-20 bg-[#080808] relative overflow-hidden">
            {/* Visual Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#86D276] to-transparent opacity-30" />

            <style>{`
                input[type="date"], input[type="time"] { color-scheme: dark; }
                input[type="date"]::-webkit-calendar-picker-indicator,
                input[type="time"]::-webkit-calendar-picker-indicator {
                  filter: invert(48%) sepia(79%) saturate(400%) hue-rotate(65deg) brightness(118%) contrast(119%);
                  cursor: pointer;
                }
            `}</style>

            <div className="max-w-6xl mx-auto px-4 relative mt-20 z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Content */}
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 rounded-full border border-[#86D276]/30 bg-[#86D276]/5">
                            <p className="text-[#86D276] text-xs tracking-[0.3em] uppercase">Reservations</p>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Book Your <span className="text-[#86D276]">Experience</span> At Amma Kitchen
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md">
                            Join us for an unforgettable culinary journey. Secure your table in advance and let us prepare for your arrival.
                        </p>

                        <div className="pt-8 space-y-4">
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="w-10 h-10 rounded-full bg-[#86D276]/10 flex items-center justify-center text-[#86D276]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a
                                    href={`tel:${siteConfig.phoneNumber}`}
                                    className="hover:text-[#86D276] transition-colors duration-200"
                                >
                                    <span>Direct Line: {siteConfig.phoneNumber}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="bg-[#0c0c0c] border border-[#86D276]/20 p-6 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <form onSubmit={handleWhatsAppSend} className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-2 ml-1">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 focus:border-[#86D276]/50 text-white p-4 rounded-xl outline-none transition-all"
                                />
                            </div>

                            {/* Date & Time */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-2 ml-1">Date *</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 focus:border-[#86D276]/50 text-white p-4 rounded-xl outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-2 ml-1">Time *</label>
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 focus:border-[#86D276]/50 text-white p-4 rounded-xl outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-2 ml-1">Adults *</label>
                                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                                        <button type="button" onClick={() => decrement("adults")} className="text-[#86D276] hover:scale-125 transition text-xl">−</button>
                                        <span className="text-white font-bold">{formData.adults}</span>
                                        <button type="button" onClick={() => increment("adults")} className="text-[#86D276] hover:scale-125 transition text-xl">+</button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-2 ml-1">Children *</label>
                                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                                        <button type="button" onClick={() => decrement("children")} className="text-[#86D276] hover:scale-125 transition text-xl">−</button>
                                        <span className="text-white font-bold">{formData.children}</span>
                                        <button type="button" onClick={() => increment("children")} className="text-[#86D276] hover:scale-125 transition text-xl">+</button>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[#86D276]/70 text-[10px] tracking-widest uppercase mb-2 ml-1">Special Notes</label>
                                <textarea
                                    name="message"
                                    placeholder="Any special requests?"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 focus:border-[#86D276]/50 text-white p-4 rounded-xl outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#86D276] hover:bg-[#9de08d] text-black font-extrabold py-5 rounded-2xl transition-all shadow-[0_10px_30px_rgba(134,210,118,0.2)] uppercase tracking-widest flex items-center justify-center gap-3"
                            >
                                Confirm via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;