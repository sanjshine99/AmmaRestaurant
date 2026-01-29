import React from "react";

const MapSection = () => {
  const brandGreen = "#86D276";

  return (
    <section className="bg-black px-6 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
            style={{ color: brandGreen }}
          >
            Visit Us
          </h2>
          <p className="text-[#AAAAAA] text-lg md:text-xl">
           477 Beake Ave, Coventry CV6 2HT, United Kingdom
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border-2 border-gray-800 shadow-2xl">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2200.8267974948976!2d-1.5223030999999998!3d52.4430456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774d33816547ed%3A0xdaa28c5b87618176!2sAmma%20Kitchen%20Coventry!5e1!3m2!1sen!2slk!4v1769715122532!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amma Kitchen Restaurant Location"
          />
        </div>

        {/* Action Buttons */}
        
      </div>
    </section>
  );
};

export default MapSection;
