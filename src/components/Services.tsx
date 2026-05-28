"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  RiCodeSSlashLine, 
  RiUserSearchLine, 
  RiBarChartBoxLine,
  RiMessage2Line,
  RiShoppingCartLine,
  RiRobotLine,
  RiServerLine,
  RiCrosshair2Line,
  RiShareForwardLine
} from "react-icons/ri";

const services = [
  {
    title: "SMS Marketing",
    description: "Bulk SMS, WhatsApp API, Voice Calls & Email campaigns.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    icon: <RiMessage2Line className="w-6 h-6" />,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Web Development",
    description: "Responsive websites, software & Android app development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    icon: <RiCodeSSlashLine className="w-6 h-6" />,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "SEO Services",
    description: "Local SEO, Global SEO, PPC & marketplace optimization.",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop",
    icon: <RiUserSearchLine className="w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Social Media",
    description: "Facebook, Instagram, YouTube & Influencer marketing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    icon: <RiShareForwardLine className="w-6 h-6" />,
    color: "from-pink-500/20 to-orange-500/20"
  },
  {
    title: "Performance Marketing",
    description: "Google Ads, Meta Ads, Pay Per Lead & retargeting campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    icon: <RiCrosshair2Line className="w-6 h-6" />,
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "E-commerce Solutions",
    description: "Shopify, WooCommerce, D2C stores & marketplace SEO.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    icon: <RiShoppingCartLine className="w-6 h-6" />,
    color: "from-yellow-500/20 to-green-500/20"
  },
  {
    title: "AI & Automation",
    description: "AI chatbots, voice bots, RCS messaging & smart campaigns.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    icon: <RiRobotLine className="w-6 h-6" />,
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Hosting & Care",
    description: "Cloud hosting, SSL, website maintenance & 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    icon: <RiServerLine className="w-6 h-6" />,
    color: "from-teal-500/20 to-blue-500/20"
  }
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
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
        <div className="flex justify-center mb-20 px-4">
  <div className="max-w-4xl text-center flex flex-col items-center gap-6">
    
    {/* Label */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-[2px] bg-primary" />
      
     

      <div className="w-10 h-[2px] bg-primary" />
    </motion.div>

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xl md:text-4xl font-bold uppercase tracking-wider leading-tight"
    >
    Our{" "}
      <span className="text-primary ">
        Services
      </span>
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
    >
      Orbous provides end-to-end IT services designed to scale
      your business with precision and modern technology.
    </motion.p>

  </div>
</div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: (index % 4) * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer bg-slate-900 perspective-1000 shadow-xl"
            >
              {/* Branding Label (Orbous Aad Karna) */}
              <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-black uppercase tracking-[0.2em] text-white">
                  Orbous
                </span>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
              </div>

              {/* Icon Container */}
              <div className="absolute top-6 right-6 z-20">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform"
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <div className="transform transition-transform duration-700 group-hover:-translate-y-4">
                  <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-all">
                    Service Layer 0{index + 1}
                  </p>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed max-w-[90%] group-hover:text-white/90 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Subtle Learn More indicator */}
                  <div className="mt-6 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <span>Explore Solutions</span>
                    <div className="w-6 h-[1px] bg-white/40" />
                  </div>
                </div>
              </div>

              {/* Card Border Highlight */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-primary/50 rounded-[2rem] transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
