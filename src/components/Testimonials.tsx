"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiStarFill, RiDoubleQuotesL } from "react-icons/ri";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Director, Mehta Enterprises",
    content: "The SMS and WhatsApp integration was a game-changer for our customer engagement. Conversion rates jumped by 40% in the first month.",
    rating: 5,
    image: "/indian_ceo_arjun_1778923519952.png"
  },
  {
    name: "Sanya Kapoor",
    role: "Marketing Head, FabIndia Digital",
    content: "Our website's performance and SEO reach have never been better. Orbous really knows how to build for scale.",
    rating: 5,
    image: "/indian_marketing_sanya_1778923535959.png"
  },
  {
    name: "Rahul Verma",
    role: "Founder, TechSpark Lucknow",
    content: "Technical excellence at its best. They didn't just build a portal; they engineered a business solution.",
    rating: 5,
    image: "/indian_founder_rahul_1778923554276.png"
  },
  {
    name: "Priya Sharma",
    role: "COO, FinTech Solutions",
    content: "We migrated our legacy core infrastructure to the cloud with Orbous. Zero downtime and 3x performance improvement.",
    rating: 5,
    bgGradient: "from-blue-500 to-indigo-500",
    initials: "PS"
  },
  {
    name: "Amit Patel",
    role: "CTO, Zylker Technologies",
    content: "Their AI web solutions transformed how we interact with customers. The custom chatbot handles 80% of our standard support queries.",
    rating: 5,
    bgGradient: "from-teal-500 to-emerald-500",
    initials: "AP"
  },
  {
    name: "Vikram Malhotra",
    role: "Head of Operations, Vistara Logistics",
    content: "The WhatsApp Business API implementation has streamlined our package tracking alerts. Our customer satisfaction score went up by 35%.",
    rating: 5,
    bgGradient: "from-amber-500 to-orange-500",
    initials: "VM"
  },
  {
    name: "Neha Gupta",
    role: "Founder, GreenGrocer India",
    content: "A beautiful ecommerce website developed on Next.js. Speed is outstanding and checkout flow is so smooth. Highly recommend their web team!",
    rating: 5,
    bgGradient: "from-rose-500 to-pink-500",
    initials: "NG"
  },
  {
    name: "Karan Johar",
    role: "Marketing Director, Stellar Media",
    content: "Orbous's SMM and Meta advertising strategies gave us a 5x return on ad spend. Their team is creative and highly analytical.",
    rating: 5,
    bgGradient: "from-purple-500 to-indigo-500",
    initials: "KJ"
  },
  {
    name: "Meera Nair",
    role: "Director, EduSmart Academy",
    content: "Their SEO audit and subsequent optimization helped us rank on the first page for our major target keywords. Organic traffic doubled in 3 months.",
    rating: 5,
    bgGradient: "from-sky-500 to-cyan-500",
    initials: "MN"
  },
  {
    name: "Rohan Das",
    role: "Co-Founder, QuickPay India",
    content: "Excellent custom web application development. They delivered the security, compliance, and user-experience we demanded.",
    rating: 5,
    bgGradient: "from-violet-500 to-purple-500",
    initials: "RD"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCards;

  // Auto-play sliding right-to-left
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const totalDots = maxIndex + 1;

  return (
    <section id="feedback" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 px-4 md:px-6">
        
        {/* Header and Controls */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.2em] text-sm mb-4"
          >
            Customer Feedback
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black tracking-tight uppercase"
          >
            Voices of <span className="text-indigo-600">Success</span>
          </motion.h2>

          {/* Slider Arrow Controls */}
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-95 shadow-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-95 shadow-sm cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider Viewport */}
        <div 
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Side Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />

          {/* Cards Track */}
          <div 
            className="flex transition-transform duration-700 ease-out mx-[-12px]"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <div className="group relative h-full p-8 md:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col justify-between">
                  <div>
                    <RiDoubleQuotesL className="absolute top-6 right-8 text-indigo-500/10 w-12 h-12 md:w-16 md:h-16 transition-colors group-hover:text-indigo-500/20" />

                    <div className="flex space-x-1 mb-6">
                      {[...Array(t.rating)].map((_, ratingIdx) => (
                        <RiStarFill key={ratingIdx} size={16} className="text-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-bold leading-relaxed mb-8 italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-indigo-500/20 group-hover:border-indigo-500 transition-colors shrink-0">
                      {t.image ? (
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center text-white font-black text-xs md:text-sm bg-gradient-to-br ${t.bgGradient}`}>
                          {t.initials}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-xs md:text-sm truncate">{t.name}</h4>
                      <p className="text-[9px] md:text-[10px] font-black text-indigo-500 uppercase tracking-widest truncate">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalDots > 1 && (
          <div className="flex justify-center space-x-2.5 mt-8">
            {[...Array(totalDots)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? "bg-indigo-600 w-8" 
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
