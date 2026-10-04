"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Palette, 
  Layers, 
  Layout, 
  FileText, 
  Sparkles, 
  Presentation, 
  Printer, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  PenTool,
  MonitorSmartphone
} from "lucide-react";

export default function GraphicDesignPage() {
  const designCapabilities = [
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Brand Identity & Logo Design",
      desc: "Custom vector logos, visual guidelines, color systems, and typography pairings built to give your company an instantly recognizable market identity."
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      title: "UI/UX & Web Interface Design",
      desc: "Responsive web layouts, intuitive mobile interfaces, wireframes, and scalable component systems designed in Figma for seamless developer handoff."
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Marketing & Social Creatives",
      desc: "High-impact social media creatives, ad banners (Meta, Google, LinkedIn), carousel posts, and promotional assets tuned for maximum engagement."
    },
    {
      icon: <Presentation className="w-5 h-5" />,
      title: "Pitch Decks & Presentations",
      desc: "Professional investor decks, sales presentations, and corporate keynotes structured with clean charts, iconography, and clear visual hierarchy."
    },
    {
      icon: <Printer className="w-5 h-5" />,
      title: "Print & Corporate Collateral",
      desc: "Print-ready CMYK designs for business cards, brochures, annual reports, company profiles, roll-up banners, and corporate event stationery."
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Packaging & Label Design",
      desc: "Retail-ready product packaging, die-cut labels, box mockups, and merchandise branding with complete print manufacturing specifications."
    }
  ];

  const designProcess = [
    { 
      step: "01", 
      title: "Discovery & Creative Brief", 
      desc: "We analyze your audience, industry landscape, visual preferences, and project goals before sketching any direction." 
    },
    { 
      step: "02", 
      title: "Concept Exploration", 
      desc: "Our designers produce distinct concept directions, rough layouts, and mood boards for your direct review." 
    },
    { 
      step: "03", 
      title: "Refinement & Feedback", 
      desc: "We incorporate your feedback, fine-tune typography, adjust spacing, and harmonize the color balance." 
    },
    { 
      step: "04", 
      title: "Production & File Handoff", 
      desc: "You receive organized master files in Figma, vector formats (.AI, .SVG, .EPS), and web-optimized exports." 
    }
  ];

  const deliverables = [
    "Full intellectual property ownership & commercial usage rights",
    "Organized Figma design systems with auto-layout components",
    "100% scalable vector master files (.AI, .EPS, .SVG, .PDF)",
    "Web-optimized raster assets in WebP, PNG, and JPEG",
    "Print-ready CMYK files with crop marks and bleed margins",
    "Brand guideline document detailing colors, fonts, and safe zones"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border bg-muted/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
            Creative &amp; Visual Design
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Graphic Design &amp; <span className="text-primary">Brand Identity</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional graphic design, cohesive brand systems, and UI/UX layouts created by experienced designers to establish credibility and capture audience attention.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="btn-champagne text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Start a Design Project
            </Link>
            <Link
              href="/#portfolio"
              className="px-6 py-3 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Design Capabilities</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              From fresh corporate identities to everyday digital marketing assets, we cover the full creative spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designCapabilities.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#064E3B]/10 dark:bg-[#F8E7C9]/10 text-[#064E3B] dark:text-[#F8E7C9] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24 border-b border-border bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#064E3B" }}>How We Work</h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              A transparent, structured workflow designed to deliver results on schedule without unnecessary back-and-forth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-border bg-background relative space-y-3 shadow-sm"
              >
                <span className="text-2xl font-black text-[#064E3B]/30 dark:text-[#F8E7C9]/30 font-mono">
                  {item.step}
                </span>
                <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Checklist & Tools */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
                Professional Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Everything You Need For Consistent Branding
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We provide clean source files and documented specifications so your in-house teams or print vendors can immediately use assets without friction.
              </p>

              <div className="space-y-3 pt-2">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#064E3B] dark:text-[#F8E7C9] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-border bg-card shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-foreground">Industry-Standard Software &amp; Formats</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Our creative team produces work using professional design suites to ensure compatibility across web, mobile, and print.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border bg-background">
                  <span className="text-xs font-bold uppercase text-[#064E3B] dark:text-[#F8E7C9]">UI/UX Tools</span>
                  <p className="text-sm font-semibold mt-1">Figma, Adobe XD</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Wireframes &amp; prototypes</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background">
                  <span className="text-xs font-bold uppercase text-[#064E3B] dark:text-[#F8E7C9]">Vector Graphics</span>
                  <p className="text-sm font-semibold mt-1">Adobe Illustrator</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Logos, icons &amp; print SVGs</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background">
                  <span className="text-xs font-bold uppercase text-[#064E3B] dark:text-[#F8E7C9]">Raster &amp; Photo</span>
                  <p className="text-sm font-semibold mt-1">Adobe Photoshop</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Photo retouching &amp; banners</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background">
                  <span className="text-xs font-bold uppercase text-[#064E3B] dark:text-[#F8E7C9]">Motion &amp; Video</span>
                  <p className="text-sm font-semibold mt-1">After Effects &amp; Premiere</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Reels, ads &amp; micro-animations</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#064E3B]/5 dark:bg-[#F8E7C9]/5 border border-[#064E3B]/10 dark:border-[#F8E7C9]/10 text-xs text-muted-foreground">
                <strong className="text-foreground">Turnaround Time:</strong> Typical initial design concepts delivered within 3-5 business days depending on scope.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to elevated your brand's visual identity?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Share your requirements or existing brand assets with our design team for an honest evaluation and clear project quote.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              Request a Design Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
