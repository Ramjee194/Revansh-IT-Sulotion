"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Code, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#064E3B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group" title="Orbous IT Solutions">
              <Logo className="h-9 w-auto object-contain transition-transform group-hover:scale-105" variant="icon" />
              <div className="flex flex-col text-left justify-center">
                <span className="font-extrabold text-xl tracking-wider text-foreground font-display leading-none">
                  ORBOUS
                </span>
                <span className="text-[8px] font-black tracking-widest text-[#064E3B] dark:text-[#F8E7C9]/75 uppercase mt-1">
                  CYBER CITY GURGAON &bull; 122016
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering high-availability cloud platforms, full-stack software, and bespoke AI applications for modern global enterprises.
            </p>

            {/* Simple location & contact */}
            <address className="not-italic space-y-2.5 text-sm text-muted-foreground">
              <a
                id="footer-location"
                href="https://maps.google.com/?q=DLF+Cyber+City+Building+10+Gurgaon+122016"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-foreground transition-colors"
              >
                <MapPin size={15} className="shrink-0 mt-0.5 text-[#064E3B] dark:text-[#F8E7C9]" />
                <span>
                  Building 10, Tower B, Level 8, DLF Cyber City,
                  <br />
                  Phase 2, Gurugram, Haryana 122016
                </span>
              </a>
              <a
                id="footer-phone"
                href="tel:+918404827541"
                className="flex items-center gap-2.5 hover:text-foreground transition-colors"
              >
                <Phone size={15} className="shrink-0 text-[#064E3B] dark:text-[#F8E7C9]" />
                +91 84048 27541
              </a>
              <a
                id="footer-email"
                href="mailto:contact@orbous.com"
                className="flex items-center gap-2.5 hover:text-foreground transition-colors"
              >
                <Mail size={15} className="shrink-0 text-[#064E3B] dark:text-[#F8E7C9]" />
                contact@orbous.com
              </a>
            </address>

            <div className="flex space-x-3 pt-1">
              {[
                { icon: Globe, href: "https://orbous.com", label: "Website" },
                { icon: Code, href: "/services", label: "Services" },
                { icon: Mail, href: "mailto:contact@orbous.com", label: "Email" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[#064E3B] hover:text-[#064E3B] dark:hover:border-[#F8E7C9] dark:hover:text-[#F8E7C9] transition-all"
                >
                  <item.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-6">
              Solutions &amp; Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Cyber Security & Threat Defense", href: "/services/cyber-security" },
                { name: "SEO & Search Visibility", href: "/services/seo-services" },
                { name: "Graphic Design & Brand Identity", href: "/services/graphic-design" },
                { name: "Web & Custom Engineering", href: "/services/web-service" },
                { name: "Bulk SMS & WhatsApp API", href: "/services/sms-service" },
                { name: "Browse All Solutions", href: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-[#064E3B] dark:hover:text-[#F8E7C9] transition-colors flex items-center group"
                  >
                    <ArrowRight size={13} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#064E3B] dark:text-[#F8E7C9]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Orbous", href: "/about" },
                { name: "Our Leadership Team", href: "/team" },
                { name: "Careers (DLF Cyber City)", href: "/careers", badge: "HIRING" },
                { name: "Engineering Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-[#064E3B] dark:hover:text-[#F8E7C9] transition-colors flex items-center justify-between group"
                  >
                    <span className="flex items-center">
                      <ArrowRight size={13} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#064E3B] dark:text-[#F8E7C9]" />
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#F8E7C9] text-[#064E3B] font-mono">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-6">
              Executive Briefing
            </h4>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Curated architectural insights, tech trends, and software case studies delivered quarterly.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Orbous Insights."); }} className="space-y-2.5">
              <input
                type="email"
                required
                placeholder="architect@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border focus:border-[#064E3B] dark:focus:border-[#F8E7C9] text-xs outline-none transition-all"
              />
              <button type="submit" className="w-full btn-champagne py-2.5 text-xs">
                Subscribe to Briefing
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {currentYear}{" "}Orbous IT &amp; Software Solutions. Headquartered at DLF Cyber City, Gurgaon (PIN 122016).
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link>
            <Link href="https://maps.google.com/?q=DLF+Cyber+City+Gurgaon+122016" target="_blank" className="hover:text-foreground transition-colors">Cyber City Campus</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
