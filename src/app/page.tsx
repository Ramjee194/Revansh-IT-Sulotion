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
      <section id="about" className="py-32 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
                    <img src="/indian_tech_team_1778924018269.png" className="w-full h-full object-cover" alt="Team" />
                  </div>
                  <div className="aspect-square rounded-3xl bg-indigo-600 p-8 text-white flex flex-col justify-center shadow-2xl shadow-indigo-500/20">
                    <h4 className="text-5xl font-black mb-2">08+</h4>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Years Excellence</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square rounded-3xl bg-card border border-border p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4 font-bold">A+</div>
                    <p className="text-lg font-bold">Engineering Standard</p>
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
                    <img src="/indian_modern_workspace_1778924038368.png" className="w-full h-full object-cover" alt="Workspace" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-xl md:text-4xl font-display font-black leading-tight uppercase tracking-tight">
                  High Precision <br />
                  <span className="text-indigo-600 tracking-widest">Engineering.</span>
                </h2>
                <div className="w-24 h-2 bg-indigo-600" />
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Revansh Tech provides high-availability technical solutions.
                We focus on performance, security, and scalable infrastructure
                for modern global enterprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Our Core Values</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                    Efficiency, transparency, and technical rigor in every line of code we ship.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">User Experience</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                    Performance-driven interfaces designed for maximum business impact and conversion.
                  </p>
                </div>
              </div>
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


