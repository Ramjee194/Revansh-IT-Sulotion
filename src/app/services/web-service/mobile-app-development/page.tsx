"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Tablet, Zap, Globe, SmartphoneNfc, AppWindow } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Native & Hybrid <br />
                <span className="text-rose-500">Mobile Apps</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Bring your business to your customers' pockets. We develop high-performance 
                iOS and Android apps using Flutter, React Native, and Native Swift/Kotlin.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-rose-600 rounded-2xl font-black hover:bg-rose-700 transition-all">
                  App Store Launch
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all">
                  Our Portfolio
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] max-w-sm mx-auto rounded-[3.5rem] bg-slate-900 border-[8px] border-white/5 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-purple-500/20" />
              <div className="p-8 space-y-8">
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-12" />
                {[
                  { icon: <Smartphone />, title: "iOS Development", val: "Swift & SwiftUI" },
                  { icon: <SmartphoneNfc />, title: "Android Development", val: "Kotlin & Jetpack" },
                  { icon: <AppWindow />, title: "Cross-Platform", val: "Flutter & React Native" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-[10px] text-gray-500">{item.val}</p>
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
