"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Code, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-auto overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/logo2.png"
                  alt="Devansh Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering digital transformation through high-performance engineering, 
              AI-driven insights, and enterprise-grade software solutions with Revansh Tech.
            </p>
            <div className="flex space-x-4">
              {[Globe, Code, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Solutions</h4>
            <ul className="space-y-4">
              {["Web Development", "App Engineering", "Java Full Stack", "DevOps & Cloud", "SEO & Marketing"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Expertise", "Success Stories", "Careers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-6">Stay updated with the latest in technology and innovation.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition-all"
              />
              <button className="w-full btn-premium py-3 rounded-xl">Subscribe Now</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Revansh Tech & Software Solutions. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
