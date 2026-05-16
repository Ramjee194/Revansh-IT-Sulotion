"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, CreditCard, Box, TrendingUp, ArrowRight } from "lucide-react";

export default function EcommerceSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-orange-600/20 flex items-center justify-center text-orange-500 mx-auto mb-10 shadow-2xl shadow-orange-500/20"
          >
            <ShoppingCart size={40} />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            High-Conversion <br />
            <span className="text-orange-500">E-commerce</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            From Shopify to Custom Headless Commerce. We build fast, secure, 
            and scalable online stores that maximize your sales and customer loyalty.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <CreditCard />, title: "Secure Payments", desc: "Seamless integration with global payment gateways." },
              { icon: <Box />, title: "Inventory Sync", desc: "Automated stock management and multi-channel sync." },
              { icon: <TrendingUp />, title: "Growth Ready", desc: "Built-in SEO and performance optimization for scale." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto mb-6">
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
