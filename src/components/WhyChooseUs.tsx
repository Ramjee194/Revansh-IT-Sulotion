"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RiFocus3Line, RiWallet3Line, RiMedalLine } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <RiFocus3Line size={24} />,
    title: "Result-Driven",
    desc: "Laser-focused on ROI and business growth through data-backed strategies."
  },
  {
    icon: <RiWallet3Line size={24} />,
    title: "Affordable Plans",
    desc: "Flexible and transparent packages designed for businesses of every scale."
  },
  {
    icon: <FaHeadset size={24} />,
    title: "24/7 Support",
    desc: "Dedicated support team available round the clock for instant query resolution."
  },
  {
    icon: <RiMedalLine size={24} />,
    title: "Proven Expertise",
    desc: "A solid track record of technical delivery and successful client partnerships."
  }
];

export default function WhyChooseUs() {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-number", {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        }
      });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/20 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight max-w-2xl">
            Built for Real Business Growth.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            We combine technical precision with practical business strategy to deliver software and services that actually move the needle for your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-base mb-1.5 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-5">
            {[
              { label: "Projects Done", value: 1200 },
              { label: "Happy Clients", value: 5000 },
              { label: "SMS Sent (Cr)", value: 50 },
              { label: "Countries Served", value: 20 }
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card p-6 sm:p-8 rounded-2xl border border-border text-center shadow-sm flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] dark:text-[#F8E7C9] mb-1">
                  <span className="stat-number">{stat.value}</span>+
                </div>
                <div className="text-[11px] text-muted-foreground uppercase font-semibold tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
