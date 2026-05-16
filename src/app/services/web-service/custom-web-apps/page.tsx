"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Database, Zap, Cpu, ArrowRight } from "lucide-react";

export default function CustomWebAppsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Scalable <br />
                <span className="text-blue-500">Custom Web Apps</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
                Build complex, high-performance web applications tailored to your business logic. 
                From SaaS platforms to enterprise dashboards, we deliver robust solutions.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 rounded-2xl font-black hover:bg-blue-700 transition-all">
                  Start Project
                </button>
                <button className="px-8 py-4 border border-white/10 rounded-2xl font-black hover:bg-white/5 transition-all">
                  Our Stack
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Code2 />, title: "Frontend", desc: "Next.js & React" },
                  { icon: <Database />, title: "Backend", desc: "Node.js & Go" },
                  { icon: <Zap />, title: "Speed", desc: "Edge Computing" },
                  { icon: <Cpu />, title: "Scale", desc: "Kubernetes" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
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
