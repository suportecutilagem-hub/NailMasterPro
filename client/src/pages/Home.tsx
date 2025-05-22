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
export default function Home() {
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
      <Footer />
    </div>
  );
}