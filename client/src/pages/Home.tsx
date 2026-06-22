import { lazy, Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

const CourseContent  = lazy(() => import("@/components/sections/CourseContent"));
const Bonus          = lazy(() => import("@/components/sections/Bonus"));
const Certificate    = lazy(() => import("@/components/sections/Certificate"));
const Testimonials   = lazy(() => import("@/components/sections/Testimonials"));
const CourseOverview = lazy(() => import("@/components/sections/CourseOverview"));
const FAQ            = lazy(() => import("@/components/sections/FAQ"));
const CTA            = lazy(() => import("@/components/sections/CTA"));

function SectionFallback() {
  return <div className="h-32 bg-white" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <CourseContent />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Bonus />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Certificate />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CourseOverview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTA />
      </Suspense>
    </div>
  );
}
