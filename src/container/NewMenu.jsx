import React, { useState, useEffect, useRef } from "react";
import menuData from "../constants/menuData";

const MenuSection = () => {
    const [activeSection, setActiveSection] = useState(menuData[0]?.category);
    const [isSticky, setIsSticky] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isInMenuSection, setIsInMenuSection] = useState(true);
    const sectionRefs = useRef({});
    const menuSectionRef = useRef(null);
    const menuContentRef = useRef(null);
    const navBarRef = useRef(null);
    const categoryScrollRef = useRef(null);

    // Handle category scroll arrows visibility
    const handleCategoryScroll = () => {
        if (categoryScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollCategories = (direction) => {
        if (categoryScrollRef.current) {
            const scrollAmount = 200;
            const newScrollLeft = categoryScrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            categoryScrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const categoryContainer = categoryScrollRef.current;
        if (categoryContainer) {
            categoryContainer.addEventListener('scroll', handleCategoryScroll);
            handleCategoryScroll(); // Initial check
            return () => categoryContainer.removeEventListener('scroll', handleCategoryScroll);
        }
    }, []);

    // Handle scroll within the menu content area
    useEffect(() => {
        const handleMenuScroll = () => {
            if (!menuContentRef.current) return;

            const scrollTop = menuContentRef.current.scrollTop;

            // Find which section we're currently in based on menu content scroll
            let currentSection = menuData[0].category;

            menuData.forEach((section) => {
                const element = sectionRefs.current[section.category];
                if (element) {
                    const elementTop = element.offsetTop;
                    const threshold = 200;
                    
                    if (scrollTop >= elementTop - threshold) {
                        currentSection = section.category;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        const menuContent = menuContentRef.current;
        if (menuContent) {
            menuContent.addEventListener('scroll', handleMenuScroll);
            handleMenuScroll(); // Initial check
            return () => menuContent.removeEventListener('scroll', handleMenuScroll);
        }
    }, []);

    // Handle main window scroll for sticky behavior and section detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Check if we're still in the menu section
            if (menuSectionRef.current) {
                const menuRect = menuSectionRef.current.getBoundingClientRect();
                const menuTop = menuSectionRef.current.offsetTop;
                const menuHeight = menuSectionRef.current.offsetHeight;
                const menuBottom = menuTop + menuHeight;
                
                const inMenu = scrollY >= menuTop && scrollY < menuBottom - 100;
                setIsInMenuSection(inMenu);
            }

            // Check if we should make the nav sticky
            if (navBarRef.current && menuSectionRef.current) {
                const navBarTop = menuSectionRef.current.offsetTop;
                setIsSticky(scrollY >= navBarTop - 10);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (category) => {
        const element = sectionRefs.current[category];
        if (element && menuContentRef.current) {
            const isMobile = window.innerWidth < 640;
            const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
            
            let offset;
            if (isMobile) {
                offset = 160;
            } else if (isTablet) {
                offset = 160;
            } else {
                offset = 140;
            }
            
            const elementTop = element.offsetTop;
            const targetScrollTop = elementTop - offset;
            
            menuContentRef.current.scrollTo({ 
                top: targetScrollTop, 
                behavior: "smooth" 
            });
        }
    };

    return (
        <div id="menu" className="h-screen overflow-hidden bg-[#0a0a0a] text-gray-300">
            {/* Menu Section Container */}
            <div ref={menuSectionRef} className="h-full flex flex-col">
                {/* MOBILE & TABLET CATEGORY NAV */}
                {isInMenuSection && (
                    <div 
                        ref={navBarRef}
                        className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-b border-gray-800 z-50 shrink-0"
                    >
                        <div className="px-3 sm:px-4 py-3 sm:py-4">
                            {/* Horizontal scroll with arrows for mobile */}
                            <div className="sm:hidden relative">
                                {/* Left Arrow */}
                                {showLeftArrow && (
                                    <button
                                        onClick={() => scrollCategories('left')}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-linear-to-r from-[#0a0a0a] to-transparent pl-1 pr-3 py-6"
                                        aria-label="Scroll left"
                                    >
                                        <div className="bg-gray-800/90 hover:bg-gray-700/90 rounded-full p-1.5 shadow-lg transition-all duration-200 active:scale-95">
                                            <svg 
                                                className="w-4 h-4 text-white" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                )}

                                {/* Scrollable Categories */}
                                <div 
                                    ref={categoryScrollRef}
                                    className="overflow-x-auto scrollbar-hide -mx-3 px-3"
                                >
                                    <div className="flex gap-2 min-w-max pb-1">
                                        {menuData.map((section) => (
                                            <button
                                                key={section.category}
                                                onClick={() => scrollToSection(section.category)}
                                                className={`px-4 py-2.5 rounded-lg border text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                                                    activeSection === section.category
                                                        ? "bg-linear-to-r from-gray-800/80 to-gray-700/60 border-gray-600 text-white shadow-md scale-105"
                                                        : "border-gray-800 hover:border-gray-600 hover:bg-gray-900/50 active:scale-95"
                                                }`}
                                            >
                                                {section.category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Arrow */}
                                {showRightArrow && (
                                    <button
                                        onClick={() => scrollCategories('right')}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-linear-to-l from-[#0a0a0a] to-transparent pr-1 pl-3 py-6"
                                        aria-label="Scroll right"
                                    >
                                        <div className="bg-gray-800/90 hover:bg-gray-700/90 rounded-full p-1.5 shadow-lg transition-all duration-200 active:scale-95">
                                            <svg 
                                                className="w-4 h-4 text-white" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </button>
                                )}
                            </div>
                            
                            {/* Grid layout for tablet */}
                            <div className="hidden sm:grid grid-cols-4 md:grid-cols-5 gap-2">
                                {menuData.map((section) => (
                                    <button
                                        key={section.category}
                                        onClick={() => scrollToSection(section.category)}
                                        className={`px-3 py-2.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                                            activeSection === section.category
                                                ? "bg-linear-to-r from-gray-800/80 to-gray-700/60 border-gray-600 text-white shadow-md"
                                                : "border-gray-800 hover:border-gray-600 hover:bg-gray-900/50"
                                        }`}
                                    >
                                        {section.category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* SCROLLABLE MENU CONTENT */}
                <div 
                    ref={menuContentRef}
                    className="flex-1 overflow-y-auto scrollbar-custom"
                >
                    <main className="pt-4 sm:pt-6 lg:pt-8">
                        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex gap-6 lg:gap-12">
                            {/* STICKY SIDEBAR - Desktop Only */}
                            <aside className="hidden lg:block w-56 xl:w-64 sticky top-4 h-fit">
                                <nav className="space-y-2">
                                    {menuData.map((section) => (
                                        <button
                                            key={section.category}
                                            onClick={() => scrollToSection(section.category)}
                                            className={`w-full text-left px-4 xl:px-5 py-3 rounded-lg border transition-all duration-200 text-sm xl:text-base ${
                                                activeSection === section.category
                                                    ? "bg-linear-to-r from-gray-800/80 to-gray-700/60 border-gray-600 text-white shadow-lg transform scale-105"
                                                    : "border-gray-800 hover:border-gray-600 hover:bg-gray-900/50"
                                            }`}
                                        >
                                            {section.category}
                                        </button>
                                    ))}
                                </nav>
                            </aside>

                            {/* MENU CONTENT */}
                            <div className="flex-1 min-w-0 pb-8">
                                {menuData.map((section) => (
                                    <section
                                        key={section.category}
                                        id={section.category}
                                        ref={(el) => (sectionRefs.current[section.category] = el)}
                                        className="mb-16 sm:mb-20 lg:mb-28"
                                    >
                                        {/* CATEGORY HEADER */}
                                        <div 
                                            className="sticky top-0 bg-[#0a0a0a]/98 backdrop-blur-md py-4 sm:py-5 lg:py-6 border-b border-gray-800 z-30 -mx-3 sm:-mx-4 lg:mx-0 px-3 sm:px-4 lg:px-0"
                                        >
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide font-light">
                                                {section.category}
                                            </h2>
                                        </div>

                                        {/* ITEMS */}
                                        <div className="space-y-6 sm:space-y-8 lg:space-y-10 mt-6 sm:mt-8 lg:mt-10">
                                            {section.items.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="group flex gap-3 sm:gap-4 lg:gap-6 border-b border-gray-800/50 pb-6 sm:pb-7 lg:pb-8 hover:border-gray-700/50 transition-all duration-300"
                                                >
                                                    {/* Image */}
                                                    <div className="shrink-0">
                                                        <img
                                                            src={
                                                                typeof item.image === "string"
                                                                    ? `/${item.image}`
                                                                    : item.image
                                                            }
                                                            alt={item.title}
                                                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 object-cover rounded-lg shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                                                        />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex justify-between items-start gap-2 mb-1 sm:mb-2">
                                                            <h3 className="text-base sm:text-lg lg:text-xl text-white font-medium group-hover:text-gray-100 transition-colors duration-200 pr-2">
                                                                {item.title}
                                                            </h3>
                                                            <span className="text-base sm:text-lg lg:text-xl text-white font-semibold whitespace-nowrap shrink-0">
                                                                {item.price}
                                                            </span>
                                                        </div>

                                                        {item.tags && (
                                                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1">
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
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                /* Custom scrollbar for menu content */
                .scrollbar-custom::-webkit-scrollbar {
                    width: 8px;
                }
                .scrollbar-custom::-webkit-scrollbar-track {
                    background: rgba(17, 24, 39, 0.5);
                }
                .scrollbar-custom::-webkit-scrollbar-thumb {
                    background: rgba(75, 85, 99, 0.5);
                    border-radius: 4px;
                }
                .scrollbar-custom::-webkit-scrollbar-thumb:hover {
                    background: rgba(75, 85, 99, 0.8);
                }
                
                /* Firefox scrollbar */
                .scrollbar-custom {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(75, 85, 99, 0.5) rgba(17, 24, 39, 0.5);
                }
            `}</style>
        </div>
    );
};

export default MenuSection;