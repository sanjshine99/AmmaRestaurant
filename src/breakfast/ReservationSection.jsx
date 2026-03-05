import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const initialFormData = {
    guests: "1 Person",
    date: "",
    time: "",
    cocktails: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    const message =
      `Hello Alino, I would like to reserve a table:%0A%0A` +
      `*Guests:* ${formData.guests}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Preferred Breakfast:* ${formData.cocktails}`;

    window.open(`https://wa.me/442475090098?text=${message}`, "_blank");

    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="breakfast-contact"
      className="relative w-full scroll-m-20 py-20 px-4 md:px-8 lg:px-16 bg-black text-white "
    >
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

          <form
            onSubmit={handleWhatsAppBooking}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Guests */}
            <div className="relative border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full pb-2 px-2 outline-none text-sm cursor-pointer appearance-none text-white"
              >
                {[
                  "1 Person",
                  "2 Persons",
                  "3 Persons",
                  "4 Persons",
                  "5 Persons",
                  "6 Persons",
                  "More",
                ].map((opt) => (
                  <option key={opt} value={opt} className=" text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="relative border border-white/20 rounded-md focus-within:ring-2 focus-within:ring-[#86D276]">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 px-2 pt-1">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className=" w-full pb-2 px-2 outline-none text-sm cursor-pointer text-white
                scheme-dark"
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
                value={formData.time}
                onChange={handleChange}
                className=" w-full pb-2 px-2 outline-none text-sm cursor-pointer text-white
            scheme-dark"
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
                className="w-full p-3 text-sm text-white outline-none"
                placeholder="e.g. Idly"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="border border-white px-12 py-3 uppercase text-xs font-bold tracking-[0.2em]
                hover:bg-[#86D276] hover:text-black rounded-xl transition-all duration-300
                w-full lg:w-auto flex items-center justify-center gap-3"
              >
                <FaWhatsapp size={20} />
                Reservation
              </button>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 mt-8 pt-8 border-t border-white/10 text-center space-y-2 text-xs text-gray-300">
              <div className="flex justify-center gap-2">
                <MapPin size={12} className="text-[#86D276]" />
                477 Beake Ave, Coventry CV6 2HT, United Kingdom
              </div>
              <div className="flex justify-center gap-2">
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
