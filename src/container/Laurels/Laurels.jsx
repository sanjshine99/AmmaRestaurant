import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const DishCard = ({ title, subtitle }) => (
  <div className="flex flex-start items-start min-w-[230px] md:min-w-[250px] lg:min-w-[300px] m-4 font-base">
    {/* Using a custom leaf icon to match the brand style */}
    <div className="mt-2 mr-4">
       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22C2 22 10 20 16 12C22 4 22 2 22 2C22 2 20 2 12 8C4 14 2 22 2 22Z" fill="#86D276"/>
       </svg>
    </div>
    <div className="flex flex-col">
      <p className="text-[#86D276] font-bold text-xl ">{title}</p>
      <p className="text-gray-400 text-sm md:text-base mt-1">{subtitle}</p>
    </div>
  </div>
);

export default function SignatureDishes() {
  const brandGreen = "#86D276";

  const dishData = [
    {
      title: "Tiffin & Dosa",
      subtitle: "Classic South South Indian tiffin items and crispy veg dosas, perfect for any time of day.",
    },
    {
      title: "Starters & Soups",
      subtitle: "A variety of veg and non-veg starters, warming soups, and flavourful appetizers.",
    },
    {
      title: "Tandoori & Wild Delicacy",
      subtitle: "Smoky, perfectly spiced tandoori dishes and special wild delicacies prepared with traditional techniques.",
    },
    {
      title: "Gravy & Curries",
      subtitle: "Rich, aromatic gravies with both vegetarian and non-vegetarian options.",
    },
    {
      title: "Fresh Juices & Beverages",
      subtitle: "Refreshing, freshly made fruit juices and cooling drinks—perfect to pair with your meal or enjoy on their own.",
    },
  ];

  return (
    <section
      id="menu"
      className="relative bg-[#0c0c0c] bg-cover bg-center bg-fixed px-6 py-20"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        
        {/* Left Side: Text and Dish Cards */}
        <div className="flex-1 flex flex-col items-start text-white lg:pr-8">
          <SubHeading title="Signature Dishes" />
          <h1 className={`text-[64px] md:text-[48px]  mt-4`} style={{ color: brandGreen }}>
            Our Delicious Menu
          </h1>

          <div className="flex flex-wrap mt-12">
            {dishData.map((dish, index) => (
              <DishCard key={index} title={dish.title} subtitle={dish.subtitle} />
            ))}
          </div>
        </div>

        {/* Right Side: Image with Overlay 'G' */}
        <div className="flex-1 flex justify-center mt-16 lg:mt-0 relative">
          <div className="relative max-w-md">
            <img
              src="/Paneer Dosa.png" // Replace with your dish image path
              alt="signature dishes"
               loading="lazy"
              className="w-full h-auto object-cover border-[#86D276]/20"
              
            />
         
          </div>
        </div>
      </div>
    </section>
  );
}