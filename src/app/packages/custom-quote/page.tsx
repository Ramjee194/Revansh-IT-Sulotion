"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Send, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function CustomQuotePage() {
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
            <FileText size={40} />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Tailored <br />
            <span className="text-indigo-500">Custom Quote</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Every business is unique. Tell us about your project requirements, 
            and we'll build a bespoke digital solution just for you.
          </p>

          <div className="max-w-2xl mx-auto p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl text-left">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Project Details</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 transition-colors" placeholder="Tell us about your goals..." />
              </div>
              <button type="submit" className="w-full py-5 bg-indigo-600 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                Submit Request <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
