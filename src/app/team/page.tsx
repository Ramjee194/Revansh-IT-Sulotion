"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAiWidget from "@/components/FloatingAiWidget";
import Link from "next/link";
import { Mail, Users, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ram (Ramjee)",
    role: "Founder & Managing Director / CEO",
    bio: "Visionary founder steering Orbous towards high-performance enterprise software, scalable telecom SMS gateways, and cloud architecture across India and global markets.",
    image: "/team_ram.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "ramjee@orbous.com",
    specialty: "Strategy & Cloud Leadership"
  },
  {
    name: "Priyam Kumar Dubey",
    role: "Technical Lead & Solutions Architect",
    bio: "Lead architect overseeing distributed microservices, low-latency API pipelines, Next.js frameworks, and high-concurrency database engineering with robust fault tolerance.",
    image: "/team_priyam.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "priyam@orbous.com",
    specialty: "System Architecture & Scaling"
  },
  {
    name: "Ankit Kumar",
    role: "Digital & Content Management Lead",
    bio: "Strategist driving multi-channel digital campaigns, content management pipelines, enterprise SEO optimization, and brand engagement frameworks.",
    image: "/team_ankit.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "ankit@orbous.com",
    specialty: "Digital & Content Management"
  },
  {
    name: "Shamshul Ansari",
    role: "Full Stack Developer",
    bio: "Full-stack specialist engineering scalable web applications in Next.js, Node.js, and TypeScript with secure database architecture and RESTful/GraphQL APIs.",
    image: "/team_shamshul.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "shamshul@orbous.com",
    specialty: "Full Stack Development & APIs"
  },
  {
    name: "Dhiraj Kumar Yadav",
    role: "Software Developer",
    bio: "Core software developer creating performant backend algorithms, third-party integrations, high-speed transactional logic, and responsive UI components.",
    image: "/team_dhiraj.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "dhiraj@orbous.com",
    specialty: "Software Engineering & Systems"
  },
  {
    name: "Abhishek",
    role: "Business Development Executive (BDE)",
    bio: "Connecting enterprise clients with tailored IT, telecom SMS, and custom software solutions while ensuring seamless project onboarding and client satisfaction.",
    image: "/team_abhishek.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "abhishek@orbous.com",
    specialty: "B2B Growth & Enterprise Relations"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-border bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Users size={13} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Core Leadership</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Meet Our <span className="text-primary">Engineering Team</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            A collective of senior software engineers, cloud architects, and strategic operators dedicated to scaling digital platforms.
          </motion.p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 bg-white dark:bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-slate-50 dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-550 flex flex-col h-full"
              >
                {/* Profile Image with Overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-70" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5">
                      <Sparkles size={9} className="text-yellow-400" />
                      {member.specialty}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Handles */}
                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center gap-3 mt-8">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-700 dark:text-slate-350 transition-colors shadow-sm"
                    >
                      <FaLinkedin size={15} />
                    </Link>
                    <Link
                      href={member.github}
                      target="_blank"
                      className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-slate-900 dark:hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-700 dark:text-slate-350 transition-colors shadow-sm"
                    >
                      <FaGithub size={15} />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary hover:text-white flex items-center justify-center text-slate-700 dark:text-slate-350 transition-colors shadow-sm"
                    >
                      <Mail size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
            <ShieldCheck size={28} />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">Our Architectural Promise</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
              We stand by our code. Every engineer at Orbous operates under elite development guidelines: test-driven development, multi-stage code audits, and strict compliance with global security frameworks.
            </p>
          </div>

          <div>
            <Link href="/#contact" className="btn-premium px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">
              Work With Us <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAiWidget />
    </main>
  );
}
