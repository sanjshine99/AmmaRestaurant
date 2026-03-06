import { useEffect, useState } from "react";

export default function Banner() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 overflow-hidden "
        >
            {/* Card */}
            {/* ===== BACKGROUND IMAGE LAYER ===== */}
            <div
                className="absolute inset-0 z-0  pointer-events-none"
                style={{
                    backgroundImage: "url('/bg.png')", // Public folder path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="flex flex-col lg:flex-row min-h-[560px]">

                {/* ── LEFT PANEL ── */}
                <div className="flex-1 flex flex-col justify-between p-8 sm:p-10 lg:p-14 relative overflow-hidden">

                    {/* Decorative blur circles */}
                    <div className="absolute -top-16 -left-16 w-64 h-64 bg-[##86D276]/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[##86D276]/20 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10">

                        {/* Brand row */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex-1 max-w-10 h-px bg-linear-to-r from-transparent to-[#a3b899]/60" />
                            <span
                                className="tracking-[0.3em] text-[#86D276] uppercase"
                            >
                                Amma Kitchen
                            </span>
                            <div className="flex-1 max-w-10 h-px bg-linear-to-l from-transparent to-[#86D276]/60" />
                        </div>

                        {/* Tag line */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#86D276]" />
                            <span
                                className="text-[#86D276] text-base italic"
                            >
                                This Mother's Day
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#86D276]" />
                        </div>

                        {/* Hero Headline */}
                        <h1 className="mb-8 leading-none">
                            <span className="block text-[#f0ebe0] font-light text-5xl sm:text-6xl lg:text-[3.8rem] leading-tight">
                                Celebrate
                            </span>
                            <span className="block text-[#f0ebe0] font-light text-5xl sm:text-6xl lg:text-[3.8rem] leading-tight">
                                Her With{" "}
                                <em className="text-[#86D276]  italic">The</em>
                            </span>
                            <span className="block text-[#86D276] italic text-5xl sm:text-6xl lg:text-[3.8rem] leading-tight">
                                Flavours
                            </span>
                            <span className="block text-[#f0ebe0] font-light text-5xl sm:text-6xl lg:text-[3.8rem] leading-tight">
                                She Deserves
                            </span>
                        </h1>

                        {/* Quote */}
                        <div className="border-l-2 border-[#86D276] pl-4 mb-10">
                            <p
                                className="text-[#86D276] italic text-base sm:text-lg leading-relaxed"
                            >
                                Made with love, just like hers — join us for an authentic South Indian feast this Mother's Day.
                            </p>
                        </div>
                    </div>

                    {/* Bottom address row */}
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#86D276] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span
                                className="tracking-widest text-white uppercase"
                            >
                                477 Beake Ave, Coventry
                            </span>
                        </div>

                        <span className="hidden sm:block text-[#8aab88]/40">·</span>

                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#86D276] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span
                                className="tracking-widest text-white uppercase"
                            >
                                Sun: 10:00 AM – 10:30 PM
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT IMAGE PANEL ── */}
                <div className="relative w-full lg:w-[48%] min-h-[300px] lg:min-h-full overflow-hidden">

                    <img
                        src="/Paneer Dosa.jpeg"
                        alt="South Indian feast"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Left blend — desktop */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#0b1f0e] via-[#0b1f0e]/25 to-transparent" />
                    {/* Top fade */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-[#0b1f0e]/60 to-transparent" />
                    {/* Bottom fade mobile */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0b1f0e] to-transparent lg:hidden" />

                    {/* Floating badge */}
                    <div className="absolute bottom-6 right-6 border border-[#7da87b]/30 rounded-xl px-5 py-3 text-center bg-[#0b1f0e]/80 backdrop-blur-sm">
                        <p
                            className="text-[10px] tracking-[0.2em] text-[#8aab88] uppercase mb-1"
                        >
                            Special Menu
                        </p>
                        <p
                            className="text-[#7da87b] italic text-xl leading-tight"
                        >
                            Mother's Day
                        </p>
                        <p
                            className="text-[#7da87b] italic text-xl leading-tight"
                        >
                            Feast
                        </p>
                    </div>

                    {/* Decorative dot grid */}
                    <div className="absolute top-6 left-6 grid grid-cols-3 gap-1.5 opacity-25">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-[#7da87b]" />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}