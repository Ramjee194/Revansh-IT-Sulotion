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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />

      {/* Experience Section */}
      <section id="about" className="py-24 md:py-32 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Text Content */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-6">
            <h2 className="text-xl sm:text-3xl font-display font-black  uppercase ">
              High Performance <br className="sm:hidden" />
              <span className="text-amber-800">Solutions.</span>
            </h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
              Revansh Tech provides high-availability technical solutions.
              We focus on performance, security, and scalable infrastructure
              for modern global enterprises.
            </p>
          </div>

          {/* Bento Grid (No overlap, modern and clean) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {/* Box 1: Team Image */}
            <div className="group rounded-3xl overflow-hidden border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg aspect-[3/4]">
              <img src="/indian_tech_team_1778924018269.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Team" />
            </div>

            {/* Box 2: A+ Card */}
            <div className="rounded-3xl bg-[#de952a] hover:bg-[#c98322] text-white  p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col justify-center aspect-[3/4]">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-6 font-bold text-lg">
                A+
              </div>
              <h4 className="text-lg font-extrabold text-foreground  mb-2">Engineering Standard</h4>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed">We follow elite architectural standards and write clean, scalable, production-grade code.</p>
            </div>

            {/* Box 3: 01+ Stats Card */}
            <div className="rounded-3xl bg-orange-700 text-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-center aspect-[3/4]">
              <h4 className="text-5xl font-black mb-3">01+</h4>
              <h5 className="text-base font-bold uppercase tracking-wider mb-2 text-white-100">Years Excellence</h5>
              <p className="text-xs text-white-200 font-semibold leading-relaxed">Over 1 years of trusted delivery, technical execution, and successful client partnerships.</p>
            </div>

            {/* Box 4: Workspace Image */}
            <div className="group rounded-3xl overflow-hidden border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg aspect-[3/4]">
              <img src="/indian_modern_workspace_1778924038368.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Workspace" />
            </div>
          </div>

          {/* Bottom Grid for Core Values & User Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-12 border-t border-border/80 max-w-4xl mx-auto">
            <div className="space-y-3 p-6 rounded-2xl bg-card/50 border border-border/60 shadow-sm hover:border-indigo-500/30 transition-all duration-300">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">Our Core Values</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                Efficiency, transparency, and technical rigor in every line of code we ship.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-card/50 border border-border/60 shadow-sm hover:border-indigo-500/30 transition-all duration-300">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">User Experience</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                Performance-driven interfaces designed for maximum business impact and conversion.
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
    </main>
  );
}


