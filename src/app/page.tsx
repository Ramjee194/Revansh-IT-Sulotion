import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BrandPartners from "@/components/BrandPartners";
import AppShowcase from "@/components/AppShowcase";
import SmsPreview from "@/components/SmsPreview";
import FloatingAiWidget from "@/components/FloatingAiWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />

      {/* Experience Section */}
      <section id="about" className="py-20 md:py-28 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Text Content */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
              High Performance <br className="sm:hidden" />
              <span className="text-[#064E3B] dark:text-[#F8E7C9]">Solutions.</span>
            </h2>
            <div className="w-16 h-1 bg-[#064E3B] dark:bg-[#F8E7C9] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Orbous provides high-availability technical solutions.
              We focus on performance, security, and scalable infrastructure
              for modern global enterprises.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {/* Box 1: Team Image */}
            <div className="group rounded-3xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md aspect-[3/4]">
              <img
                src="/indian_tech_team_1778924018269.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Orbous Engineering Team"
              />
            </div>

            {/* Box 2: A+ Card */}
            <div className="rounded-3xl bg-[#064E3B] text-[#F8E7C9] border border-[#F8E7C9]/25 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center aspect-[3/4]">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F8E7C9] flex items-center justify-center font-bold text-lg mb-6 border border-[#F8E7C9]/20">
                A+
              </div>
              <h4 className="text-lg font-bold text-[#F8E7C9] mb-2">
                Engineering Standard
              </h4>
              <p className="text-xs text-[#F8E7C9]/85 font-normal leading-relaxed">
                We follow clean architectural standards and write scalable, production-ready code for high-traffic environments.
              </p>
            </div>

            {/* Box 3: Stats Card */}
            <div className="rounded-3xl bg-[#F8E7C9] text-[#064E3B] border border-[#E5CFA6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center aspect-[3/4]">
              <h4 className="text-4xl sm:text-5xl font-black mb-2 text-[#064E3B]">01+</h4>
              <h5 className="text-sm font-bold uppercase tracking-wider mb-2 text-[#064E3B]/90">
                Years Excellence
              </h5>
              <p className="text-xs text-[#064E3B]/85 font-normal leading-relaxed">
                Over 1 year of trusted delivery, technical execution, and successful client partnerships.
              </p>
            </div>

            {/* Box 4: Workspace Image */}
            <div className="group rounded-3xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md aspect-[3/4]">
              <img
                src="/indian_modern_workspace_1778924038368.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Orbous Modern Workspace"
              />
            </div>
          </div>

          {/* Bottom Grid for Core Values & User Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8 border-t border-border">
            <div className="space-y-2 p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
                Our Core Values
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Efficiency, transparency, and technical rigor in every line of code we ship.
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9]">
                User Experience
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Performance-driven interfaces designed for clean usability and reliable business outcomes.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Services />
      <Industries />
      <WhyChooseUs />
      <Technologies />
      <Projects />
      <Process />
      <SmsPreview />
      <AppShowcase />
      <Stats />
      <FAQ />
      <BrandPartners />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingAiWidget />
    </main>
  );
}
