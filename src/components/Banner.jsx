import { useEffect, useState } from "react";

export default function Banner() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className="relative bg-[#0a0a0a] text-white py-10 overflow-hidden "
        >
            {/* Card */}
            <div
                className="absolute inset-0 z-0  pointer-events-none"
                style={{
                    backgroundImage: "url('/bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="flex flex-col lg:flex-row min-h-140">

                {/* ── LEFT PANEL ── */}
                <div className="flex-1 flex flex-col justify-between p-8 sm:p-10 lg:p-14 relative overflow-hidden">

                    {/* Decorative blur circles */}
                    <div className="absolute -top-16 -left-16 w-64 h-64 bg-[##86D276]/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[##86D276]/20 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10">
                        {/* Hero Headline */}
                        <h1 className="mb-8 leading-none">
                            <span className="block text-[#f0ebe0] font-light text-5xl sm:text-6xl lg:text-[3.8rem] leading-tight">
                                Every Day 
                            </span>          
                            <span className="block text-[#86D276] italic text-5xl sm:text-6xl lg:text-[3.8rem] leading-tight">
                                Deserves A Feast
                            </span>
                        </h1>

                        {/* Quote */}
                        <div className="border-l-2 border-[#86D276] pl-4 mb-10">
                            <p
                                className="text-[#86D276] italic text-base sm:text-lg leading-relaxed"
                            >
                                Come savour an authentic South Indian meal made with love, any day of the week.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT IMAGE PANEL ── */}
                <div className="relative w-full lg:w-[48%] overflow-hidden p-4">
                    <div className="relative w-full h-120 mt-10 my-auto overflow-hidden rounded-2xl">
                        <img
                            src="/spl.jpeg"
                            alt="South Indian feast"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-contain object-center"
                        />

                        {/* Left blend — desktop */}
                        <div className="absolute inset-0 bg-linear-to-r from-[#0b1f0e] via-[#0b1f0e]/25 to-transparent" />
                        {/* Top fade */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-[#0b1f0e]/60 to-transparent" />
                        {/* Bottom fade mobile */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0b1f0e] to-transparent lg:hidden" />



                        {/* Decorative dot grid */}
                        <div className="absolute top-6 left-6 grid grid-cols-3 gap-1.5 opacity-25">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-[#7da87b]" />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
