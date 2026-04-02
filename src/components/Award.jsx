import React from "react";
import bgImage from "/bg.png";
import { Star } from "lucide-react";

const Award = () => {
    return (
        <section className="relative text-white py-16 lg:py-24 overflow-hidden">

            {/* Background Image */}
            <img
                src={bgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Dark Overlay (important for readability) */}
            <div className="absolute inset-0  z-0" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top Label */}
                <p className="text-center text-xs tracking-[0.4em] text-[#86D276] uppercase mb-4">
                    Recognition & Accolades
                </p>

                {/* Title */}
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl leading-tight mb-10">
                    Proudly{" "}
                    <span className="text-[#86D276]">Recognised</span>
                    <br />
                    for Culinary Excellence
                </h2>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    <div className="w-12 h-px bg-[#86D276]" />

                    <Star className="w-4 h-4 text-[#86D276]" />

                    <div className="w-12 h-px bg-[#86D276]" />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT - IMAGE CARD */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="bg-black/50 backdrop-blur-md border border-[#86D276]/40 rounded-xl p-4 shadow-lg max-w-lg w-full">

                            <img
                                src="/award.webp"
                                alt="Award"
                                className="w-full h-auto object-contain rounded-md"
                            />

                        </div>
                    </div>

                    {/* RIGHT - TEXT */}
                    <div className="text-center max-w-sm mx-auto lg:text-left space-y-6">

                        {/* Quote */}
                        <blockquote className="text-lg sm:text-xl italic text-[#86D276] border-l-4 border-[#86D276] pl-4">
                            "A mark of trust from food lovers across Coventry and beyond."
                        </blockquote>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">
                            We are thrilled to be recognised as a{" "}
                            <span className="text-[#86D276] font-semibold">
                                Recommended Restaurant on Restaurant Guru 2026
                            </span>{" "}
                            – an honour awarded based on genuine guest reviews and consistent
                            quality. This reflects the love and care our team puts into every
                            dish, every single day.
                        </p>

                        {/* Link */}
                        <a
                            href="https://restaurantguru.com/Amma-Kitchen-Coventry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600! hover:underline! hover:decoration-2 transition"
                        >
                            Recommended Amma Kitchen Coventry
                        </a>

                        {/* Badge */}
                        <div>
                            <span className="inline-flex items-center gap-2 mt-5 border border-[#86D276] text-[#86D276] px-6 py-2 rounded-full text-sm tracking-widest">
                                <Star className="w-4 h-4" />
                                {new Date().getFullYear()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Award;