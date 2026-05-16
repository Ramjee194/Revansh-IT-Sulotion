"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Cpu,
  Code2,
  Globe2,
  Cloud,
  Database,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(".bg-grid", {
      backgroundPosition: "60px 60px",
      duration: 18,
      repeat: -1,
      ease: "linear",
    });

    // Realistic floating blob animation
    gsap.to(".glass-blob", {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const stats = [
    { label: "Projects Delivered", value: "200", color: "from-blue-500 to-cyan-400" },
    { label: "Enterprise Clients", value: "80+", color: "from-violet-500 to-fuchsia-400" },
    { label: "SMS Delivered", value: "1M", color: "from-emerald-500 to-lime-400" },
    { label: "Global Reach", value: "20 Countries", color: "from-orange-500 to-yellow-400" },
  ];

  const floatingIcons = [
    { icon: <Code2 size={20} />, top: "15%", left: "10%" },
    { icon: <Cpu size={20} />, top: "22%", right: "12%" },
    { icon: <Cloud size={20} />, bottom: "25%", left: "12%" },
    { icon: <Database size={20} />, bottom: "15%", right: "10%" },
    { icon: <Globe2 size={20} />, top: "50%", right: "3%" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-[#030712] text-slate-900 dark:text-white flex items-center pt-28 pb-20">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="bg-grid absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Realistic Glass Blobs */}
        <div className="glass-blob absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="glass-blob absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating Icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute hidden lg:flex w-12 h-12 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/5 backdrop-blur-xl items-center justify-center text-blue-500 dark:text-blue-400 shadow-sm"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Premium Badge */}
            

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tight text-slate-900 dark:text-white"
            >
              Scale Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 bg-clip-text text-transparent">
                Digital Business
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 text-lg md:text-2xl leading-relaxed text-slate-600 dark:text-gray-300 max-w-2xl font-medium"
            >
              Revansh Tech delivers elite 
              <span className="text-blue-600 dark:text-blue-400 font-black italic"> Web, Mobile & AI </span>
              solutions that transform enterprise ideas into high-performance market leaders.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-5"
            >
              <button className="group relative overflow-hidden rounded-2xl px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight
                    size={22}
                    className="ml-3 transition-transform group-hover:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>

              <button className="group rounded-2xl border-2 border-slate-200 dark:border-white/10 bg-transparent backdrop-blur-xl px-10 py-5 text-lg font-black hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-slate-900 dark:text-white flex items-center">
                <Play size={18} className="mr-3 fill-current" />
                View Portfolio
              </button>
            </motion.div>

            {/* Simple Stats Row */}
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Realistic Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] p-4">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/hero_analytics_dashboard_1778923969066.png"
                  alt="analytics dashboard"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Overlapping Glass Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-8 rounded-[2rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Growth</p>
                    <p className="text-2xl font-black text-slate-900 dark:text-white">+84%</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Missing import fix
import { TrendingUp } from "lucide-react";