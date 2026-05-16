"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Check, Zap, ArrowRight, BarChart3 } from "lucide-react";

export default function SEOYearlyPlanPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-8"
          >
            <BarChart3 size={14} className="text-amber-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-amber-300">Long-term Organic Growth</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            SEO <br />
            <span className="text-amber-500">Yearly Success</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Dominate search results with a sustained, white-hat strategy. 
            Monthly growth, technical excellence, and authority building.
          </p>

          <div className="max-w-lg mx-auto p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-600 rounded-full text-xs font-black uppercase tracking-widest">
              Best Value Yearly Plan
            </div>
            
            <ul className="space-y-6 text-left mb-12">
              {[
                "Full Technical SEO Audit",
                "Monthly High-Authority Backlinks",
                "Weekly Content Optimization",
                "Competitor Analysis & Tracking",
                "Guaranteed Ranking Improvements"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <Check className="text-amber-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 bg-amber-600 rounded-2xl font-black text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/20">
              Start Yearly Growth <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
