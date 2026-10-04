"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  AlertTriangle, 
  FileCheck2, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Terminal,
  KeyRound,
  Network
} from "lucide-react";
import { motion } from "framer-motion";

export default function CyberSecurityPage() {
  const securityCapabilities = [
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "VAPT & Penetration Testing",
      desc: "Comprehensive automated and manual vulnerability assessment for web apps, mobile APIs, and cloud networks before attackers find them."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Encryption & Access Control",
      desc: "End-to-end data encryption at rest and in transit with strict zero-trust identity and role-based access management (RBAC)."
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Cloud & Network Defense",
      desc: "Web application firewalls (WAF), automated DDoS protection, VPC peering security, and continuous port scanning on AWS, GCP, and Azure."
    },
    {
      icon: <FileCheck2 className="w-5 h-5" />,
      title: "Security Audits & Compliance",
      desc: "Readiness audits and documentation assistance for ISO 27001, SOC 2 Type II, GDPR, and Indian DPDP Act regulatory standards."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "24/7 Threat Monitoring",
      desc: "Real-time log analysis, intrusion detection (IDS/IPS), and immediate automated containment alerts for suspicious access patterns."
    },
    {
      icon: <KeyRound className="w-5 h-5" />,
      title: "API & Backend Hardening",
      desc: "Rate limiting, JWT token validation, SQL injection prevention, and CORS policy enforcement for enterprise backend endpoints."
    }
  ];

  const auditSteps = [
    { step: "01", title: "Discovery & Scope", desc: "Identify all digital assets, endpoints, public IPs, and data pipelines." },
    { step: "02", title: "Vulnerability Scan", desc: "Run authenticated and unauthenticated penetration tests and code scans." },
    { step: "03", title: "Risk Remediation", desc: "Deliver prioritized patch guidance, code fixes, and architectural adjustments." },
    { step: "04", title: "Verification & Cert", desc: "Retest patched vulnerabilities and issue an executive security summary report." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border bg-muted/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
            Enterprise Security
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Cyber Security &amp; <span className="text-primary">Threat Defense</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Protect your applications, cloud infrastructure, and client data with practical penetration testing, compliance audits, and zero-trust safeguards.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="btn-champagne text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Request Security Audit
            </Link>
            <a
              href="tel:+918404827541"
              className="px-6 py-3 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
            >
              Speak to Security Consultant
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Comprehensive Security Services
            </h2>
            <p className="text-sm text-muted-foreground">
              End-to-end protective measures for modern web applications and cloud deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all shadow-sm group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-16 bg-muted/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Our Security Audit Methodology
            </h2>
            <p className="text-sm text-muted-foreground">
              A structured step-by-step approach to assessing and hardening your systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditSteps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border space-y-2">
                <span className="text-2xl font-black text-[#064E3B] dark:text-[#F8E7C9]">
                  {s.step}
                </span>
                <h4 className="font-bold text-sm text-foreground">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#064E3B] text-[#F8E7C9] border border-[#F8E7C9]/30 text-center space-y-4 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F8E7C9]">
              Concerned About Vulnerabilities in Your Stack?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8E7C9]/85 max-w-xl mx-auto leading-relaxed">
              Schedule a confidential preliminary vulnerability assessment with our security team. We provide actionable remediations without disruption to your live users.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F8E7C9] text-[#064E3B] font-bold text-xs uppercase tracking-wider hover:bg-[#ECD3A7] transition-all"
              >
                <span>Schedule Security Consultation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
