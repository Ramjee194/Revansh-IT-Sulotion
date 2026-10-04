"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, CheckCircle, MessageSquare, Calendar } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
        setErrorMessage(json.error || "Failed to deliver message. Please try again.");
      }
    } catch (err: any) {
      setFormState("error");
      setErrorMessage(err.message || "Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4 tracking-tight">
              Ready to <span className="text-[#064E3B] dark:text-[#F8E7C9]">Innovate?</span>
            </h2>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              Let&apos;s discuss how our technology and software solutions can transform your operations. Reach out to our team today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#064E3B]/10 text-[#064E3B] dark:bg-[#F8E7C9]/10 dark:text-[#F8E7C9] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Call Us</h4>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    <a href="tel:+918404827541" className="hover:underline">+91 84048 27541</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#064E3B]/10 text-[#064E3B] dark:bg-[#F8E7C9]/10 dark:text-[#F8E7C9] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Email Us</h4>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    <a href="mailto:contact@orbous.com" className="hover:underline">contact@orbous.com</a>
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <a
                  href="https://wa.me/918404827541?text=Hello%20Orbous!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="https://calendly.com/orbous-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#064E3B] text-[#F8E7C9] hover:bg-[#043326] border border-[#F8E7C9]/30 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Book on Calendly</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 sm:p-10 rounded-2xl border border-border shadow-lg relative"
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle size={60} className="text-emerald-500 animate-pulse" />
                <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="px-6 py-2.5 rounded-lg bg-[#F8E7C9] text-[#064E3B] font-bold text-xs uppercase tracking-wider hover:bg-[#ECD3A7] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold">Full Name *</label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background focus:border-[#064E3B] dark:focus:border-[#F8E7C9] text-sm outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold">Email Address *</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background focus:border-[#064E3B] dark:focus:border-[#F8E7C9] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background focus:border-[#064E3B] dark:focus:border-[#F8E7C9] text-sm outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold">Subject *</label>
                    <input
                      name="subject"
                      required
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background focus:border-[#064E3B] dark:focus:border-[#F8E7C9] text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background focus:border-[#064E3B] dark:focus:border-[#F8E7C9] text-sm outline-none resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-3.5 rounded-lg bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-md disabled:opacity-50"
                >
                  <span>{formState === "submitting" ? "Sending..." : "Send Message"}</span>
                  <Send size={15} />
                </button>

                {formState === "error" && (
                  <p className="text-rose-500 text-xs text-center">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
