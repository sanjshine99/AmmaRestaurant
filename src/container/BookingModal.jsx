import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const phoneNumber = "442475090098"; 
    const messageText = `*Table Booking Request*%0A%0A*Name:* £{formData.name}%0A*Date:* £{formData.date}%0A*Time:* £{formData.time}%0A*Guests:* £{formData.guests}%0A*Message:* £{formData.message || "None"}`;

    const whatsappUrl = `https://wa.me/£{phoneNumber}?text=£{messageText}`;
    window.open(whatsappUrl, "_blank");
    
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 font-base">
      <div className="bg-[#0c0c0c] border border-[#86D276] w-full max-w-md p-8 rounded-xl relative shadow-[0_0_20px_rgba(134,210,118,0.2)]">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[#86D276] hover:scale-110 transition"
        >
          <IoMdClose size={28} />
        </button>

        <h2 className="text-3xl font-bold text-[#86D276] mb-6 text-center tracking-tight">Reserve A Table</h2>

        <form onSubmit={handleWhatsAppSend} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-gray-800 p-3 text-white focus:border-[#86D276] outline-none rounded transition-all"
            onChange={handleChange}
          />
          
          <div className="flex gap-2">
            <input
              type="date"
              name="date"
              required
              className="bg-transparent border border-gray-800 p-3 text-white focus:border-[#86D276] outline-none w-1/2 rounded"
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              required
              className="bg-transparent border border-gray-800 p-3 text-white focus:border-[#86D276] outline-none w-1/2 rounded"
              onChange={handleChange}
            />
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            min="1"
            required
            className="bg-transparent border border-gray-800 p-3 text-white focus:border-[#86D276] outline-none w-full rounded"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Special Notes..."
            rows="3"
            className="bg-transparent border border-gray-800 p-3 text-white focus:border-[#86D276] outline-none w-full rounded"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="bg-[#86D276] text-black font-bold py-4 mt-2 hover:bg-white transition-colors duration-300 rounded shadow-lg"
          >
            SEND VIA WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;