"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare, Calendar } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState("error");
      }
    } catch (err) {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">Ready to <span className="text-primary">Innovate?</span></h2>
            <p className="text-lg text-muted-foreground mb-12">
              Let's discuss how our AI-driven solutions can transform your business operations.
              Book a consultation with our technology experts today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-muted-foreground">+91 8404827541</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-muted-foreground">contact@revansh.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Our Office</h4>
                  <p className="text-muted-foreground">Gomtinagar, Lucknow, India</p>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <a 
                  href="https://wa.me/918404827541?text=Hello%20Revansh%20Tech!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-2xl font-black transition-all shadow-xl shadow-green-500/20 active:scale-95"
                >
                  <MessageSquare size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a 
                  href="https://calendly.com/devansh-tech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#006BFF] hover:bg-[#0052CC] text-white py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                >
                  <Calendar size={20} />
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
            className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl relative"
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <CheckCircle size={80} className="text-green-500 animate-bounce" />
                <h3 className="text-3xl font-display font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="btn-premium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name</label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email Address</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Subject</label>
                  <input
                    name="subject"
                    required
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  disabled={formState === "submitting"}
                  className="w-full btn-premium py-4 space-x-2 text-lg disabled:opacity-50"
                >
                  <span>{formState === "submitting" ? "Sending..." : "Send Message"}</span>
                  <Send size={18} />
                </button>
                {formState === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
