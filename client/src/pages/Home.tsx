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
import { motion, AnimatePresence } from "framer-motion";
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
      <Results />
      <Bonus />
      <Testimonials />
      <CourseOverview />
      <FAQ />
      <CTA />
      <Footer />
      
      {/* Mobile fixed CTA */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 px-4 z-40">
        <a 
          href="https://pay.cakto.com.br/uk8zdk5_340907" 
          className="block w-full bg-[hsl(var(--rose-primary))] hover:bg-[hsl(var(--rose-secondary))] text-white text-center font-bold py-3 rounded-full shadow-lg pink-shadow animate-pulse"
        >
          QUERO COMEÇAR AGORA →
        </a>
      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button
              size="icon"
              onClick={handleBackToTop}
              className="rounded-full bg-[hsl(var(--rose-primary))] hover:bg-[hsl(var(--rose-secondary))] shadow-lg"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
