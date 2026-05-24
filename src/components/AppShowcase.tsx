"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Play, Apple, Star, Download, ShieldCheck, Zap, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const liveMessages = [
  { id: 1, phone: "+91 98XXX XXX01", status: "Delivered", time: "Just now" },
  { id: 2, phone: "+91 70XXX XXX42", status: "Sent", time: "2s ago" },
  { id: 3, phone: "+91 88XXX XXX99", status: "Delivered", time: "5s ago" },
];

export default function AppShowcase() {
  const [activeMessage, setActiveMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % liveMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex gap-1 text-xl md:text-3xl font-black mb-8   uppercase"
            >
              Manage Your  {""}<br />
              <span className=" text-amber-500 ">Campaigns</span> 
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-blue-50/80 mb-12 max-w-xl leading-relaxed font-medium"
            >
              Experience the power of real-time monitoring. Our mobile dashboard provides 
              instant insights into delivery rates, latency, and global throughput.
            </motion.p>

            {/* Interactive Live Tracker Mockup */}
            <div className="p-8 rounded-[2rem] bg-black/20 backdrop-blur-xl border border-white/10 mb-16 max-w-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Live Delivery Stream</span>
                </div>
                <Zap size={14} className="text-blue-200" />
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMessage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-200">
                        <Send size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{liveMessages[activeMessage].phone}</p>
                        <p className="text-[10px] opacity-60">{liveMessages[activeMessage].time}</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-[10px] font-black text-green-400">
                      {liveMessages[activeMessage].status}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* App Buttons */}
            <div className="flex flex-wrap gap-5 mb-16">
              <button className="flex items-center gap-4 px-8 py-4 bg-white text-indigo-900 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
                <Play size={24} className="fill-current" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest leading-none">Get it on</p>
                  <p className="text-xl leading-none mt-1">Google Play</p>
                </div>
              </button>

              <button className="flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
                <Apple size={24} className="fill-current" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest leading-none">Download on the</p>
                  <p className="text-xl leading-none mt-1">App Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            {/* Floating Live Update Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 md:right-0 z-30 p-5 rounded-2xl bg-white text-indigo-900 shadow-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Status</p>
                <p className="text-sm font-black">All Nodes Online</p>
              </div>
            </motion.div>

            {/* Phone Case */}
            <div className="relative mx-auto w-[320px] h-[640px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
              
              <img 
                src="/revansh_mobile_app_screen_1778923034781.png" 
                alt="App Screenshot" 
                className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
