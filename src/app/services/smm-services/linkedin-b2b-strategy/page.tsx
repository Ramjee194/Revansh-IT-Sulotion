"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Target, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { FaLinkedin as Linkedin } from "react-icons/fa";

export default function LinkedInB2BPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-blue-700/20 flex items-center justify-center text-blue-500 mx-auto mb-10 shadow-2xl shadow-blue-500/20"
          >
            <Linkedin size={40} />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            LinkedIn <br />
            <span className="text-blue-600">B2B Strategy</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Dominate the world's largest professional network. We build high-value 
            lead generation machines and thought leadership for B2B brands.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target />, title: "Lead Generation", desc: "Hyper-targeted B2B leads via LinkedIn Ads & outreach." },
              { icon: <Briefcase />, title: "Thought Leadership", desc: "Build authority for your key executives and brand." },
              { icon: <Users />, title: "Employee Advocacy", desc: "Turn your team into a powerful marketing engine." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-8">
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
