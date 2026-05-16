"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram, Video, Zap, TrendingUp, Play, ArrowRight } from "lucide-react";

export default function InstagramReelsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 mb-8"
          >
            <Video size={14} className="text-pink-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-pink-300">Viral Content Creation</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Instagram <br />
            <span className="text-pink-500">Reels & Video</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Stop the scroll with high-impact video content. We craft viral-ready Reels 
            and video strategies that explode your reach and engagement.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <TrendingUp />, title: "Viral Growth", desc: "Proven strategies to hit the Explore page consistently." },
              { icon: <Zap />, title: "High Engagement", desc: "Content designed to drive comments, likes, and shares." },
              { icon: <Play />, title: "Cinematic Quality", desc: "Pro-level editing and storytelling for your brand." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="px-12 py-5 bg-pink-600 rounded-2xl font-black text-lg hover:bg-pink-700 transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-pink-500/20">
            Start My Growth <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
