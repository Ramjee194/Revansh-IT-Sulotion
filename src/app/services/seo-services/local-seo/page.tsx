"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Star, Phone, Search, Globe, ArrowRight } from "lucide-react";

export default function LocalSEOPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-8">
                <MapPin size={14} className="text-amber-400" />
                <span className="text-xs uppercase tracking-widest font-bold text-amber-300">Dominating Local Search</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                Local <br />
                <span className="text-amber-500">SEO Services</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Be the #1 choice in your neighborhood. We optimize your Google Business Profile 
                and local citations to drive foot traffic and local leads.
              </p>
              <button className="px-10 py-5 bg-amber-600 rounded-2xl font-black text-lg hover:bg-amber-700 transition-all flex items-center gap-3 shadow-2xl shadow-amber-500/20">
                Optimize My Profile <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10"
            >
              <div className="space-y-6">
                {[
                  { icon: <Search />, title: "Google Maps Ranking", desc: "Top 3 position in local map pack." },
                  { icon: <Star />, title: "Review Management", desc: "Build a 5-star reputation automated." },
                  { icon: <Phone />, title: "Local Citations", desc: "Consistent NAP across 100+ directories." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
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
