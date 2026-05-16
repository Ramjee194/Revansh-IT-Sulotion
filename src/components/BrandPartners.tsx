"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "WhatsApp", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" }
];

export default function BrandPartners() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-16 bg-indigo-50 dark:bg-indigo-950/30 px-6 py-2 rounded-full border border-indigo-100 dark:border-indigo-900/50"
          >
            Strategic Partnerships
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-16 gap-y-12 items-center justify-items-center w-full">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full h-16 flex items-center justify-center group"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-[140px] max-h-[45px] object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 dark:invert dark:brightness-200"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

