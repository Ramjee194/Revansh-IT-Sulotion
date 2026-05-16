"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Server, ShieldCheck, Zap, LifeBuoy, Cloud, ArrowRight } from "lucide-react";

export default function CloudHostingCarePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/10 mb-8"
          >
            <Cloud size={14} className="text-teal-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-teal-300">99.9% Uptime Commitment</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Cloud Hosting <br />
            <span className="text-teal-500">& Care</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Enterprise-grade hosting with managed support. We handle the technical 
            complexity so you can focus on growing your business.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Server />, title: "Managed Cloud", desc: "AWS, Azure, and Google Cloud." },
              { icon: <ShieldCheck />, title: "Security First", desc: "DDoS protection and SSL." },
              { icon: <Zap />, title: "Edge Speed", desc: "Global CDN delivery." },
              { icon: <LifeBuoy />, title: "24/7 Care", desc: "Priority technical support." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
