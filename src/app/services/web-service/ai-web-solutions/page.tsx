"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Brain, Sparkles, MessageSquare, Bot, ArrowRight } from "lucide-react";

export default function AIWebSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
          >
            <Brain size={14} className="text-purple-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-purple-300">Intelligent Digital Transformation</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            AI-Powered <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Web Solutions</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Integrate next-generation AI into your web ecosystem. From LLM chatbots 
            to predictive analytics and smart automation, we make your business future-ready.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Bot />, title: "Custom LLMs", desc: "Train AI models on your own business data for internal or customer use." },
              { icon: <Sparkles />, title: "Smart Automation", desc: "Automate repetitive tasks with intelligent decision-making logic." },
              { icon: <Cpu />, title: "Predictive Analytics", desc: "Turn raw data into actionable insights with ML integration." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
