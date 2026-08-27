import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MonitorPlay, ShieldCheck } from "lucide-react";
import { Container } from "../ui/container";

function LazyCourseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="pointer-events-none aspect-[720/836] w-full rounded-[1rem] bg-[#fff5f8] object-cover"
      src={shouldLoad ? "/video-aulas-praticas.mp4" : undefined}
      autoPlay
      muted
      playsInline
      loop
      preload={shouldLoad ? "auto" : "none"}
      aria-label="Aula prática de cutilagem russa"
    />
  );
}

function NoPliersIcon() {
  return (
    <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[hsl(var(--rose-primary))] text-[hsl(var(--rose-primary))]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="m8.5 10.5-4-4a2.12 2.12 0 0 1 3-3l4 4" />
        <path d="m15.5 10.5 4-4a2.12 2.12 0 0 0-3-3l-4 4" />
        <path d="m12 8-2 2 4 4 2-2-4-4Z" />
        <path d="m10 14-4 4m8-4 4 4" />
      </svg>
      <span className="absolute left-[-3px] top-1/2 h-[2px] w-[calc(100%+6px)] -rotate-45 bg-[hsl(var(--rose-primary))]" />
    </span>
  );
}

export default function VideoCourse() {
  return (
    <section id="video-course" className="py-14 sm:py-20 bg-[#fff5f8]">
      <Container>
        <motion.div
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--rose-primary))] text-white shadow-lg shadow-pink-200">
            <MonitorPlay size={32} strokeWidth={1.8} />
          </div>
          <h2 className="font-montserrat text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Aprenda com{" "}
            <span className="text-[hsl(var(--rose-primary))]">vídeo aulas práticas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            O curso é 100% online e em vídeo, com explicações didáticas para você
            acompanhar cada etapa da cutilagem russa e praticar com segurança.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-sm rounded-[1.75rem] bg-gradient-to-br from-[hsl(var(--rose-primary))] via-[#f4729a] to-[#fbcfe8] p-1.5 shadow-[0_18px_45px_rgba(190,24,93,0.18)] sm:mt-10 sm:p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-[1.35rem] bg-white p-1 shadow-inner sm:p-1.5">
            <LazyCourseVideo />
          </div>
        </motion.div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] bg-[#fff5f8] p-2 sm:mt-10 sm:p-4">
          <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_30px_rgba(190,24,93,0.12)]">
            <div className="flex items-center justify-center gap-1.5 px-2 py-4 sm:gap-3 sm:px-8 sm:py-6">
              <ShieldCheck className="h-6 w-6 shrink-0 text-[hsl(var(--rose-primary))] sm:h-8 sm:w-8" strokeWidth={1.8} />
              <h3 className="font-montserrat text-xs font-extrabold leading-tight text-[hsl(var(--rose-primary))] sm:text-xl">
                Sem risco de cortes
              </h3>
            </div>

            <div className="flex items-center justify-center gap-1.5 border-l border-pink-200 px-2 py-4 sm:gap-3 sm:px-8 sm:py-6">
              <NoPliersIcon />
              <h3 className="font-montserrat text-xs font-extrabold leading-tight text-[hsl(var(--rose-primary))] sm:text-xl">
                Sem uso de alicates
              </h3>
            </div>
          </div>

          <p className="mx-auto max-w-3xl px-3 pb-2 pt-7 text-center font-montserrat text-lg font-extrabold leading-tight text-slate-900 sm:pt-8 sm:text-2xl">
            Mais precisão, mais cuidado e um acabamento impecável que{" "}
            <span className="text-[hsl(var(--rose-primary))]">fideliza suas clientes!</span>
          </p>
        </div>

      </Container>
    </section>
  );
}