"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Youtube, Play, TrendingUp, Search, ArrowRight, Zap } from "lucide-react";

export default function YouTubeMarketingPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8"
          >
            <Youtube size={16} className="text-red-500" />
            <span className="text-xs uppercase tracking-widest font-bold text-red-300">Video Search Dominance</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            YouTube <br />
            <span className="text-red-600">Marketing</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Harness the power of the world's second-largest search engine. We optimize 
            your channel, produce high-quality content, and manage hyper-targeted video ads.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Search />, title: "YouTube SEO", desc: "Rank your videos for critical search terms." },
              { icon: <TrendingUp />, title: "Channel Growth", desc: "Build a loyal subscriber base with proven tactics." },
              { icon: <Zap />, title: "Video Ads", desc: "Targeted In-stream and discovery ads that convert." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mx-auto mb-8">
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
