"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Facebook, Target, BarChart3, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function MetaAdvertisingPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8">
                <Target size={14} className="text-blue-400" />
                <span className="text-xs uppercase tracking-widest font-bold text-blue-300">Precision Targeting</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                Meta <br />
                <span className="text-blue-500">Advertising</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-xl">
                Maximize your ROI with expert Facebook & Instagram ads. We build 
                high-converting campaigns with advanced audience data and creative testing.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 rounded-2xl font-black hover:bg-blue-700 transition-all flex items-center gap-2">
                   Scale My ROI <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all">
                  Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="space-y-6">
                {[
                  { icon: <BarChart3 />, title: "Data Analytics", val: "Real-time ROI Tracking" },
                  { icon: <Zap />, title: "A/B Testing", val: "Creative Optimization" },
                  { icon: <ShieldCheck />, title: "Pixel Setup", val: "Advanced Conversion API" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
