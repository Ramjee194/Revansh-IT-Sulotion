"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Search, 
  TrendingUp, 
  Globe2, 
  FileText, 
  Link2, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  MapPin, 
  ShoppingBag 
} from "lucide-react";

export default function SEOServicesPage() {
  const seoModules = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Technical SEO Audits",
      desc: "Fix indexing blocks, improve Core Web Vitals (LCP, INP, CLS), implement JSON-LD Schema markup, and optimize robots.txt.",
      href: "/services/seo-services/technical-seo"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "On-Page & Content SEO",
      desc: "Targeted keyword research, semantic search clustering, meta tag optimization, and structured heading hierarchies that convert.",
      href: "/services/seo-services/content-marketing"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Local SEO & Map Pack",
      desc: "Optimize your Google Business Profile, build local citations, and capture high-intent localized search queries in your target city.",
      href: "/services/seo-services/local-seo"
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      title: "High-Authority Link Building",
      desc: "White-hat editorial backlinks from verified industry publications to grow domain authority and search visibility safely.",
      href: "/services/seo-services/link-building"
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "E-Commerce SEO",
      desc: "Structured product catalogs, category filters, schema rich snippets, and marketplace optimization for Shopify and WooCommerce.",
      href: "/services/seo-services/ecommerce-seo"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Comprehensive SEO Audit",
      desc: "Full 100-point crawl identifying broken links, duplicate content, thin pages, and missed ranking opportunities.",
      href: "/services/seo-services/seo-audit"
    }
  ];

  const deliverables = [
    "Complete Technical Audit & Crawl Log Analysis",
    "High-Intent Keyword Map & Ranking Strategy",
    "Title, Meta & OpenGraph Optimization",
    "Clean JSON-LD Structured Data Implementation",
    "Page Speed & Core Web Vitals Fixes",
    "Transparent Monthly Google Analytics & Search Console Reports"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border bg-muted/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
            Search Engine Optimization
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            SEO Services &amp; <span className="text-primary">Search Visibility</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data-backed technical optimization, quality content architecture, and white-hat link building to capture high-intent search traffic and grow organic revenue.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="btn-champagne text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/packages/seo-yearly-plan"
              className="px-6 py-3 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
            >
              View SEO Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Complete SEO Capabilities
            </h2>
            <p className="text-sm text-muted-foreground">
              Everything required to rank predictably on Google search for your target keywords.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoModules.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-[#064E3B] dark:group-hover:text-[#F8E7C9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border flex items-center text-xs font-bold text-[#064E3B] dark:text-[#F8E7C9] gap-1 group-hover:underline">
                  <span>Explore Service</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section className="py-16 bg-muted/10 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              What We Deliver Every Month
            </h2>
            <p className="text-sm text-muted-foreground">
              Clear actions, zero vanity metrics, and direct accountability for search growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
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
              Ready to Improve Your Organic Rankings?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8E7C9]/85 max-w-xl mx-auto leading-relaxed">
              Contact our search marketing desk for a complimentary technical website review and targeted keyword roadmap.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F8E7C9] text-[#064E3B] font-bold text-xs uppercase tracking-wider hover:bg-[#ECD3A7] transition-all"
              >
                <span>Request Free SEO Review</span>
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
