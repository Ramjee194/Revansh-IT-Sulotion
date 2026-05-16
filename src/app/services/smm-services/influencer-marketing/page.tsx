"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Star, Target, Share2, ArrowRight, Zap } from "lucide-react";

export default function InfluencerMarketingPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Authority <br />
                <span className="text-purple-500">Influencer</span> <br />
                Marketing
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Partner with the right voices. We connect your brand with influencers 
                who align with your values and have a real impact on your target audience.
              </p>
              <button className="px-10 py-5 bg-purple-600 rounded-2xl font-black text-lg hover:bg-purple-700 transition-all flex items-center gap-3">
                Find Influencers <ArrowRight size={20} />
              </button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users />, title: "Macro & Micro", desc: "Access to 50k+ vetted creators." },
                { icon: <Star />, title: "Brand Safety", desc: "Rigorous vetting for every partner." },
                { icon: <Target />, title: "Strategy", desc: "Tailored campaigns for maximum ROI." },
                { icon: <Share2 />, title: "Whitelisting", desc: "Amplify content with targeted ads." }
              ].map((feat, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{feat.title}</h4>
                    <p className="text-[10px] text-gray-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
