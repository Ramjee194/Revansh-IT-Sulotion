"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  Users,
  Target,
  Rocket,
  Award,
  ArrowRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border bg-muted/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 dark:bg-[#F8E7C9]/10 border border-[#064E3B]/20 dark:border-[#F8E7C9]/20"
          >
            <Sparkles size={14} className="text-[#064E3B] dark:text-[#F8E7C9]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
              About Orbous IT &amp; Software Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Engineering scalable software,{" "}
            <span className="text-[#064E3B] dark:text-[#F8E7C9]">mobile apps &amp; enterprise AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Headquartered at DLF Cyber City, Gurgaon, Orbous is a modern technology company dedicated to building bespoke digital products, high-availability cloud platforms, and intelligent AI systems for growing businesses and global enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="btn-champagne text-xs font-bold uppercase tracking-wider"
            >
              Get In Touch With Us
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border bg-background shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 flex items-center justify-center text-[#064E3B] dark:text-[#F8E7C9]">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold font-display">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To empower companies with bulletproof software engineering, elegant UI/UX design, and production-grade artificial intelligence that delivers measurable business growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 flex items-center justify-center text-[#064E3B] dark:text-[#F8E7C9]">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold font-display">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To be the most trusted technology and AI solutions partner for enterprises, providing innovation, security, and world-class digital execution.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 flex items-center justify-center text-[#064E3B] dark:text-[#F8E7C9]">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold font-display">Engineering Standard</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We refuse shortcuts. We follow clean architectural patterns, comprehensive automated testing, and security-first development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 md:py-28 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
              What We Do Best
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold">
              Core Technical Competencies
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              End-to-end digital engineering from initial conception to global cloud deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Software & Web Development",
                desc: "Custom SaaS platforms, client portals, microservices, and enterprise web applications engineered for speed and scale.",
                href: "/services/web-service/custom-web-apps",
              },
              {
                icon: Cpu,
                title: "AI & Machine Learning",
                desc: "LLM integration, autonomous workflow automation, predictive intelligence, and bespoke AI applications.",
                href: "/services/web-service/ai-web-solutions",
              },
              {
                icon: Layers,
                title: "Mobile App Development",
                desc: "Native iOS, Android, and cross-platform Flutter/React Native mobile apps built with fluid animations.",
                href: "/services/web-service/mobile-app-development",
              },
              {
                icon: ShieldCheck,
                title: "Cyber Security & VAPT",
                desc: "Penetration testing, cloud defense, vulnerability assessments, and ISO/SOC compliance audits.",
                href: "/services/cyber-security",
              },
              {
                icon: Globe2,
                title: "SEO & Growth Marketing",
                desc: "Technical SEO audits, search snippet schema, Core Web Vitals optimization, and high-impact digital campaigns.",
                href: "/services/seo-services",
              },
              {
                icon: Users,
                title: "Dedicated Engineering Teams",
                desc: "Augment your in-house teams with top-tier developers, designers, and cloud architects.",
                href: "/contact",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-card border border-border hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 flex items-center justify-center text-[#064E3B] dark:text-[#F8E7C9]">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold group-hover:text-[#064E3B] dark:group-hover:text-[#F8E7C9] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-border">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] dark:text-[#F8E7C9] hover:underline"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DLF Cyber City Location Banner */}
      <section className="py-16 md:py-20 bg-muted/20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 flex items-center justify-center text-[#064E3B] dark:text-[#F8E7C9] mx-auto">
            <MapPin size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
            Headquartered at DLF Cyber City, Gurgaon
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building 10, Tower B, Level 8, DLF Cyber City, Phase 2, Gurugram, Haryana 122016.
            We work with partners across India, North America, Europe, and the Middle East.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Schedule a Meeting</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
