
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { siteConfig } from "../../../SiteConfig";

export default function FindUs() {
  const brandGreen = "#86D276";

  const cardStyle = {
    border: "1px solid rgba(134,210,118,0.3)",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: "6px",
    padding: "20px 24px",
  };

  return (
    <section
      id="contact"
      className="relative scroll-m-10 bg-black bg-[url('/bg.png')] bg-cover bg-fixed py-16 px-6 md:px-12 lg:px-24 "
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="flex-1 w-full text-white text-center xl:text-left">
            <div className="flex flex-col items-center xl:items-start mb-10">
              <SubHeading title="Contact" />
              <h1
                className="text-4xl md:text-5xl lg:text-7xl  mt-4"
              >
                Find Us
              </h1>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto xl:mx-0">

              {/* Location Card */}
              <div style={cardStyle} className="text-left">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: brandGreen }}
                >
                  Location
                </p>
                <a
                  href={siteConfig.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm leading-relaxed hover:text-[#86D276] transition-colors duration-200"
                >
                  {siteConfig.address}
                </a>
              </div>

              {/* Telephone Card */}
              <div style={cardStyle} className="text-left">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: brandGreen }}
                >
                  Telephone
                </p>
                <a
                  href={`tel:${siteConfig.phoneNumber}`}
                  className="text-gray-300 text-sm hover:text-[#86D276] transition-colors duration-200"
                >
                  {siteConfig.displayPhone}
                </a>
              </div>

              {/* Opening Hours Card — full width */}
              <div style={cardStyle} className="text-left sm:col-span-2">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: brandGreen }}
                >
                  Opening Hours
                </p>
                <div
                  className="space-y-1 border-l-2 pl-4"
                  style={{ borderColor: brandGreen }}
                >
                  <p className="text-gray-300 text-sm">Mon – Fri: 12:00 PM – 10:30 PM</p>
                  <p className="text-white text-sm font-bold">Sat – Sun: 10:00 AM – 10:30 PM</p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="mt-10 flex justify-center xl:justify-start">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//Amma+Kitchen+Coventry,+477+Beake+Ave,+Coventry+CV6+2HT,+United+Kingdom/@52.4430456,-1.5223031,17z"
                className="w-full sm:w-auto text-center hover:brightness-110 px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
                style={{ backgroundColor: brandGreen, color: "#000" }}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center items-center w-full mt-12 xl:mt-0">
            <div
              className="relative p-4 border"
              style={{ borderColor: brandGreen }}
            >
              <img
                src={images.findus}
                alt="Restaurant"
                loading="lazy"
                className="w-full max-w-[320px] md:max-w-[450px] xl:max-w-[550px] h-auto object-cover shadow-2xl"
              />
              {/* Decorative corner */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 -z-10"
                style={{ borderColor: brandGreen }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}