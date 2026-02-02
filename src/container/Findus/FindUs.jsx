import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

export default function FindUs() {
  const brandGreen = "#86D276";

  return (
    <section id="contact" className="relative scroll-m-10 bg-black bg-[url('/bg.png')] bg-cover bg-fixed py-16 px-6 md:px-12 lg:px-24 font-base">
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="flex-1 w-full text-white text-center xl:text-left">
            <div className="flex flex-col items-center xl:items-start">
              <SubHeading title="Contact" />
              <h1
                className="text-4xl md:text-5xl lg:text-7xl font-base mt-4 mb-8"
                style={{ color: brandGreen }}
              >
                Find Us
              </h1>
            </div>

            <div className="space-y-8">
              <div>
                <p
                  className="text-xl font-bold uppercase tracking-widest mb-2 text-[#86D276]"
                >
                  Location
                </p>

                <a
                  href="https://maps.app.goo.gl/JuhckJ5LSQ6MjvkTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AAAAAA] text-lg leading-relaxed  transition"
                >
                  <span className="hover:text-[#86D276]">477 Beake Ave, Coventry CV6 2HT, United Kingdom</span>
                </a>
              </div>

              <div>
                <p className="text-xl font-bold uppercase tracking-widest mb-4" style={{ color: brandGreen }}>
                  Opening Hours
                </p>
                {/* Center text on tablet/mobile, left align on desktop */}
                <div className="inline-block text-left space-y-2 border-l-2 pl-6" style={{ borderColor: brandGreen }}>
                  <p className="text-base md:text-lg">Mon - Fri: 12:00 PM - 10:30 PM</p>
                  <p className="text-base md:text-lg font-bold">Sat - Sun: 10:00 AM - 10:30 PM</p>
                </div>
              </div>

              <p className="text-xl font-bold text-[#86D276]" >
                Tel:&nbsp;
                <a
                  href="tel:+442475090098"

                >
                  <span className="hover:text-white">  +44 24 7509 0098 </span>

                </a>
              </p>
            </div>

            <div className="mt-16 flex justify-center xl:justify-start">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//Amma+Kitchen+Coventry,+477+Beake+Ave,+Coventry+CV6+2HT,+United+Kingdom/@52.4430456,-1.5223031,17z/data=!4m17!1m7!3m6!1s0x48774d33816547ed:0xdaa28c5b87618176!2sAmma+Kitchen+Coventry!8m2!3d52.4430456!4d-1.5223031!16s%2Fg%2F11vpfylnsd!4m8!1m0!1m5!1m1!1s0x48774d33816547ed:0xdaa28c5b87618176!2m2!1d-1.5223031!2d52.4430456!3e9"
                className="w-full sm:w-auto text-center hover:brightness-110 px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
                style={{ backgroundColor: brandGreen, color: "#000" }}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center items-center w-full mt-12 xl:mt-0">
            <div className="relative p-4 border" style={{ borderColor: brandGreen }}>
              <img
                src={images.findus}
                alt="Restaurant"
                loading="lazy"
                className="w-full max-w-[320px] md:max-w-[450px] xl:max-w-[550px] h-auto object-cover shadow-2xl"
              />
              {/* Decorative Frame for Tablet/Desktop */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 -z-10" style={{ borderColor: brandGreen }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}