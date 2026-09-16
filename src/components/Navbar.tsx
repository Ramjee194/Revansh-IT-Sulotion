"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Logo from "./Logo";
import {
  FaCode,
  FaSearch,
  FaArrowRight,
  FaCommentDots,
  FaUsers,
  FaFileAlt,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaWhatsapp,
  FaBriefcase,
  FaBookOpen
} from "react-icons/fa";
import { RiUserSearchLine, RiBarChartBoxLine, RiMessage2Line } from "react-icons/ri";

const servicesData = [
  {
    name: "SMS SERVICE",
    displayName: "SMS Service",
    icon: <RiMessage2Line className="w-5 h-5" />,
    color: "#ff4d4d",
    gradient: "from-red-500/10 to-orange-500/10",
    hoverBg: "hover:bg-red-500/5 dark:hover:bg-red-500/10",
    href: "/services/sms-service",
    description: "Enterprise messaging, OTP delivery, and conversational bots.",
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
    displayName: "Web Service",
    icon: <FaCode className="w-5 h-5" />,
    color: "#3b82f6",
    gradient: "from-blue-500/10 to-indigo-500/10",
    hoverBg: "hover:bg-blue-500/5 dark:hover:bg-blue-500/10",
    href: "/services/web-service",
    description: "Full-stack software engineering, custom platforms, and e-commerce.",
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
    displayName: "SEO Services",
    icon: <RiUserSearchLine className="w-5 h-5" />,
    color: "#f59e0b",
    gradient: "from-amber-500/10 to-yellow-500/10",
    hoverBg: "hover:bg-amber-500/5 dark:hover:bg-amber-500/10",
    href: "/services/seo-services",
    description: "Search visibility, semantic indexing, and search engine campaigns.",
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
    displayName: "SMM Services",
    icon: <RiBarChartBoxLine className="w-5 h-5" />,
    color: "#ec4899",
    gradient: "from-pink-500/10 to-purple-500/10",
    hoverBg: "hover:bg-pink-500/5 dark:hover:bg-pink-500/10",
    href: "/services/smm-services",
    description: "Growth models, short-form viral loops, and community management.",
    subServices: [
      { name: "Instagram Reels & Video", badge: "HOT" },
      { name: "Meta (FB/IG) Advertising", badge: null },
      { name: "YouTube Marketing", badge: null },
      { name: "Influencer Marketing", badge: "NEW" },
      { name: "LinkedIn B2B Strategy", badge: null },
      { name: "Brand Community", badge: null }
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
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState(0);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const [activeMobileSubCategory, setActiveMobileSubCategory] = useState<string | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
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

  const toggleMobileSubCategory = (name: string) => {
    setActiveMobileSubCategory(activeMobileSubCategory === name ? null : name);
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
        className={`relative flex items-center justify-center transition-all duration-500 pointer-events-auto bg-white dark:bg-slate-950 shadow-lg border-b border-slate-200 dark:border-slate-900`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center shrink-0 group mr-4 xl:mr-8 gap-2.5">
            <Logo className="h-9 w-auto object-contain" />
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
          <div className="hidden xl:flex items-center space-x-2 xl:space-x-3.5 2xl:space-x-5 flex-nowrap">
            <Link 
              href="/" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors cursor-pointer uppercase tracking-wider whitespace-nowrap ${
                  activeDropdown === "services" 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Services 
                <ChevronDown size={13} className={`ml-1 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden p-6 grid grid-cols-12 gap-6"
                  >
                    {/* Left Pane: Categories */}
                    <div className="col-span-5 flex flex-col space-y-1.5 border-r border-slate-100 dark:border-slate-800/80 pr-4">
                      <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase mb-2">Our Capabilities</p>
                      {servicesData.map((service, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredServiceIdx(idx)}
                          className={`flex items-center space-x-3 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                            hoveredServiceIdx === idx 
                              ? "bg-slate-50 dark:bg-slate-800/80 shadow-sm" 
                              : "hover:bg-slate-50/50 dark:hover:bg-slate-800/20"
                          }`}
                        >
                          <div 
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm"
                            style={{ backgroundColor: service.color }}
                          >
                            {service.icon}
                          </div>
                          <div className="flex-grow text-left">
                            <h4 className={`font-black text-[12px] uppercase tracking-wider ${
                              hoveredServiceIdx === idx ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"
                            }`}>
                              {service.displayName}
                            </h4>
                          </div>
                          <ChevronRight 
                            size={12} 
                            className={`transition-all duration-300 ${
                              hoveredServiceIdx === idx 
                                ? "translate-x-0.5 text-blue-600 dark:text-blue-400 opacity-100" 
                                : "text-slate-400 opacity-0 group-hover:opacity-100"
                            }`} 
                          />
                        </div>
                      ))}
                    </div>

                    {/* Right Pane: Sub-Services Content */}
                    <div className="col-span-7 flex flex-col justify-between bg-slate-50/60 dark:bg-slate-950/40 rounded-2xl p-5 border border-slate-100 dark:border-slate-800/50">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h4 className="font-black text-xs text-slate-800 dark:text-white uppercase tracking-wider">
                            {servicesData[hoveredServiceIdx].displayName} Solutions
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            {servicesData[hoveredServiceIdx].description}
                          </p>
                        </div>
                        <div className="h-[1px] bg-slate-200/60 dark:bg-slate-800/80" />
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {servicesData[hoveredServiceIdx].subServices.map((sub, sIdx) => {
                            const parentHref = servicesData[hoveredServiceIdx].href;
                            const linkHref = `${parentHref}/${sub.name.toLowerCase().replace(/[&()/]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-')}`;
                            return (
                              <Link
                                key={sIdx}
                                href={linkHref}
                                className="text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group/sub transition-all py-1.5 px-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
                              >
                                <span className="flex items-center">
                                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 group-hover/sub:bg-blue-600 dark:group-hover/sub:bg-blue-400 mr-2 transition-colors" />
                                  {sub.name}
                                </span>
                                {sub.badge && (
                                  <span className={`text-[7px] font-black px-1 py-0.2 rounded ${
                                    sub.badge === "HOT" ? "bg-red-500/10 text-red-500 border border-red-500/20" :
                                    sub.badge === "NEW" ? "bg-green-500/10 text-green-500 border border-green-500/20" :
                                    sub.badge === "AI" ? "bg-purple-500/10 text-purple-500 border border-purple-500/20" :
                                    "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                                  }`}>
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex justify-end">
                        <Link 
                          href={servicesData[hoveredServiceIdx].href}
                          className="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1 group/learn hover:underline"
                        >
                          Explore Category <FaArrowRight size={8} className="group-hover/learn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/#portfolio" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Portfolio
            </Link>

            <Link 
              href="/#portfolio" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Case Studies
            </Link>

            <Link 
              href="/#about" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>

            <Link 
              href="/team" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Our Team
            </Link>

            <Link 
              href="/blog" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Blog
            </Link>

            <Link 
              href="/#contact" 
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>

            <Link 
              href="/#contact" 
              className="ml-2 xl:ml-4 group relative inline-flex items-center justify-center px-4 py-2 font-black text-white transition-all duration-300 bg-[#de952a] rounded-full hover:bg-[#c98322] hover:shadow-xl hover:shadow-[#de952a]/30 active:scale-95 overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center text-[10px] xl:text-[11px] 2xl:text-[12px] uppercase tracking-wider xl:tracking-widest">
                Get Started
                <FaArrowRight size={10} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Theme Toggle */}
            <div className="ml-2 xl:ml-3 flex items-center">
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {resolvedTheme === "dark" ? <Sun size={17} className="text-yellow-600" /> : <Moon size={17} className="text-slate-700" />}
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center space-x-3">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {resolvedTheme === "dark" ? <Sun size={17} className="text-yellow-600" /> : <Moon size={17} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white transition-all active:scale-95"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
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
                className="w-full max-w-[320px] h-full bg-white dark:bg-slate-950 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Drawer Header */}
                <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <Logo className="h-8 w-auto object-contain" />
                    <div className="flex flex-col text-left justify-center">
                      <span className="font-extrabold text-base tracking-wider text-white font-display leading-none">
                        ORBOUS
                      </span>
                      <span className="text-[7px] font-black tracking-widest text-slate-400 uppercase mt-1">
                        IT &amp; SOFTWARE SOLUTIONS
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded hover:bg-white/20">
                    <X size={20} />
                  </button>
                </div>

                {/* Quick Access */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900/40">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3">Quick Access</p>
                  <div className="grid grid-cols-3 gap-2">
                    {quickAccess.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center space-y-1.5 p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500 transition-colors shadow-sm"
                      >
                        <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center text-lg`}>
                          {item.icon}
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-350">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="p-2 space-y-1">
                  <Link 
                    href="/" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <FaHome size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">Home</span>
                  </Link>

                  {/* Services Mobile Accordion */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                          <FaCode size={13} />
                        </div>
                        <span className={`font-black text-xs uppercase tracking-wider ${servicesMobileOpen ? "text-primary" : "text-slate-900 dark:text-white"}`}>
                          Services
                        </span>
                      </div>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${servicesMobileOpen ? "rotate-180 text-primary" : "text-slate-400"}`} />
                    </button>

                    <AnimatePresence>
                      {servicesMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-6 pr-2 space-y-1 bg-slate-50/50 dark:bg-slate-900/20 rounded-xl"
                        >
                          {servicesData.map((category, idx) => (
                            <div key={idx} className="space-y-1">
                              <button
                                onClick={() => toggleMobileSubCategory(category.name)}
                                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/40 text-left"
                              >
                                <span className={`text-[11px] font-black uppercase tracking-wider ${
                                  activeMobileSubCategory === category.name ? "text-blue-500" : "text-slate-800 dark:text-slate-200"
                                }`}>
                                  {category.displayName}
                                </span>
                                <ChevronDown size={12} className={`transition-transform duration-300 ${activeMobileSubCategory === category.name ? "rotate-180 text-blue-500" : "text-slate-400"}`} />
                              </button>

                              <AnimatePresence>
                                {activeMobileSubCategory === category.name && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden pl-4 pr-2 space-y-2 pb-2"
                                  >
                                    {category.subServices.map((sub, sIdx) => {
                                      const linkHref = `${category.href}/${sub.name.toLowerCase().replace(/[&()/]/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-')}`;
                                      return (
                                        <Link
                                          key={sIdx}
                                          href={linkHref}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center justify-between py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60"
                                        >
                                          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{sub.name}</span>
                                          {sub.badge && (
                                            <span className="text-[6px] font-black px-1 py-0.2 rounded bg-primary/10 text-primary border border-primary/20">
                                              {sub.badge}
                                            </span>
                                          )}
                                        </Link>
                                      );
                                    })}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link 
                    href="/#portfolio" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <FaBriefcase size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">Portfolio</span>
                  </Link>

                  <Link 
                    href="/#portfolio" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <FaBriefcase size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">Case Studies</span>
                  </Link>

                  <Link 
                    href="/#about" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <FaInfoCircle size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">About</span>
                  </Link>

                  <Link 
                    href="/team" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <FaUsers size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">Our Team</span>
                  </Link>

                  <Link 
                    href="/blog" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <FaBookOpen size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">Blog</span>
                  </Link>

                  <Link 
                    href="/#contact" 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center space-x-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <FaEnvelope size={13} />
                    </div>
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900 dark:text-white">Contact</span>
                  </Link>
                </div>

                {/* Footer Get Started Button */}
                <div className="p-4 mt-6">
                  <Link 
                    href="/#contact" 
                    onClick={() => setIsOpen(false)} 
                    className="w-full btn-premium flex justify-center py-3.5 rounded-2xl shadow-xl shadow-primary/20 text-xs uppercase tracking-widest font-black"
                  >
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
