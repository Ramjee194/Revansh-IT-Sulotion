"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Customer Support Platform",
    category: "AI & Automation",
    problem: "Inefficient manual customer support leading to high churn.",
    solution: "Generative AI platform with custom NLP for automated resolution.",
    impact: "70% reduction in response time.",
    tech: ["Next.js", "Python", "OpenAI", "Redis"],
    image: "/ai_support_dashboard_1778922048539.png",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Real Estate Marketplace",
    category: "PropTech",
    problem: "Fragmented property listings and lack of transparent valuation.",
    solution: "Blockchain-backed marketplace with AI valuation engine.",
    impact: "40% increase in lead conversion.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    image: "/real_estate_marketplace_1778922069016.png",
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "Smart Building Dashboard",
    category: "IoT",
    problem: "High energy wastage in commercial buildings.",
    solution: "IoT sensors and real-time dashboard for energy optimization.",
    impact: "25% energy savings annually.",
    tech: ["Vue.js", "MQTT", "Go", "InfluxDB"],
    image: "/smart_building_iot_1778922090777.png",
    color: "from-orange-600 to-amber-600"
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-[#030712] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Our Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
               <span className="text-blue-600">Case Study</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl">
              Real-world digital transformation results delivered for global enterprises across various industries.
            </p>
          </div>
          <button className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl active:scale-95">
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                
                {/* Badge Overlay */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10">
                <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">The Problem</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">Our Solution</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] px-3 py-1.5 bg-slate-200/50 dark:bg-white/5 rounded-lg font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-slate-300/50 dark:border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black italic">
                    <TrendingUp size={18} />
                    <span className="text-base tracking-tight">{project.impact}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
