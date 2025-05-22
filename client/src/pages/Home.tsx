import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CourseContent from "@/components/sections/CourseContent";
import Results from "@/components/sections/Results";
import Bonus from "@/components/sections/Bonus";
import Testimonials from "@/components/sections/Testimonials";
import CourseOverview from "@/components/sections/CourseOverview";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CourseContent />
      {/* Results removido conforme solicitado */}
      <Bonus />
      <Testimonials />
      <CourseOverview />
      <FAQ />
      <CTA />
      
      {/* Back to Top Button - sem animação */}
      {showBackToTop && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={handleBackToTop}
            size="icon"
            className="rounded-full bg-[hsl(var(--rose-primary))] hover:bg-[hsl(var(--rose-secondary))] text-white shadow-lg"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <Footer />
    </div>
  );
}