"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneCall, Mic, Settings, Headphones, ArrowRight, Play } from "lucide-react";

export default function VoiceCallIVRPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Automated <br />
                <span className="text-orange-500">Voice & IVR</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Transform your customer service with intelligent automated voice systems. 
                Deliver personalized messages and handle complex IVR flows at scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-orange-600 rounded-2xl font-black hover:bg-orange-700 transition-all flex items-center gap-2">
                  <Play size={18} fill="currentColor" /> Listen to Demo
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all">
                  Configure Flow
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="space-y-6">
                {[
                  { icon: <Mic />, title: "Text-to-Speech", val: "Multilingual Support" },
                  { icon: <Settings />, title: "Custom Logic", val: "Visual Flow Builder" },
                  { icon: <Headphones />, title: "Call Recording", val: "HD Voice Quality" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.val}</p>
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
