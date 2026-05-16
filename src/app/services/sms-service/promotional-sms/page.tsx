"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Zap, BarChart3, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PromotionalSMSPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8">
                <Zap size={14} className="text-blue-400" />
                <span className="text-xs uppercase tracking-widest font-bold text-blue-300">Sales Growth Engine</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Promotional <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SMS Marketing</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                Drive instant traffic and sales with our high-speed promotional SMS gateway. 
                98% open rates ensured for your marketing campaigns.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                  Launch Campaign
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all">
                  View Pricing
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center p-12">
                <div className="w-full h-full bg-slate-900/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold">Campaign Performance</h3>
                    <BarChart3 className="text-blue-400" />
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Delivery Rate", value: "99.8%", color: "bg-blue-500" },
                      { label: "Open Rate", value: "98.2%", color: "bg-emerald-500" },
                      { label: "Click Rate", value: "14.5%", color: "bg-purple-500" }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">{stat.label}</span>
                          <span className="font-bold">{stat.value}</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: stat.value }}
                            transition={{ delay: 1 + i * 0.2, duration: 1 }}
                            className={`h-full ${stat.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Enterprise Features</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Instant Delivery", desc: "Our high-throughput gateway ensures your messages land in seconds." },
              { icon: <Users />, title: "Contact Management", desc: "Easily manage thousands of leads with our advanced segmentation." },
              { icon: <MessageSquare />, title: "Personalized SMS", desc: "Use dynamic fields to personalize every message for higher ROI." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-16 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-center relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Scale Your Marketing Today</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Join 500+ businesses growing their revenue with our promotional SMS solutions.
            </p>
            <button className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
