"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PenTool, Target, Share2, BarChart, ArrowRight, Sparkles } from "lucide-react";

export default function ContentMarketingPage() {
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
            className="w-20 h-20 rounded-3xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mx-auto mb-10 shadow-2xl shadow-indigo-500/20"
          >
            <PenTool size={40} />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Content <br />
            <span className="text-indigo-500">Marketing</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Content is the king, and we are the kingmakers. We create authoritative, 
            engaging, and SEO-optimized content that builds your brand's voice.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Target />, title: "Strategy First", desc: "Data-driven content plans tailored to your niche." },
              { icon: <Sparkles />, title: "Creative Writing", desc: "Engaging blogs, articles, and whitepapers." },
              { icon: <Share2 />, title: "Distribution", desc: "Get your content seen across the right channels." }
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
