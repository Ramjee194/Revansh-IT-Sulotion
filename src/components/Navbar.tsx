"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, ShieldCheck, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import {
  FaArrowRight,
  FaWhatsapp,
  FaHome,
  FaCode,
  FaInfo,
  FaUsers,
  FaBookOpen,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";
import { 
  RiUserSearchLine, 
  RiBarChartBoxLine, 
  RiMessage2Line,
  RiHome4Fill,
  RiCodeSSlashFill,
  RiInformationFill,
  RiTeamFill,
  RiBook2Fill,
  RiBriefcase4Fill,
  RiMailFill,
  RiMessage3Fill,
  RiMessage3Line,
  RiWhatsappFill,
  RiWhatsappLine,
  RiGlobalLine,
  RiWindowLine,
  RiSearchEyeLine,
  RiSearchLine,
  RiMegaphoneFill,
  RiMegaphoneLine,
  RiFileTextFill,
  RiFileList3Line,
  RiPhoneFill
} from "react-icons/ri";
import type { IconType } from "react-icons";
import {
  PiShieldCheck, PiMagnifyingGlass, PiPenNib, PiCode, PiChatText, PiMegaphone,
  PiBug, PiCloud, PiLockKey, PiClipboardText, PiPulse, PiPlugs,
  PiMapPin, PiGear, PiShoppingCart, PiArticle, PiLink, PiListChecks,
  PiFingerprint, PiLayout, PiInstagramLogo, PiPresentationChart, PiPrinter, PiPackage,
  PiBrowser, PiAppWindow, PiDeviceMobile, PiSparkle, PiHardDrives,
  PiEnvelopeSimple, PiSealCheck, PiPhoneCall, PiWhatsappLogo,
  PiMetaLogo, PiYoutubeLogo, PiLinkedinLogo, PiUsersThree, PiArrowRight,
} from "react-icons/pi";

interface SubService { name: string; href: string; note: string; icon: IconType }
interface ServiceCategory {
  name: string;
  displayName: string;
  icon: IconType;
  href: string;
  description: string;
  subServices: SubService[];
}

const servicesData: ServiceCategory[] = [
  {
    name: "CYBER SECURITY",
    displayName: "Cyber Security",
    icon: PiShieldCheck,
    href: "/services/cyber-security",
    description: "Find the gaps before attackers do — testing, hardening and audits.",
    subServices: [
      { name: "VAPT Testing", note: "Pen-testing for web & apps", href: "/services/cyber-security", icon: PiBug },
      { name: "Cloud Defense", note: "AWS, Azure & GCP security", href: "/services/cyber-security", icon: PiCloud },
      { name: "Data Encryption", note: "At rest and in transit", href: "/services/cyber-security", icon: PiLockKey },
      { name: "Security Audits", note: "ISO 27001 & compliance", href: "/services/cyber-security", icon: PiClipboardText },
      { name: "Threat Monitoring", note: "Alerts & incident response", href: "/services/cyber-security", icon: PiPulse },
      { name: "API Hardening", note: "Auth, rate limits, validation", href: "/services/cyber-security", icon: PiPlugs },
    ],
  },
  {
    name: "SEO SERVICES",
    displayName: "SEO Services",
    icon: PiMagnifyingGlass,
    href: "/services/seo-services",
    description: "Rank higher on Google and turn search traffic into enquiries.",
    subServices: [
      { name: "Local SEO", note: "Google Maps & local search", href: "/services/seo-services/local-seo", icon: PiMapPin },
      { name: "Technical SEO", note: "Speed, crawl & Core Web Vitals", href: "/services/seo-services/technical-seo", icon: PiGear },
      { name: "Ecommerce SEO", note: "Product & category pages", href: "/services/seo-services/ecommerce-seo", icon: PiShoppingCart },
      { name: "Content Marketing", note: "Blogs that bring leads", href: "/services/seo-services/content-marketing", icon: PiArticle },
      { name: "Link Building", note: "Clean, relevant backlinks", href: "/services/seo-services/link-building", icon: PiLink },
      { name: "SEO Audit", note: "Full site health report", href: "/services/seo-services/seo-audit", icon: PiListChecks },
    ],
  },
  {
    name: "GRAPHIC DESIGN",
    displayName: "Graphic Design",
    icon: PiPenNib,
    href: "/services/graphic-design",
    description: "Logos, brand kits and creatives that look the same everywhere.",
    subServices: [
      { name: "Brand Identity", note: "Logo, colours, typography", href: "/services/graphic-design", icon: PiFingerprint },
      { name: "UI/UX Design", note: "Figma screens & prototypes", href: "/services/graphic-design", icon: PiLayout },
      { name: "Social Creatives", note: "Posts, stories & banners", href: "/services/graphic-design", icon: PiInstagramLogo },
      { name: "Pitch Decks", note: "Investor & sales decks", href: "/services/graphic-design", icon: PiPresentationChart },
      { name: "Print Collateral", note: "Brochures, cards, flyers", href: "/services/graphic-design", icon: PiPrinter },
      { name: "Packaging Design", note: "Labels & box design", href: "/services/graphic-design", icon: PiPackage },
    ],
  },
  {
    name: "WEB SERVICE",
    displayName: "Web Service",
    icon: PiCode,
    href: "/services",
    description: "Websites, web apps and mobile apps — designed, built and hosted.",
    subServices: [
      { name: "Website Design", note: "Fast, responsive websites", href: "/services/web-service/premium-web-design", icon: PiBrowser },
      { name: "Custom Web Apps", note: "Dashboards, portals, SaaS", href: "/services/web-service/custom-web-apps", icon: PiAppWindow },
      { name: "Ecommerce Stores", note: "Shopify, Woo & custom", href: "/services/web-service/ecommerce-solutions", icon: PiShoppingCart },
      { name: "Mobile Apps", note: "Android & iOS", href: "/services/web-service/mobile-app-development", icon: PiDeviceMobile },
      { name: "AI Solutions", note: "Chatbots & automation", href: "/services/web-service/ai-web-solutions", icon: PiSparkle },
      { name: "Hosting & Care", note: "Cloud hosting, backups, AMC", href: "/services/web-service/cloud-hosting-care", icon: PiHardDrives },
    ],
  },
  {
    name: "SMS SERVICE",
    displayName: "SMS & WhatsApp",
    icon: PiChatText,
    href: "/services",
    description: "Reach customers on SMS, WhatsApp, voice and email from one panel.",
    subServices: [
      { name: "Promotional SMS", note: "Offers & campaigns", href: "/services/sms-service/promotional-sms", icon: PiMegaphone },
      { name: "Transactional SMS", note: "OTP & alerts, DLT ready", href: "/services/sms-service/transactional-sms", icon: PiChatText },
      { name: "Verified SMS", note: "Branded sender with logo", href: "/services/sms-service/verified-sms", icon: PiSealCheck },
      { name: "Voice Call & IVR", note: "Bulk calls & IVR menus", href: "/services/sms-service/voice-call-ivr", icon: PiPhoneCall },
      { name: "WhatsApp Business API", note: "Official green-tick API", href: "/services/sms-service/whatsapp-business-api", icon: PiWhatsappLogo },
      { name: "Bulk Email", note: "Newsletters & campaigns", href: "/services/sms-service/global-bulk-email", icon: PiEnvelopeSimple },
    ],
  },
  {
    name: "SMM SERVICES",
    displayName: "Social Media",
    icon: PiMegaphone,
    href: "/services",
    description: "Grow followers that actually buy — content, ads and community.",
    subServices: [
      { name: "Reels & Video", note: "Short-form content", href: "/services/smm-services/instagram-reels-video", icon: PiInstagramLogo },
      { name: "Meta Ads", note: "Facebook & Instagram ads", href: "/services/smm-services/meta-fb-ig-advertising", icon: PiMetaLogo },
      { name: "YouTube Marketing", note: "Channel growth & ads", href: "/services/smm-services/youtube-marketing", icon: PiYoutubeLogo },
      { name: "Influencer Marketing", note: "Creator partnerships", href: "/services/smm-services/influencer-marketing", icon: PiUsersThree },
      { name: "LinkedIn B2B", note: "Founder & company pages", href: "/services/smm-services/linkedin-b2b-strategy", icon: PiLinkedinLogo },
      { name: "Community Management", note: "Replies, DMs & reviews", href: "/services/smm-services/brand-community", icon: PiChatText },
    ],
  },
];

const quickAccess: { name: string; icon: IconType; href: string }[] = [
  { name: "SMS", icon: RiMessage3Line, href: "/services/sms-service/promotional-sms" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "/services/sms-service/whatsapp-business-api" },
  { name: "Website", icon: RiWindowLine, href: "/services/web-service/premium-web-design" },
  { name: "SEO", icon: RiSearchLine, href: "/services/seo-services" },
  { name: "Social", icon: RiMegaphoneLine, href: "/services/smm-services/meta-fb-ig-advertising" },
  { name: "Get Quote", icon: RiFileList3Line, href: "/packages/custom-quote" },
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
          <Link href="/" className="flex items-center shrink-0 group mr-4 xl:mr-8 gap-2.5" title="Orbous IT & Software Solutions">
            <Logo className="h-9 w-auto object-contain" variant="icon" />
            <div className="flex flex-col text-left justify-center">
              <span className="font-extrabold text-xl tracking-wider text-slate-900 dark:text-[#F8E7C9] font-display leading-none">
                ORBOUS
              </span>
              <span className="text-[8px] font-bold tracking-widest text-[#064E3B] dark:text-[#F8E7C9]/75 uppercase mt-1">
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
              <Link
                href="/services"
                className={`flex items-center px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors cursor-pointer uppercase tracking-wider whitespace-nowrap ${activeDropdown === "services"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                Services
                <ChevronDown size={13} className={`ml-1 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white dark:bg-[#0B1512] rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden grid grid-cols-12"
                  >
                    {/* Left: categories */}
                    <div className="col-span-4 p-3 border-r border-slate-100 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.02]">
                      <p className="px-3 pt-1 pb-2 text-[11px] font-medium text-slate-400">Services</p>
                      {servicesData.map((service, idx) => {
                        const Icon = service.icon;
                        const active = hoveredServiceIdx === idx;
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            onMouseEnter={() => setHoveredServiceIdx(idx)}
                            className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active
                              ? "bg-white dark:bg-white/5 text-[#064E3B] dark:text-[#F8E7C9] shadow-sm"
                              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                              }`}
                          >
                            {active && <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-[#064E3B] dark:bg-[#F8E7C9]" />}
                            <Icon size={20} className={active ? "text-[#064E3B] dark:text-[#F8E7C9]" : "text-slate-400"} />
                            <span className="font-medium">{service.displayName}</span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right: sub-services */}
                    <div className="col-span-8 p-5 flex flex-col">
                      <div className="mb-4">
                        <h4 className="text-[15px] font-semibold text-slate-900 dark:text-white">
                          {servicesData[hoveredServiceIdx].displayName}
                        </h4>
                        <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {servicesData[hoveredServiceIdx].description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-1">
                        {servicesData[hoveredServiceIdx].subServices.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="group/sub flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            >
                              <SubIcon size={18} className="mt-0.5 shrink-0 text-slate-400 group-hover/sub:text-[#064E3B] dark:group-hover/sub:text-[#F8E7C9] transition-colors" />
                              <span className="min-w-0">
                                <span className="block text-[13px] font-medium text-slate-800 dark:text-slate-100 group-hover/sub:text-[#064E3B] dark:group-hover/sub:text-[#F8E7C9] transition-colors">
                                  {sub.name}
                                </span>
                                <span className="block text-xs text-slate-500 dark:text-slate-400 truncate">{sub.note}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-white/5 text-[13px]">
                        <span className="text-slate-500 dark:text-slate-400">
                          Not sure what you need?{" "}
                          <Link href="/contact" className="font-medium text-slate-800 dark:text-slate-100 underline underline-offset-4 decoration-slate-300 hover:decoration-current">
                            Talk to us
                          </Link>
                        </span>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 font-medium text-[#064E3B] dark:text-[#F8E7C9] hover:gap-2.5 transition-all"
                        >
                          All services <PiArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>





            <Link
              href="/about"
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
              href="/careers"
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-[#064E3B] dark:hover:text-[#F8E7C9] flex items-center gap-1.5"
            >
              <span>Careers</span>
              <span className="px-1.5 py-0.5 rounded-full text-[8px] font-black bg-[#F8E7C9] text-[#064E3B] border border-[#E5CFA6]">
                HIRING
              </span>
            </Link>

            <Link
              href="/#contact"
              className="px-2 py-2 text-[11px] xl:text-[12px] 2xl:text-[13px] font-black transition-colors uppercase tracking-wider whitespace-nowrap text-slate-700 dark:text-slate-200 hover:text-[#064E3B] dark:hover:text-[#F8E7C9]"
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              className="ml-2 xl:ml-4 group relative inline-flex items-center justify-center px-4 py-2 font-black text-[#064E3B] transition-all duration-300 bg-[#F8E7C9] hover:bg-[#FFF2DC] rounded-full hover:shadow-xl hover:shadow-[#F8E7C9]/30 active:scale-95 overflow-hidden whitespace-nowrap border border-[#E5CFA6]"
            >
              <span className="relative z-10 flex items-center text-[10px] xl:text-[11px] 2xl:text-[12px] uppercase tracking-wider xl:tracking-widest font-black">
                Get Started
                <FaArrowRight size={10} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Theme Toggle */}

          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center space-x-3">


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
                className="w-full max-w-[320px] h-full bg-[#030914] text-white overflow-y-auto border-l border-slate-800/80 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Drawer Header */}
                <div className="p-4 bg-[#064E3B] text-[#F8E7C9] flex justify-between items-center border-b border-[#F8E7C9]/20">
                  <div className="flex items-center gap-2.5">
                    <Logo className="h-8 w-auto object-contain" variant="icon" />
                    <div className="flex flex-col text-left justify-center">
                      <span className="font-extrabold text-base tracking-wider text-[#F8E7C9] font-display leading-none">
                        ORBOUS
                      </span>
                      <span className="text-[7px] font-bold tracking-widest text-[#F8E7C9]/75 uppercase mt-1">
                        IT &amp; SOFTWARE SOLUTIONS
                      </span>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-[#F8E7C9]">
                    <X size={20} />
                  </button>
                </div>

                {/* Quick Access */}
                <div className="p-4 bg-[#050D1A]/95 border-b border-slate-800/80">
                  <p className="text-xs font-semibold text-slate-400 mb-3 tracking-wide">Quick links</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {quickAccess.map((item) => {
                      const QIcon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex flex-col items-center justify-center gap-2 py-3 px-1.5 bg-[#0A1628]/90 border border-slate-800/90 rounded-2xl hover:border-blue-500/50 hover:bg-[#0E1E38] transition-all group shadow-sm"
                        >
                          <QIcon size={24} className="text-slate-300 group-hover:text-white transition-colors" />
                          <span className="text-[11px] font-bold text-slate-300 group-hover:text-white transition-colors leading-none tracking-tight">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="p-3.5 space-y-1.5 bg-[#030914] min-h-[420px]">
                  {/* Home */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0052CC] flex items-center justify-center text-white shadow-md shadow-blue-900/30 shrink-0">
                      <FaHome size={17} />
                    </div>
                    <span className="font-extrabold text-sm tracking-wider text-white uppercase">HOME</span>
                  </Link>

                  {/* Services Mobile Accordion */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                      className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#3B3DBF] flex items-center justify-center text-white shadow-md shadow-indigo-900/30 shrink-0">
                          <FaCode size={17} />
                        </div>
                        <span className="font-extrabold text-sm tracking-wider text-white uppercase">
                          SERVICES
                        </span>
                      </div>
                      <ChevronDown size={16} className={`transition-transform duration-300 ${servicesMobileOpen ? "rotate-180 text-blue-400" : "text-slate-400"}`} />
                    </button>

                    <AnimatePresence>
                      {servicesMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 pr-2 space-y-1 bg-[#061224] rounded-2xl p-2.5 border border-slate-800"
                        >
                          {servicesData.map((category, idx) => {
                            const CatIcon = category.icon;
                            const catOpen = activeMobileSubCategory === category.name;
                            return (
                            <div key={idx} className="space-y-1">
                              <button
                                onClick={() => toggleMobileSubCategory(category.name)}
                                className="w-full flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-white/5 text-left transition-colors"
                              >
                                <span className={`flex items-center gap-2.5 text-xs font-bold ${catOpen ? "text-[#F8E7C9]" : "text-slate-200"}`}>
                                  <CatIcon size={17} className={catOpen ? "text-[#F8E7C9]" : "text-slate-400"} />
                                  {category.displayName}
                                </span>
                                <ChevronDown size={13} className={`transition-transform duration-300 ${catOpen ? "rotate-180 text-[#F8E7C9]" : "text-slate-400"}`} />
                              </button>

                              <AnimatePresence>
                                {activeMobileSubCategory === category.name && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden pl-4 pr-2 space-y-0.5 pb-2"
                                  >
                                    {category.subServices.map((sub) => {
                                      const SubIcon = sub.icon;
                                      return (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs text-slate-400 hover:bg-white/5 hover:text-[#F8E7C9]"
                                        >
                                          <SubIcon size={14} className="shrink-0 text-slate-400" />
                                          <span className="truncate">{sub.name}</span>
                                        </Link>
                                      );
                                    })}
                                    <div className="pt-1">
                                      <Link
                                        href={category.href}
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F8E7C9] px-2 py-1 hover:underline"
                                      >
                                        View {category.displayName} <PiArrowRight size={11} />
                                      </Link>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* About */}
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center text-white shadow-md shadow-amber-900/30 shrink-0">
                      <FaInfo size={15} />
                    </div>
                    <span className="font-extrabold text-sm tracking-wider text-white uppercase">ABOUT</span>
                  </Link>

                  {/* Our Team */}
                  <Link
                    href="/team"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0284C7] flex items-center justify-center text-white shadow-md shadow-cyan-900/30 shrink-0">
                      <FaUsers size={16} />
                    </div>
                    <span className="font-extrabold text-sm tracking-wider text-white uppercase">OUR TEAM</span>
                  </Link>

                  {/* Blog */}
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-md shadow-purple-900/30 shrink-0">
                      <FaBookOpen size={16} />
                    </div>
                    <span className="font-extrabold text-sm tracking-wider text-white uppercase">BLOG</span>
                  </Link>

                  {/* Careers */}
                  <Link
                    href="/careers"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#475569] flex items-center justify-center text-white shadow-md shadow-slate-900/30 shrink-0">
                      <FaBriefcase size={16} />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <span className="font-extrabold text-sm tracking-wider text-white uppercase">CAREERS</span>
                      <span className="px-2 py-0.5 rounded-full text-[8px] font-black bg-[#F8E7C9] text-[#064E3B]">
                        HIRING
                      </span>
                    </div>
                  </Link>

                  {/* Contact */}
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center text-white shadow-md shadow-emerald-900/30 shrink-0">
                      <FaEnvelope size={16} />
                    </div>
                    <span className="font-extrabold text-sm tracking-wider text-white uppercase">CONTACT</span>
                  </Link>
                </div>

                {/* Direct Action Connect Bar */}
                <div className="p-4 border-t border-slate-800 space-y-2.5 bg-[#050D1A]">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+918404827541"
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm"
                    >
                      <RiPhoneFill size={14} />
                      Call Us
                    </a>
                    <a
                      href="https://wa.me/918404827541"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white font-black text-[11px] uppercase tracking-wider shadow-sm"
                    >
                      <RiWhatsappFill size={16} />
                      WhatsApp
                    </a>
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full btn-champagne flex justify-center py-3.5 rounded-xl shadow-lg text-xs uppercase tracking-widest font-black"
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
