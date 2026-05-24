"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Smartphone, Shield, Zap, CheckCircle2, MessageSquare } from "lucide-react";

export default function SmsPreview() {
  const [message, setMessage] = useState("Hello! This is a test campaign message from Revansh Tech.");
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Zap size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Real-Time Feature</span>
          </motion.div>
          <h2 className="text-xl md:text-3xl font-black mb-6 text-slate-900 dark:text-white uppercase tracking-tight">
            Live SMS <span className="text-amber-700">Simulator</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
            Test your campaign messaging with our realistic preview tool. 
            See exactly how your customers will receive your brand's voice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 dark:bg-white/5 p-12 rounded-[3rem] border border-slate-200 dark:border-white/10">
          
          {/* Editor Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <MessageSquare size={14} />
                Campaign Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={160}
                className="w-full h-40 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-medium focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none shadow-sm"
                placeholder="Enter your message here..."
              />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className={message.length > 140 ? "text-orange-500" : "text-slate-400"}>
                  {message.length} / 160 Characters
                </span>
                <span className="text-slate-400">1 Credit / Recipient</span>
              </div>
            </div>

            <button
              onClick={handleSend}
              disabled={isSent}
              className="w-full py-5 rounded-2xl bg-amber-700 text-white font-black text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              {isSent ? (
                <>
                  <CheckCircle2 size={20} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Test Preview
                </>
              )}
            </button>

            <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <Shield size={14} />
                GDPR Compliant
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <Smartphone size={14} />
                All Carriers Supported
              </div>
            </div>
          </div>

          {/* Preview Side */}
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
              {/* Phone Status Bar */}
              <div className="absolute top-0 w-full h-10 flex justify-between px-6 items-center z-20">
                <span className="text-[10px] font-bold text-white">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-2 rounded-sm border border-white/50" />
                </div>
              </div>

              {/* Message UI */}
              <div className="pt-16 px-4 h-full bg-[#f0f0f0] dark:bg-slate-900">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today 9:41 AM</span>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    key={message}
                    className="max-w-[85%] bg-white dark:bg-blue-600 p-4 rounded-2xl rounded-tl-none shadow-sm"
                  >
                    <p className="text-sm text-slate-900 dark:text-white leading-relaxed font-medium">
                      {message || "Type a message to preview..."}
                    </p>
                  </motion.div>

                  <AnimatePresence>
                    {isSent && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-2"
                      >
                        <CheckCircle2 size={12} />
                        Delivered
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
