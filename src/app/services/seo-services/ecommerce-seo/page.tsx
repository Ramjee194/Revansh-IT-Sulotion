"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, TrendingUp, Search, Layers, ArrowRight } from "lucide-react";

export default function EcommerceSEOPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Scale Your <br />
                <span className="text-orange-500">Online Store</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                Rank your products at the top of search results. Our specialized E-commerce 
                SEO strategy focuses on category optimization and high-intent keyword targeting.
              </p>
              <button className="px-10 py-5 bg-orange-600 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all flex items-center gap-3">
                Grow My Sales <ArrowRight size={20} />
              </button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Search />, title: "Product SEO", val: "Optimized Descriptions" },
                { icon: <Layers />, title: "Category SEO", val: "Faceted Navigation" },
                { icon: <TrendingUp />, title: "ROI Driven", val: "Conversion Focus" },
                { icon: <ShoppingBag />, title: "Store Sync", val: "Feed Optimization" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-[10px] text-gray-500">{item.val}</p>
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
