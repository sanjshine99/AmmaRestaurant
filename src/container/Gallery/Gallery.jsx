import React, { useRef } from "react";
import {
  BsInstagram,
  BsFacebook,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";

export default function Gallery() {
  const scrollRef = useRef(null);
  const brandGreen = "#86D276";

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { current } = scrollRef;
    current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col xl:flex-row bg-black px-6 lg:px-24 py-16 overflow-hidden font-base">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col justify-center items-start lg:pr-12 text-white">

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-2xl mb-4">
          <a
            href="https://www.instagram.com/amma_kitchen_coventry/"
            target="_blank"
            rel="noreferrer"
            style={{ color: brandGreen }}
            className="hover:scale-110 transition"
          >
            <BsInstagram />
          </a>

          <a
            href="https://web.facebook.com/ammakitchen.uk/"
            target="_blank"
            rel="noreferrer"
            style={{ color: brandGreen }}
            className="hover:scale-110 transition"
          >
            <BsFacebook />
          </a>
        </div>

        {/* TITLE */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl  mt-2"
          style={{ color: brandGreen }}
        >
          Gallery
        </h1>

        {/* LEAF IMAGE UNDER TITLE */}
        <img
          src="/leafe.png"
          alt="leaf decoration"
          className="mt-3 w-24 md:w-28 opacity-90"
        />

        {/* DESCRIPTION */}
        <p className="text-[#AAAAAA] mt-6 max-w-md leading-relaxed">
          Step into our restaurant and experience the perfect blend of vibrant
          décor and an inviting atmosphere that makes every visit feel special.
          Explore our gallery and get a taste of the incredible South Indian
          dishes we serve—full of authentic flavour, colour, and tradition.
          Come enjoy the vibe, capture the moments, and treat yourself to a
          dining experience you’ll want to return to again and again.
        </p>

        {/* CTA */}
        <a
          target="_blank"
          href="https://web.facebook.com/ammakitchen.uk/"
          className="mt-8 text-black font-bold px-8 py-3 tracking-wide hover:brightness-110 transition"
          style={{ backgroundColor: brandGreen }}
        >
          View More
        </a>
      </div>

      {/* RIGHT GALLERY */}
      <div className="flex-1 relative w-full mt-12 xl:mt-0 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-scroll scrollbar-hide
                     [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map(
            (image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[260px] h-[350px] md:w-[300px] md:h-[450px] group flex items-center justify-center border border-gray-900"
              >
                <img
                  src={image}
                  alt={`gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
                  loading="lazy"
                />

                <BsInstagram
                  className="absolute text-white text-3xl opacity-0
                             transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
                />
              </div>
            )
          )}
        </div>

        {/* ARROWS */}
        <div className="absolute bottom-4 left-0 w-full flex justify-between px-2">
          <BsArrowLeftShort
            onClick={() => scroll("left")}
            className="text-2xl md:text-4xl cursor-pointer bg-black/70 rounded-sm hover:text-white transition"
            style={{ color: brandGreen }}
          />
          <BsArrowRightShort
            onClick={() => scroll("right")}
            className="text-2xl md:text-4xl cursor-pointer bg-black/70 rounded-sm hover:text-white transition"
            style={{ color: brandGreen }}
          />
        </div>
      </div>
    </section>
  );
}
