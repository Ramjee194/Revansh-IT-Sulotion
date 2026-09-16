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
    name: "Devansh Ramjee",
    role: "Founder & CEO",
    bio: "Visionary leader driving Orbous towards engineering scalable, high-performance IT solutions for global enterprises. Passionate about software craftsmanship and AI integration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "devansh@orbous.com",
    specialty: "Strategy & Operations"
  },
  {
    name: "Amit Sharma",
    role: "Chief Technology Officer",
    bio: "System architect specializing in cloud infrastructure, databases, and microservices. Amit ensures Orbous solutions remain highly available and fault-tolerant.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "amit@orbous.com",
    specialty: "High-Availability Infrastructure"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Engineering",
    bio: "Next.js core contributor and distributed systems expert. Sarah leads our development pods in building pixel-perfect frontends and solid backend services.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "sarah@orbous.com",
    specialty: "Next.js & Kubernetes"
  },
  {
    name: "Elena Rostova",
    role: "VP of Growth & SEO",
    bio: "Marketing genius with an engineering mindset. Elena crafts high-converting campaign structures, viral hooks, and dominates search indexing patterns globally.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "elena@orbous.com",
    specialty: "Algorithmic Marketing"
  },
  {
    name: "Marcus Aurelius",
    role: "Head of Global Client Relations",
    bio: "A strategic communication specialist coordinating enterprise integrations and client satisfaction across Europe and North America.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "marcus@orbous.com",
    specialty: "Client Relations & Scaling"
  },
  {
    name: "Rajesh Nair",
    role: "Principal AI Scientist",
    bio: "Specialist in natural language processing and agentic modeling. Rajesh leads the algorithmic development of our conversational support layers.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "rajesh@orbous.com",
    specialty: "NLP & LLM Tuning"
  },
  {
    name: "Chloe Mercer",
    role: "Senior UI/UX Architect",
    bio: "Creating responsive, interactive web interfaces with micro-animations. Chloe focuses on conversion rate optimization and premium visual layouts.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "chloe@orbous.com",
    specialty: "Human-Centered Design"
  },
  {
    name: "Vikram Malhotra",
    role: "Lead DevOps Engineer",
    bio: "Ensuring container reliability and zero-downtime deployments. Vikram manages our multi-region Kubernetes clusters and automated CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "vikram@orbous.com",
    specialty: "DevOps & Cloud Security"
  },
  {
    name: "Lisa Vance",
    role: "Senior SEO Strategist",
    bio: "Analyzing search intent and optimizing technical page indices. Lisa has successfully scaled organic search visibility for dozens of international startups.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "lisa@orbous.com",
    specialty: "Technical SEO Audit"
  },
  {
    name: "David Vance",
    role: "Quality Assurance Lead",
    bio: "Creating automated end-to-end testing suites to ensure bulletproof software. David tests for load capacity, visual regressions, and security compliance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "david@orbous.com",
    specialty: "Automated Testing & QA"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
