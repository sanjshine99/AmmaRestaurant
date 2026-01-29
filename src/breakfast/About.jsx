import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    // Animation for the "Reveal" effect seen in the video
    const revealVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <section className="bg-black text-white min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* LEFT COLUMN - Text & Smaller Image (Occupies 5 columns) */}
                <div className="lg:col-span-5 space-y-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.2 }}
                        className="space-y-8"
                    >


                        <motion.div variants={revealVariants} className="space-y-4">
                            <h3 className="text-lg font-bold uppercase tracking-[0.4em] text-[#86D276]">
                                About Unlimited Breakfast Days
                            </h3>
                            <p className="text-lg text-gray-300 max-w-sm font-light leading-relaxed">
                                At Amma Kitchen, we bring you the authentic taste of South Indian and Sri Lankan cuisine, served with warmth and care. Our Weekend & Bank Holiday Unlimited Breakfast is designed for food lovers who enjoy variety, freshness, and real traditional flavours — from soft idly and crispy dosa to poori, pongal, vadai, upma, and masala tea. Every dish is prepared using quality ingredients and cooked with passion, so you can enjoy a satisfying breakfast without long waiting times. Whether you dine in with family or plan ahead by booking early, we’re here to give you a delicious and memorable start to your day.
                            </p>
                        </motion.div>

                        <motion.div variants={revealVariants}>
                            <button className="border border-white/40 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#86D276] hover:text-black transition-all duration-300">
                                <a href='breakfast#breakfast-contact' >
                                    Book a table
                                </a>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Image 2: Bottom Left (As seen in video) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="hidden lg:block w-4/5 pt-12"
                    >
                        <div className="aspect-4/3 overflow-hidden border border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
                                alt="Chef detail"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN - Main Large Image (Occupies 7 columns) */}
                <div className="lg:col-span-7 flex flex-col items-end">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="w-full lg:w-[90%] aspect-3/4 overflow-hidden border border-white/5 shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80"
                            alt="Main Kitchen View"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Image 3: Mobile/Tablet visible image to keep the "3 image" rule */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="w-full mt-12 lg:hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1550966841-3ee7adac1661?auto=format&fit=crop&q=80"
                            alt="Plating"
                            className="w-full h-64 object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;