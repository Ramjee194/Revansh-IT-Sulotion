"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Zap, Search, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";

export default function TechnicalSEOPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
          >
            <Cpu size={14} className="text-blue-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-blue-300">Core Web Vitals Mastery</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Technical <br />
            <span className="text-blue-500">SEO Audits</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Fix the foundation of your search visibility. We optimize site speed, 
            crawlability, and schema markup to ensure Google loves your website.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Zap />, title: "Page Speed", desc: "Optimization for LCP, FID, and CLS scores." },
              { icon: <Search />, title: "Crawlability", desc: "Robots.txt, Sitemaps, and indexing fixes." },
              { icon: <ShieldCheck />, title: "Schema Markup", desc: "Structured data for rich search results." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
