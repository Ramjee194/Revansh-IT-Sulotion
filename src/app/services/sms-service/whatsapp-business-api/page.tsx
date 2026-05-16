"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RiWhatsappLine } from "react-icons/ri";
import { MessageCircle, Bot, Zap, Share2, ArrowRight } from "lucide-react";

export default function WhatsAppAPIPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-8 text-green-400">
                <RiWhatsappLine size={18} />
                <span className="text-xs uppercase tracking-widest font-bold">Official Business API</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                WhatsApp <br />
                <span className="text-green-500">Business API</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Connect with customers on the app they use most. Send rich media, 
                interactive buttons, and automate support with AI chatbots.
              </p>
              <button className="px-10 py-5 bg-green-600 rounded-2xl font-black text-lg hover:bg-green-700 transition-all flex items-center gap-3">
                Get Your Green Badge <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-1 rounded-[3rem] bg-gradient-to-br from-green-500/30 to-emerald-500/30"
            >
              <div className="bg-slate-900 rounded-[2.8rem] overflow-hidden p-8 border border-white/10">
                <div className="space-y-6">
                  {[
                    { title: "Rich Media", icon: <Share2 />, desc: "Send PDFs, Images, and Videos." },
                    { title: "AI Chatbots", icon: <Bot />, desc: "24/7 automated customer support." },
                    { title: "Quick Replies", icon: <Zap />, desc: "Interactive buttons for faster UX." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{feat.title}</h4>
                        <p className="text-sm text-gray-500">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
