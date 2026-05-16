"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Building2, 
  GraduationCap, 
  Wallet, 
  ShoppingCart, 
  Truck, 
  Factory, 
  Zap 
} from "lucide-react";

const industries = [
  { icon: <HeartPulse className="w-6 h-6" />, title: "Healthcare" },
  { icon: <Building2 className="w-6 h-6" />, title: "Real Estate" },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Education" },
  { icon: <Wallet className="w-6 h-6" />, title: "Fintech" },
  { icon: <ShoppingCart className="w-6 h-6" />, title: "E-commerce" },
  { icon: <Truck className="w-6 h-6" />, title: "Logistics" },
  { icon: <Factory className="w-6 h-6" />, title: "Manufacturing" },
  { icon: <Zap className="w-6 h-6" />, title: "Smart Infrastructure" }
];

export default function Industries() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground">Expert solutions tailored for diverse industrial sectors.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-muted border border-border flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {industry.icon}
              </div>
              <h3 className="font-bold">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
