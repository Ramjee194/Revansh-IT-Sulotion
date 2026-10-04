"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ShieldCheck, 
  Search, 
  Palette, 
  Code, 
  MessageSquare, 
  Share2, 
  ArrowRight, 
  CheckCircle2,
  Server,
  Sparkles
} from "lucide-react";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Cyber Security & Threat Defense",
      desc: "Vulnerability assessment (VAPT), cloud firewall configuration, zero-trust data encryption, and compliance audits for enterprise systems.",
      href: "/services/cyber-security",
      badge: "Security",
      features: [
        "VAPT & Penetration Testing",
        "Cloud Network & WAF Defense",
        "ISO 27001 & SOC 2 Compliance",
        "24/7 Security Threat Monitoring"
      ]
    },
    {
      title: "SEO Services & Organic Growth",
      desc: "Technical site audits, Core Web Vitals optimization, semantic keyword mapping, and ethical link acquisition to earn sustainable search traffic.",
      href: "/services/seo-services",
      badge: "Organic Growth",
      features: [
        "Technical SEO & Core Web Vitals",
        "On-Page Optimization & Schema",
        "Local SEO & Google Business Profile",
        "High-Authority Link Building"
      ]
    },
    {
      title: "Graphic Design & Visual Identity",
      desc: "Distinctive logo systems, brand guidelines, responsive UI/UX prototypes in Figma, and print-ready marketing collateral.",
      href: "/services/graphic-design",
      badge: "Creative",
      features: [
        "Brand Identity & Vector Logos",
        "UI/UX Design Systems (Figma)",
        "Social Creatives & Ad Banners",
        "Print Collateral & Pitch Decks"
      ]
    },
    {
      title: "Web & Custom App Development",
      desc: "Full-stack software engineering using Next.js, React, Node.js, and cloud backends tailored for scale, security, and fast load times.",
      href: "/services/web-service",
      badge: "Engineering",
      features: [
        "Modern Responsive Web Apps",
        "Custom APIs & Backend Systems",
        "E-Commerce Solutions (Shopify & Custom)",
        "Progressive Web Apps & Mobile Apps"
      ]
    },
    {
      title: "SMS & Messaging Solutions",
      desc: "High-throughput transactional OTP delivery, promotional messaging, WhatsApp Business API integration, and automated voice services.",
      href: "/services/sms-service",
      badge: "Communications",
      features: [
        "Transactional & OTP Messaging",
        "WhatsApp Business API Integration",
        "Promotional Broadcast Campaigns",
        "Interactive Voice Response (IVR)"
      ]
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: "Performance ad campaigns across Meta and Google, short-form video strategies, content calendars, and targeted audience retargeting.",
      href: "/services/smm-services",
      badge: "Marketing",
      features: [
        "Meta & Google Paid Advertising",
        "Content Calendar & Asset Production",
        "Influencer & B2B Outreach",
        "Analytics & Campaign Attribution"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border bg-muted/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
            Our Core Capabilities
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            IT Services &amp; <span className="text-primary">Engineering Solutions</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From technical SEO and cyber defense to full-stack web engineering and brand design, we build reliable digital systems for businesses.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="btn-champagne text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Get Project Consultation
            </Link>
            <Link
              href="/packages"
              className="px-6 py-3 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Services Hub Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <div 
                key={index} 
                className="p-7 rounded-2xl border border-border bg-card hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground group-hover:text-[#064E3B] dark:group-hover:text-[#F8E7C9] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#F8E7C9] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] dark:text-[#F8E7C9] group-hover:underline"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Need a custom service combination?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            We work with startups, growing brands, and established enterprises to deliver targeted IT, SEO, and design solutions.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Discuss Your Scope <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
