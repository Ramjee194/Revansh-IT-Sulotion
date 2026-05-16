"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure enterprise-grade security?",
    answer: "We follow industry-standard security protocols, including end-to-end encryption, regular security audits, and compliance with global standards like GDPR and SOC2."
  },
  {
    question: "What industries do you specialize in?",
    answer: "Our expertise spans Healthcare, Fintech, Real Estate, E-commerce, Logistics, and Smart Manufacturing, providing tailored digital solutions for each sector."
  },
  {
    question: "How do you handle AI implementation for startups?",
    answer: "We offer a phased approach starting with feasibility studies, MVP development, and scaling AI models using cost-effective cloud infrastructures."
  },
  {
    question: "Can you modernize our legacy software systems?",
    answer: "Yes, we specialize in digital transformation, helping businesses migrate legacy systems to modern, scalable cloud-native architectures without downtime."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "We offer continuous monitoring, maintenance, and 24/7 dedicated support to ensure your systems remain performant and secure at all times."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-2xl overflow-hidden bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-bold">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
