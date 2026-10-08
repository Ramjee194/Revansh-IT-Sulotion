"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Phone, Clock, Train, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface LocationBarProps {
  variant?: "full" | "bar" | "compact";
  className?: string;
}

export default function LocationBar({ variant = "full", className = "" }: LocationBarProps) {
  const [copied, setCopied] = useState(false);

  const fullAddress = "Building 10, Tower B, Level 8, DLF Cyber City, DLF Phase 2, Gurugram (Gurgaon), Haryana 122016, India";
  const pinCode = "122016";
  const mapsUrl = "https://maps.google.com/?q=DLF+Cyber+City+Building+10+Gurgaon+122016";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 p-3.5 rounded-2xl bg-[#064E3B]/10 dark:bg-[#064E3B]/30 border border-[#F8E7C9]/30 text-sm ${className}`}>
        <div className="w-10 h-10 rounded-xl bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center shrink-0 shadow-md">
          <MapPin size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#064E3B] dark:text-[#F8E7C9] text-xs uppercase tracking-wider">Gurgaon Cyber City</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F8E7C9] text-[#064E3B] font-bold">PIN: {pinCode}</span>
          </div>
          <p className="text-xs text-muted-foreground truncate mt-0.5">DLF Cyber City, Phase 2, Gurugram - 122016</p>
        </div>
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <div className={`w-full bg-[#064E3B] text-[#F8E7C9] py-3 px-4 border-y border-[#F8E7C9]/20 shadow-md ${className}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px] text-[#F8E7C9]/80">Headquarters</span>
            <span className="text-[#F8E7C9] font-medium hidden sm:inline">•</span>
            <span className="font-semibold">DLF Cyber City, Phase 2, Gurgaon</span>
            <span className="px-2 py-0.5 rounded-md bg-[#F8E7C9] text-[#064E3B] font-black text-[11px] tracking-wider">
              PIN {pinCode}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden md:flex items-center gap-1.5 opacity-90">
              <Train size={14} className="text-[#F8E7C9]" />
              Cyber City Rapid Metro
            </span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F8E7C9] hover:underline font-bold"
            >
              <span>Get Directions</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Full Executive Card Variant
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-[#F8E7C9]/30 bg-gradient-to-br from-[#064E3B] via-[#043629] to-[#021F17] text-[#F8E7C9] p-6 sm:p-8 lg:p-10 shadow-2xl ${className}`}>
      {/* Subtle luxury ambient sheen */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8E7C9]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Office Meta Details */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="badge-editorial bg-[#F8E7C9]/15 text-[#F8E7C9] border-[#F8E7C9]/30">
              <Building2 size={13} className="text-[#F8E7C9]" />
              Global Headquarters
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-[#F8E7C9] text-[#064E3B] tracking-wider uppercase shadow-sm">
              PIN CODE: {pinCode}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-semibold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Gurugram Tech Corridor
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F8E7C9] tracking-tight">
              DLF Cyber City Campus
            </h3>
            <p className="text-sm sm:text-base text-[#F8E7C9]/85 mt-2 font-medium leading-relaxed max-w-xl">
              Building 10, Tower B, Level 8, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram (Gurgaon), Haryana, India – <span className="font-bold underline decoration-[#F8E7C9]/60 underline-offset-4">122016</span>
            </p>
          </div>

          {/* Key Location Highligh */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#F8E7C9]/15">
              <Train size={18} className="text-[#F8E7C9] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#F8E7C9]">Rapid Metro Connectivity</p>
                <p className="text-[11px] text-[#F8E7C9]/70">2 mins walk from Cyber City Rapid Metro Station</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#F8E7C9]/15">
              <Clock size={18} className="text-[#F8E7C9] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#F8E7C9]">Operational Hours</p>
                <p className="text-[11px] text-[#F8E7C9]/70">Mon – Fri: 9:00 AM – 7:00 PM IST (24/7 NOC)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#F8E7C9]/15">
              <Phone size={18} className="text-[#F8E7C9] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#F8E7C9]">Direct Line</p>
                <a href="tel:+918404827541" className="text-[11px] text-[#F8E7C9] hover:underline font-mono">
                  +91 84048 27541
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-[#F8E7C9]/15">
              <Navigation size={18} className="text-[#F8E7C9] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#F8E7C9]">Airport Proximity</p>
                <p className="text-[11px] text-[#F8E7C9]/70">15 mins from IGI Airport (DEL Terminal 3)</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-champagne text-xs py-3 px-5 gap-2"
            >
              <Navigation size={14} />
              Open in Google Maps
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold border border-[#F8E7C9]/40 bg-white/5 hover:bg-white/10 transition-all text-[#F8E7C9]"
            >
              {copied ? <CheckCircle2 size={14} className="text-emerald-400" /> : <MapPin size={14} />}
              {copied ? "Address Copied!" : "Copy Full Address"}
            </button>
          </div>
        </div>

        {/* Right Column: Google Maps Interactive Preview */}
        <div className="lg:col-span-5 h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-[#F8E7C9]/25 shadow-xl relative">
          <iframe
            title="Orbous IT Solutions - DLF Cyber City Gurgaon 122016"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.983935398242!2d77.08542233630372!3d28.490089297801386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193850785025%3A0xc39116e959556839!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122016!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          <div className="absolute bottom-3 left-3 bg-[#064E3B]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#F8E7C9]/30 text-[11px] font-bold text-[#F8E7C9] flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Gurgaon Cyber City • PIN 122016
          </div>
        </div>
      </div>
    </div>
  );
}
