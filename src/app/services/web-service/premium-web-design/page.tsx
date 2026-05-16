"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Paintbrush, Layout, Eye, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PremiumWebDesignPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8"
          >
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-300">Award-Winning Aesthetics</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Premium <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Web Design</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            We don't just build websites; we create digital masterpieces. 
            Bespoke designs that capture your brand essence and convert visitors into loyal customers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Layout />, title: "Bespoke Layouts", desc: "No templates. Every design is crafted from scratch." },
              { icon: <Eye />, title: "Visual Storytelling", desc: "Immersive experiences that captivate your audience." },
              { icon: <Paintbrush />, title: "Modern UI/UX", desc: "User-centric design focused on performance and beauty." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center hover:border-indigo-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto mb-6">
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
