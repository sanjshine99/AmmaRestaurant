import React, { useState, useEffect, useRef } from "react";
import menuData from "../constants/menuData";

const MenuSection = () => {
    const [activeSection, setActiveSection] = useState(menuData[0]?.category);
    const [isSticky, setIsSticky] = useState(false);
    const sectionRefs = useRef({});
    const menuSectionRef = useRef(null);
    const navBarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Check if we should make the nav sticky (only on mobile)
            if (navBarRef.current && menuSectionRef.current) {
                const navBarTop = menuSectionRef.current.offsetTop;
                setIsSticky(scrollY >= navBarTop);
            }

            // Find which section we're currently in
            let currentSection = menuData[0].category;

            menuData.forEach((section) => {
                const element = sectionRefs.current[section.category];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + scrollY;

                    // Only switch if the section header is near the top of viewport
                    if (scrollY >= elementTop - 200) {
                        currentSection = section.category;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (category) => {
        const element = sectionRefs.current[category];
        if (element) {
            const offset = isSticky ? 140 : 120;
            const y = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
            {/* Menu Section Container */}
            <div ref={menuSectionRef} className="pt-8">
                {/* MOBILE CATEGORY NAV */}
                <div 
                    ref={navBarRef}
                    className={`lg:hidden ${isSticky ? 'fixed top-0' : 'relative'} left-0 right-0 bg-[#0a0a0a]/95 border-b border-gray-800 z-50`}
                >
                    <div className="px-4 py-4">
                        <div className="grid grid-cols-3 gap-2">
                            {menuData.map((section) => (
                                <button
                                    key={section.category}
                                    onClick={() => scrollToSection(section.category)}
                                    className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                                        activeSection === section.category
                                            ? "bg-gray-800/60 border-gray-600 text-white"
                                            : "border-gray-800 hover:border-gray-600"
                                    }`}
                                >
                                    {section.category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MENU LAYOUT */}
                <main className="pt-4">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8 flex gap-12">
                        {/* STICKY SIDEBAR - Desktop */}
                        <aside className="hidden lg:block w-64 sticky top-28 h-fit">
                            <nav className="space-y-3">
                                {menuData.map((section) => (
                                    <button
                                        key={section.category}
                                        onClick={() => scrollToSection(section.category)}
                                        className={`w-full text-left px-5 py-3 rounded-lg border transition ${
                                            activeSection === section.category
                                                ? "bg-gray-800/60 border-gray-600 text-white"
                                                : "border-gray-800 hover:border-gray-600"
                                        }`}
                                    >
                                        {section.category}
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* MENU CONTENT */}
                        <div className="flex-1">
                            {menuData.map((section) => (
                                <section
                                    key={section.category}
                                    id={section.category}
                                    ref={(el) => (sectionRefs.current[section.category] = el)}
                                    className="mb-28"
                                >
                                    {/* CATEGORY HEADER */}
                                    <div 
                                        className="sticky bg-[#0a0a0a]/95 py-6 border-b border-gray-800 z-30"
                                        style={{ top: isSticky ? '80px' : '0' }}
                                    >
                                        <h2 className="text-3xl lg:text-4xl text-white tracking-wide">
                                            {section.category}
                                        </h2>
                                    </div>

                                    {/* ITEMS */}
                                    <div className="space-y-10 mt-10">
                                        {section.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-6 border-b border-gray-800 pb-8"
                                            >
                                                <img
                                                    src={
                                                        typeof item.image === "string"
                                                            ? `/${item.image}`
                                                            : item.image
                                                    }
                                                    alt={item.title}
                                                    className="w-28 h-28 lg:w-36 lg:h-36 object-cover rounded-lg"
                                                />

                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h3 className="text-lg lg:text-xl text-white">
                                                            {item.title}
                                                        </h3>
                                                        <span className="text-lg lg:text-xl text-white">
                                                            {item.price}
                                                        </span>
                                                    </div>

                                                    {item.tags && (
                                                        <p className="text-sm text-gray-400">
                                                            {item.tags}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
};

export default MenuSection;