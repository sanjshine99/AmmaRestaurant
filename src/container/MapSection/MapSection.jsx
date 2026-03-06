
import { siteConfig } from "../../../SiteConfig";

const MapSection = () => {
  const brandGreen = "#86D276";

  return (
    <section className="bg-black px-6 lg:px-24 py-16 ">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl  mb-4"
            style={{ color: brandGreen }}
          >
            Visit Us
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            {siteConfig.address}
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border-2 border-gray-800 shadow-2xl">
          <iframe
            src={siteConfig.embededLink}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amma Kitchen Restaurant Location"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
