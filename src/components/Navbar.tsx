"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import {
  FaCode,
  FaMobileAlt,
  FaJava,
  FaDocker,
  FaSearch,
  FaBullhorn,
  FaArrowRight,
  FaArrowCircleRight,
  FaWhatsapp,
  FaCommentDots,
  FaUsers,
  FaFileAlt,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBoxOpen,
  FaGlobe
} from "react-icons/fa";
import { RiGlobalLine, RiCloudLine, RiUserSearchLine, RiBarChartBoxLine, RiWhatsappLine, RiMessage2Line } from "react-icons/ri";

const servicesData = [
  {
    name: "SMS SERVICE",
    icon: <RiMessage2Line className="w-6 h-6" />,
    color: "#ff4d4d",
    href: "/services/sms-service",
    description: "Bulk SMS, Voice Call, WhatsApp API.",
    subServices: [
      { name: "Promotional SMS", badge: null },
      { name: "Transactional SMS", badge: "INDIA" },
      { name: "Verified SMS", badge: "NEW" },
      { name: "Voice Call & IVR", badge: null },
      { name: "WhatsApp Business API", badge: "HOT" },
      { name: "Global Bulk Email", badge: null }
    ]
  },
  {
    name: "WEB SERVICE",
    icon: <FaCode className="w-6 h-6" />,
    color: "#3b82f6",
    href: "/services/web-service",
    description: "Premium Web & App Development.",
    subServices: [
      { name: "Premium Web Design", badge: "HOT" },
      { name: "Custom Web Apps", badge: null },
      { name: "Ecommerce Solutions", badge: null },
      { name: "Mobile App Development", badge: "NEW" },
      { name: "AI Web Solutions", badge: "AI" },
      { name: "Cloud Hosting & Care", badge: null }
    ]
  },
  {
    name: "SEO SERVICES",
    icon: <RiUserSearchLine className="w-6 h-6" />,
    color: "#f59e0b",
    href: "/services/seo-services",
    description: "Boost your organic visibility.",
    subServices: [
      { name: "Local SEO", badge: null },
      { name: "Technical SEO", badge: null },
      { name: "Ecommerce SEO", badge: null },
      { name: "Content Marketing", badge: "HOT" },
      { name: "Link Building", badge: "NEW" },
      { name: "SEO Audit", badge: null }
    ]
  },
  {
    name: "SMM SERVICES",
    icon: <RiBarChartBoxLine className="w-6 h-6" />,
    color: "#ec4899",
    href: "/services/smm-services",
    description: "Viral social media growth.",
    subServices: [
      { name: "Instagram Reels & Video", badge: "HOT" },
      { name: "Meta (FB/IG) Advertising", badge: null },
      { name: "YouTube Marketing", badge: null },
      { name: "Influencer Marketing", badge: "NEW" },
      { name: "LinkedIn B2B Strategy", badge: null },
      { name: "Brand Community", badge: null }
    ]
  },
  {
    name: "PACKAGES",
    icon: <FaBoxOpen className="w-6 h-6" />,
    color: "#10b981",
    href: "/packages",
    description: "Affordable business plans.",
    subServices: [
      { name: "Startup Plan", badge: "SAVE" },
      { name: "Business Plan", badge: "POPULAR" },
      { name: "Enterprise Plan", badge: null },
      { name: "Ecommerce Bundle", badge: null },
      { name: "SEO Yearly Plan", badge: "BEST" },
      { name: "Custom Quote", badge: null }
    ]
  }
];

const quickAccess = [
  { name: "SMS", icon: <FaCommentDots className="text-[#ff4d4d]" />, color: "bg-[#ff4d4d]/10", href: "/services/sms-service" },
  { name: "WHATSAPP", icon: <FaWhatsapp className="text-[#25d366]" />, color: "bg-[#25d366]/10", href: "/services/sms-service/whatsapp-business-api" },
  { name: "WEB", icon: <FaCode className="text-[#3b82f6]" />, color: "bg-[#3b82f6]/10", href: "/services/web-service" },
  { name: "SEO", icon: <FaSearch className="text-[#f59e0b]" />, color: "bg-[#f59e0b]/10", href: "/services/seo-services" },
  { name: "SOCIAL", icon: <FaUsers className="text-[#ec4899]" />, color: "bg-[#ec4899]/10", href: "/services/smm-services" },
  { name: "QUOTE", icon: <FaFileAlt className="text-[#8b5cf6]" />, color: "bg-[#8b5cf6]/10", href: "/packages/custom-quote" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navWidth = useTransform(scrollY, [0, 50], ["100%", "95%"]);
  const navPadding = useTransform(scrollY, [0, 50], ["0.875rem", "0.4rem"]);
  const navRadius = useTransform(scrollY, [0, 50], ["0px", "32px"]);
  const navTop = useTransform(scrollY, [0, 50], ["0px", "16px"]);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const toggleMobileItem = (name: string) => {
    setExpandedMobileItem(expandedMobileItem === name ? null : name);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none px-0">
      <motion.nav
        ref={navRef}
        style={{
          width: navWidth,
          paddingTop: navPadding,
          paddingBottom: navPadding,
          borderRadius: navRadius,
          top: navTop,
        }}
        className={`relative flex items-center justify-center transition-all duration-500 pointer-events-auto bg-white shadow-lg border-b border-slate-200`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center shrink-0 group mr-4 xl:mr-8 gap-2.5">
            <Image
              src="/logo2.svg"
              alt="Logo"
              width={120}
              height={120}
              className="h-9 w-auto object-contain"
              priority
            />
            <div className="flex flex-col text-left justify-center">
              <span className="font-extrabold text-xl tracking-wider text-slate-900 dark:text-white font-display leading-none">
                ORBOUS
              </span>
              <span className="text-[8px] font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-1">
                IT &amp; SOFTWARE SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 flex-nowrap">
            <Link href="/" className="px-1.5 xl:px-2.5 2xl:px-3 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-900 hover:text-blue-600">Home</Link>
            <Link href="#about" className="px-1.5 xl:px-2.5 2xl:px-3 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-900 hover:text-blue-600">About Us</Link>
            <Link href="/ai-hub" className="px-1.5 xl:px-2.5 2xl:px-3 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-900 hover:text-indigo-600 flex items-center gap-1 group">
              AI Solutions
            </Link>

            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(service.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center px-1.5 xl:px-2.5 2xl:px-3 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors cursor-pointer uppercase tracking-wider whitespace-nowrap ${activeDropdown === service.name ? "text-blue-600" : "text-slate-900 hover:text-blue-600"}`}>
                  {service.name} <ChevronDown size={13} className={`ml-0.5 xl:ml-1 transition-transform duration-300 ${activeDropdown === service.name ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === service.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden p-4"
                    >
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-3 mb-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md"
                            style={{ backgroundColor: service.color }}>
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="font-black text-xs text-slate-900 dark:text-white uppercase tracking-tight">{service.name}</h4>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Expert Solutions</p>
                          </div>
                        </div>
                        {service.subServices.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={service.href.startsWith("/")
                              ? `${service.href}/${sub.name.toLowerCase().replace(/[&()/]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-')}`
                              : `${service.href}-${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[12px] font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 flex items-center justify-between group/sub transition-all px-3 py-2.5 rounded-xl"
                          >
                            <span className="flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover/sub:bg-blue-600 mr-2.5 transition-colors" />
                              {sub.name}
                            </span>
                            {sub.badge && (
                              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md ml-2 border ${sub.badge === "HOT" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                sub.badge === "NEW" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                  sub.badge === "AI" ? "bg-purple-500/10 text-purple-500 border-purple-500/20" :
                                    "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                }`}>
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="#contact" className="px-1.5 xl:px-2.5 2xl:px-3 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-900 hover:text-blue-600">Contact</Link>

            <Link href="#contact" className="ml-2 xl:ml-4 2xl:ml-6 group relative inline-flex items-center justify-center px-3.5 py-2 xl:px-5 xl:py-2.5 font-black text-white transition-all duration-300 bg-[#de952a] rounded-full hover:bg-[#c98322] hover:shadow-xl hover:shadow-[#de952a]/30 active:scale-95 overflow-hidden whitespace-nowrap">
              <span className="relative z-10 flex items-center text-[10px] xl:text-[11px] 2xl:text-[12px] uppercase tracking-wider xl:tracking-widest">
                Get Started
                <FaArrowRight size={10} className="ml-1.5 xl:ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="ml-2 xl:ml-4 flex items-center">
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full transition-colors hover:bg-slate-100 text-slate-900"
              >
                {resolvedTheme === "dark" ? <Sun size={18} className="text-yellow-600" /> : <Moon size={18} className="text-slate-700" />}
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center space-x-3">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 text-slate-900"
            >
              {resolvedTheme === "dark" ? <Sun size={18} className="text-yellow-600" /> : <Moon size={18} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-xl bg-primary/10 text-primary transition-all active:scale-95"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm xl:hidden flex justify-end"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-[320px] h-full bg-background overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Menu Header */}
                <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo2.svg"
                      alt="Logo"
                      width={120}
                      height={120}
                      className="h-8 w-auto object-contain"
                      priority
                    />
                    <div className="flex flex-col text-left justify-center">
                      <span className="font-extrabold text-base tracking-wider text-white font-display leading-none">
                        ORBOUS
                      </span>
                      <span className="text-[7px] font-black tracking-widest text-slate-400 uppercase mt-0.5">
                        IT &amp; SOFTWARE SOLUTIONS
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded hover:bg-white/20">
                    <X size={20} />
                  </button>
                </div>

                {/* Quick Access Section */}
                <div className="p-4 bg-muted/30">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Quick Access</p>
                  <div className="grid grid-cols-3 gap-3">
                    {quickAccess.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center space-y-2 p-3 bg-card border border-border rounded-xl hover:border-primary transition-colors group cursor-pointer shadow-sm"
                      >
                        <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-xl`}>
                          {item.icon}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-wider">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Menu List */}
                <div className="p-2 space-y-1">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <FaHome size={14} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-wider">Home</span>
                  </Link>

                  <Link href="#about" onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <FaInfoCircle size={14} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-wider">About Us</span>
                  </Link>

                  <Link href="/ai-hub" onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <FaCommentDots size={14} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-wider flex items-center gap-2">
                      AI Solutions
                    </span>
                  </Link>

                  {servicesData.map((service, idx) => (
                    <div key={idx} className="space-y-1">
                      <button
                        onClick={() => toggleMobileItem(service.name)}
                        className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                            {service.icon}
                          </div>
                          <span className={`font-black text-sm uppercase tracking-wider ${expandedMobileItem === service.name ? "text-primary" : ""}`}>{service.name}</span>
                        </div>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${expandedMobileItem === service.name ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                      </button>
                      <AnimatePresence>
                        {expandedMobileItem === service.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-16 space-y-3 pb-4"
                          >
                            {service.subServices.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={`${service.href}/${sub.name.toLowerCase().replace(/[&()/]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-')}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between pr-4 py-1"
                              >
                                <span className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">{sub.name}</span>
                                {sub.badge && (
                                  <span className={`text-[7px] font-black px-1 py-0.5 rounded bg-primary/10 text-primary border border-primary/20`}>
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <Link href="#contact" onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <FaEnvelope size={14} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-wider">Contact Us</span>
                  </Link>
                </div>

                {/* Footer Quote Button */}
                <div className="p-4 mt-4">
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full btn-premium flex justify-center py-4 rounded-2xl shadow-xl shadow-primary/30">
                    Get Free Quote Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
