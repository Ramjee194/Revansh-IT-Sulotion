"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, FileText, BarChart3, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function SEOAuditPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-emerald-600/20 flex items-center justify-center text-emerald-400 mx-auto mb-10 shadow-2xl shadow-emerald-500/20"
          >
            <FileText size={40} />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Comprehensive <br />
            <span className="text-emerald-500">SEO Audit</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Get a 360-degree view of your search performance. Our detailed audit 
            uncovers hidden issues and provides a roadmap for total market dominance.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Search />, title: "Technical Audit", desc: "Identify crawl errors and indexing issues." },
              { icon: <BarChart3 />, title: "Competitor Analysis", desc: "See exactly why your competitors are ranking." },
              { icon: <ShieldCheck />, title: "On-Page Audit", desc: "Optimize titles, tags, and content structure." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="px-12 py-5 bg-emerald-600 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all">
            Request Free Audit
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
