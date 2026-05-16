"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Check, Zap, ArrowRight, Globe } from "lucide-react";

export default function EnterprisePlanPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8"
          >
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">Enterprise Solutions</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Elite <br />
            <span className="text-emerald-500">Enterprise Plan</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Uncompromising power for global brands. Dedicated infrastructure, 
            24/7 priority response, and full-stack digital transformation.
          </p>

          <div className="max-w-lg mx-auto p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-emerald-600 rounded-full text-xs font-black uppercase tracking-widest">
              Custom Enterprise Pricing
            </div>
            
            <ul className="space-y-6 text-left mb-12">
              {[
                "Custom SaaS/Web App Development",
                "Dedicated Cloud Infrastructure",
                "24/7 Managed Care & Support",
                "Advanced AI/ML Integration",
                "Global Marketing & SEO Strategy"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <Check className="text-emerald-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 bg-emerald-600 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-emerald-500/20">
              Contact Enterprise Sales <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
