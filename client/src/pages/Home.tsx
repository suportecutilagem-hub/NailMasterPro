import { lazy, Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DeferredSection from "@/components/DeferredSection";

const VideoCourse = lazy(() => import("@/components/sections/VideoCourse"));
const loadCourseContent = () => import("@/components/sections/CourseContent");
const loadBonus = () => import("@/components/sections/Bonus");
const loadCertificate = () => import("@/components/sections/Certificate");
const loadTestimonials = () => import("@/components/sections/Testimonials");
const loadCourseOverview = () => import("@/components/sections/CourseOverview");
const loadFAQ = () => import("@/components/sections/FAQ");

const CourseContent = lazy(loadCourseContent);
const Bonus = lazy(loadBonus);
const Certificate = lazy(loadCertificate);
const Testimonials = lazy(loadTestimonials);
const CourseOverview = lazy(loadCourseOverview);
const FAQ = lazy(loadFAQ);

function SectionFallback() {
  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <DeferredSection fallbackHeight={860} rootMargin="900px 0px">
        <Suspense fallback={<SectionFallback />}>
          <VideoCourse />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallbackHeight={980}>
        <Suspense fallback={<SectionFallback />}>
          <CourseContent />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallbackHeight={960}>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallbackHeight={620}>
        <Suspense fallback={<SectionFallback />}>
          <Certificate />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallbackHeight={1250}>
        <Suspense fallback={<SectionFallback />}>
          <Bonus />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallbackHeight={680}>
        <Suspense fallback={<SectionFallback />}>
          <CourseOverview />
        </Suspense>
      </DeferredSection>
      <DeferredSection fallbackHeight={680}>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
      </DeferredSection>
    </div>
  );
}
