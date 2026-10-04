import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
