"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Zap, Lock, Code, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function TransactionalSMSPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">Critical Alerts Gateway</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Transactional <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">SMS Solutions</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                Deliver critical OTPs, alerts, and notifications within seconds. 
                Enterprise-grade reliability with full DLT and TRAI compliance.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-emerald-600 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
                  Integrate API
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all">
                  Documentation
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center p-12">
                <div className="w-full h-full bg-slate-900/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold">API Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] text-emerald-500 font-bold">OPERATIONAL</span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-emerald-400 bg-black/40 p-6 rounded-xl border border-white/5 space-y-2">
                    <p>POST /v1/sms/send</p>
                    <p>{"{"}</p>
                    <p className="pl-4">"to": "+91 98XXX XXXX",</p>
                    <p className="pl-4">"template_id": "OTP_123",</p>
                    <p className="pl-4">"vars": {"{ \"otp\": \"4521\" }"}</p>
                    <p>{"}"}</p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Avg Latency</p>
                      <p className="text-xl font-black text-emerald-400">1.2s</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Uptime</p>
                      <p className="text-xl font-black text-emerald-400">99.99%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-emerald-600/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Lock />, title: "Secure OTPs", desc: "Encryption for all sensitive data." },
              { icon: <Zap />, title: "High Priority", desc: "Dedicated routes for alerts." },
              { icon: <Code />, title: "Developer Friendly", desc: "REST APIs in 10+ languages." },
              { icon: <Globe />, title: "India Compliant", desc: "Full DLT & TRAI support." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
