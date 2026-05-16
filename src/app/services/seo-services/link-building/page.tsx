"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link2, Globe, ShieldCheck, Zap, ArrowRight, Star } from "lucide-react";

export default function LinkBuildingPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 mb-8"
          >
            <ShieldCheck size={14} className="text-sky-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-sky-300">White-Hat Authority Building</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            High-Authority <br />
            <span className="text-sky-500">Link Building</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Boost your domain authority with premium backlinks. We focus on 
            relevance, authority, and quality—no spam, just pure growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe />, title: "Guest Posting", desc: "Placements on high-traffic, niche-relevant websites." },
              { icon: <Star />, title: "PR Outreach", desc: "Get featured in major publications and news sites." },
              { icon: <Link2 />, title: "Broken Link Fixes", desc: "Recover lost authority and build new connections." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mx-auto mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
