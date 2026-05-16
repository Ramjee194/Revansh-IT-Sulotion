"use client";

import { motion } from "framer-motion";
import { RiStarFill, RiDoubleQuotesL } from "react-icons/ri";

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
    content: "Our website's performance and SEO reach have never been better. Devansh IT really knows how to build for scale.",
    rating: 5,
    image: "/indian_marketing_sanya_1778923535959.png"
  },
  {
    name: "Rahul Verma",
    role: "Founder, TechSpark Lucknow",
    content: "Technical excellence at its best. They didn't just build a portal; they engineered a business solution.",
    rating: 5,
    image: "/indian_founder_rahul_1778923554276.png"
  }
];

export default function Testimonials() {
  return (
    <section id="feedback" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
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
            className="text-xl md:text-4xl font-black tracking-tight uppercase"
          >
            Voices of <span className="text-indigo-600">Success</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <RiDoubleQuotesL className="absolute top-8 right-10 text-indigo-500/10 w-16 h-16 transition-colors group-hover:text-indigo-500/20" />
              
              <div className="flex space-x-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <RiStarFill key={i} size={18} className="text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-lg font-bold leading-relaxed mb-10 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center space-x-4 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-indigo-500/20 group-hover:border-indigo-500 transition-colors">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{t.name}</h4>
                  <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

