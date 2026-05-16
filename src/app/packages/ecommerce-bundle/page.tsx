"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, Check, Zap, ArrowRight, CreditCard } from "lucide-react";

export default function EcommerceBundlePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8"
          >
            <ShoppingCart size={14} className="text-orange-400" />
            <span className="text-xs uppercase tracking-widest font-bold text-orange-300">Ready to Sell</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Ecommerce <br />
            <span className="text-orange-500">Full Bundle</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            The ultimate toolkit for online retailers. From store setup 
            to marketing automation, we provide everything you need to sell online.
          </p>

          <div className="max-w-lg mx-auto p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-orange-600 rounded-full text-xs font-black uppercase tracking-widest">
              Complete Store Setup
            </div>
            
            <ul className="space-y-6 text-left mb-12">
              {[
                "Shopify/WooCommerce Store Setup",
                "Payment Gateway Integration",
                "Product & Category SEO",
                "Abandoned Cart Automation",
                "Instagram & Facebook Shop Sync"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <Check className="text-orange-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 bg-orange-600 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-orange-500/20">
              Launch My Store <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
