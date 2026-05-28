"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Users, Cpu, Lock, MessageSquare, Repeat, CheckCircle2, DollarSign, Headphones, Award } from "lucide-react";
import { RiFocus3Line, RiWallet3Line, RiMedalLine, RiPuzzleLine } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: <RiFocus3Line size={24} />, title: "Result-Driven", desc: "Laser-focused on ROI and business growth through data-backed strategies." },
  { icon: <RiWallet3Line size={24} />, title: "Affordable Plans", desc: "Flexible and transparent packages designed for every business size." },
  { icon: <FaHeadset size={24} />, title: "24/7 Support", desc: "Dedicated support team available round the clock for instant query resolution." },
  { icon: <RiMedalLine size={24} />, title: "1 Years Expertise", desc: "A proven track record of building trusted brands and scaling businesses since 2014." }
];

export default function WhyChooseUs() {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-number", {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        }
      });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.2em] text-sm mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-black leading-tight  tracking-tight max-w-3xl"
          >
            
            <span className="text-amber-700  underline decoration-indigo-500/30 underline-offset-8">Orbous Growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-bold max-w-2xl mt-8"
          >
            We combine technical precision with business strategy to deliver results that actually move the needle for your bottom line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all group shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h4 className="font-black text-xl uppercase tracking-wider mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{feature.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {[
              { label: "Projects Done", value: 1200 },
              { label: "Happy Clients", value: 5000 },
              { label: "SMS Sent (Cr)", value: 50 },
              { label: "Countries", value: 20 }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-900/80 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:shadow-2xl hover:border-indigo-500/30 transition-all group">
                <div className="text-4xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
                  <span className="stat-number">{stat.value}</span>+
                </div>
                <div className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

