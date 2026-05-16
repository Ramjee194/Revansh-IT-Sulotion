"use client";

import { motion } from "framer-motion";
import { 
  RiSearchEyeLine, 
  RiLightbulbFlashLine, 
  RiRocket2Line, 
  RiPieChart2Line,
  RiSettings4Line
} from "react-icons/ri";

const steps = [
  { 
    title: "Discovery", 
    desc: "We analyze your business ecosystem to find growth opportunities.",
    icon: <RiSearchEyeLine className="w-8 h-8" />,
    label: "Phase 01"
  },
  { 
    title: "Strategy", 
    desc: "Crafting a high-precision roadmap tailored to your specific goals.",
    icon: <RiLightbulbFlashLine className="w-8 h-8" />,
    label: "Phase 02"
  },
  { 
    title: "Execution", 
    desc: "High-speed development and campaign launch with expert support.",
    icon: <RiRocket2Line className="w-8 h-8" />,
    label: "Phase 03"
  },
  { 
    title: "Optimization", 
    desc: "Continuous monitoring and data-driven performance tuning.",
    icon: <RiSettings4Line className="w-8 h-8" />,
    label: "Phase 04"
  },
  { 
    title: "Scale", 
    desc: "Expanding your digital reach to dominate the global market.",
    icon: <RiPieChart2Line className="w-8 h-8" />,
    label: "Phase 05"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] rounded-full -mr-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.2em] text-sm mb-4"
            >
              Our Workflow
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-4xl font-black tracking-tight uppercase"
            >
              How We <span className="text-indigo-600">Work</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 font-bold max-w-sm"
          >
            A systematic engineering approach to deliver consistent, high-impact digital solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col items-start text-left overflow-hidden">
                {/* Background Label */}
                <div className="absolute top-4 right-6 text-slate-100 dark:text-slate-800 text-5xl font-black italic -rotate-12 group-hover:text-indigo-500/5 transition-colors">
                  0{i + 1}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                
                <div className="mt-auto">
                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">{step.label}</p>
                  <h3 className="text-xl font-black mb-3 uppercase group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Arrow/Line for Desktop (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-indigo-500 rotate-45 z-20 -translate-y-1/2 rounded-sm border-2 border-white dark:border-slate-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

