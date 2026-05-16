"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects Delivered", value: 100, suffix: "+" },
  { label: "Enterprise Clients", value: 35, suffix: "+" },
  { label: "AI Solutions Built", value: 15, suffix: "+" },
  { label: "Cloud Deployments", value: 50, suffix: "+" },
  { label: "Countries Served", value: 10, suffix: "+" }
];

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-counter", {
        innerText: 0,
        duration: 2.5,
        snap: { innerText: 1 },
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#030712]" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900 dark:bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden group">
          {/* Animated Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 text-white">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="text-4xl md:text-6xl font-black mb-4 tracking-tighter flex items-center justify-center">
                  <span className="stat-counter">{stat.value}</span>
                  <span className="text-blue-500 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                
                {/* Separator for desktop */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-12 bg-white/10 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
