"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, 
  Search, 
  Palette, 
  Code, 
  MessageSquare, 
  Share2, 
  Server, 
  ShoppingCart,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Cyber Security",
    description: "VAPT testing, cloud defense, data encryption & compliance audits.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-emerald-500/20 to-teal-500/20",
    link: "/services/cyber-security"
  },
  {
    title: "SEO Services",
    description: "Technical SEO audits, Core Web Vitals, local rank & link building.",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop",
    icon: <Search className="w-6 h-6" />,
    color: "from-amber-500/20 to-yellow-500/20",
    link: "/services/seo-services"
  },
  {
    title: "Graphic Design",
    description: "Brand identity, logos, UI/UX Figma prototypes & marketing creatives.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/20",
    link: "/services/graphic-design"
  },
  {
    title: "Web Development",
    description: "Modern web applications, custom platforms & mobile application engineering.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500/20 to-indigo-500/20",
    link: "/services/web-service"
  },
  {
    title: "SMS & WhatsApp API",
    description: "High-throughput OTPs, transactional messaging & conversational bots.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-red-500/20 to-orange-500/20",
    link: "/services/sms-service"
  },
  {
    title: "Social Media & Ads",
    description: "Targeted campaigns across Meta & Google, content calendars & lead generation.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    icon: <Share2 className="w-6 h-6" />,
    color: "from-pink-500/20 to-rose-500/20",
    link: "/services/smm-services"
  },
  {
    title: "E-Commerce Solutions",
    description: "Shopify & WooCommerce storefronts, payment gateways & catalog optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "from-yellow-500/20 to-amber-500/20",
    link: "/services/web-service"
  },
  {
    title: "Cloud & Hosting Care",
    description: "Managed cloud servers, SSL certificates, 24/7 uptime & automated backups.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    icon: <Server className="w-6 h-6" />,
    color: "from-cyan-500/20 to-blue-500/20",
    link: "/services/web-service/cloud-hosting-care"
  }
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex justify-center mb-16 md:mb-20 px-4">
          <div className="max-w-4xl text-center flex flex-col items-center gap-4">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
                Professional Solutions
              </span>
              <div className="w-10 h-[2px] bg-primary" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold uppercase tracking-wider leading-tight"
            >
              Our <span className="text-primary">Services</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed"
            >
              Orbous provides end-to-end IT, security, and design services built to support your business with modern, reliable technology.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: (index % 4) * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer bg-slate-900 shadow-lg border border-border/40 hover:border-primary/50 transition-all"
              >
                {/* Branding Label */}
                <div className="absolute top-5 left-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-wider text-white">
                    Orbous
                  </span>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                </div>

                {/* Icon Container */}
                <div className="absolute top-5 right-5 z-20">
                  <div className="w-11 h-11 rounded-2xl bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-20">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-[#F8E7C9] font-bold text-[10px] uppercase tracking-wider mb-1.5 opacity-90">
                      Capability 0{index + 1}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F8E7C9] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Learn More link */}
                    <div className="mt-4 flex items-center gap-1.5 text-white/90 font-bold text-xs uppercase tracking-wider group-hover:text-[#F8E7C9] transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Services Hub Button */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all shadow-sm"
          >
            <span>Browse All Services &amp; Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
