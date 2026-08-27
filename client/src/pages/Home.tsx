import { lazy, Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import VideoCourse from "@/components/sections/VideoCourse";

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
  return <div className="h-32 bg-white" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <VideoCourse />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CourseContent />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Certificate />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Bonus />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CourseOverview />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
    </div>
  );
}
