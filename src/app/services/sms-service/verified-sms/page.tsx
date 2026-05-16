"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Shield, UserCheck, Smartphone, ArrowRight, Star } from "lucide-react";

export default function VerifiedSMSPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 mb-8"
          >
            <Star size={14} className="text-violet-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-violet-300">Premium Branding</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Verified <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">SMS</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Eliminate phishing and build ultimate brand trust. Your business logo and 
            verification badge delivered directly to the native messaging app.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-violet-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-violet-500/30">
              Get Verified
            </button>
            <button className="px-10 py-5 border border-white/10 rounded-2xl font-black text-lg hover:bg-white/5 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Shield />, title: "Anti-Phishing", desc: "Protect your customers from spoofing and fraudulent messages." },
              { icon: <UserCheck />, title: "Brand Identity", desc: "Display your official logo and business name instead of numbers." },
              { icon: <Smartphone />, title: "Rich Interaction", desc: "Enable rich link previews and interactive action buttons." }
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-400 mx-auto mb-8">
                  {block.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                <p className="text-gray-400 leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
