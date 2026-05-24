"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/premium_it_support_1.png",
  "/premium_it_support_2.png",
  "/premium_it_support_3.png"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Smooth slow motion image transitions every 8 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // Smooth slow-motion crossfade
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={IMAGES[currentImageIndex]}
              alt="IT Services & Support"
              className="w-full h-full object-cover"
            />
            {/* Cinematic dark overlay to make white text completely readable */}
            <div className="absolute inset-0 bg-black/65" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-28 pb-16 flex flex-col items-center justify-center">

        {/* Heading (Pure white, uppercase, no text gradients, matching reference size) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.15] max-w-3xl"
        >
          WE SPECIALIZE IN IT SERVICE & SUPPORT
        </motion.h1>

        {/* Description (Centered and clean) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 text-sm sm:text-base md:text-lg text-slate-100 max-w-2xl font-medium leading-relaxed opacity-95"
        >
          We specialize in providing IT infrastructure services with the promise of reliability and resourcefulness to provide practical, cost-effective solutions to clients.
        </motion.p>

        {/* Action Buttons (Stacked vertically with matching dimensions) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 items-center w-full max-w-[320px] sm:max-w-[400px]"
        >
          <a
            href="#contact"
            className="w-full py-4 text-center bg-[#de952a] hover:bg-[#c98322] text-white font-bold rounded-[6px] transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-md"
          >
            GET STARTED
          </a>

          <a
            href="#about"
            className="w-full py-4 text-center border border-white hover:border-slate-200 bg-transparent text-white font-bold rounded-[6px] hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm"
          >
            {/* Standard Play Triangle Icon */}
            <svg
              className="w-3.5 h-3.5 fill-current inline-block"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </a>
        </motion.div>
      </div>

      {/* Floating WhatsApp Widget in Bottom Left (Matching Screenshot) */}
      <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
        <a
          href="https://wa.me/918404827541"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.077.99 11.52 1.01 6.082 1.01 1.657 5.378 1.653 10.81c-.001 1.658.438 3.275 1.272 4.719L1.951 20.8l5.42-1.417z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
