import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Ban, MonitorPlay, Scissors, ShieldCheck, Star } from "lucide-react";
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

        <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] bg-[#fff5f8] p-3 sm:mt-10 sm:p-6">
          <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_30px_rgba(190,24,93,0.12)] md:grid-cols-3">
            <div className="flex flex-col items-center px-5 py-7 text-center sm:px-8 sm:py-8">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[hsl(var(--rose-primary))] text-[hsl(var(--rose-primary))]">
                <ShieldCheck className="h-11 w-11" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 font-montserrat text-xl font-extrabold text-[hsl(var(--rose-primary))]">
                Mais segurança
              </h3>
              <p className="max-w-xs text-base leading-relaxed text-slate-900">
                Técnica desenvolvida para proteger sua cliente em cada etapa.
              </p>
            </div>

            <div className="flex flex-col items-center border-t border-pink-200 px-5 py-7 text-center md:border-l md:border-t-0 sm:px-8 sm:py-8">
              <div className="relative mb-3 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[hsl(var(--rose-primary))] text-[hsl(var(--rose-primary))]">
                <Scissors className="h-11 w-11" strokeWidth={1.8} />
                <Ban className="absolute h-[4.5rem] w-[4.5rem]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-montserrat text-xl font-extrabold text-[hsl(var(--rose-primary))]">
                Sem risco de cortes
              </h3>
              <p className="max-w-xs text-base leading-relaxed text-slate-900">
                Método preciso que reduz ao máximo o risco de cortes e machucados.
              </p>
            </div>

            <div className="flex flex-col items-center border-t border-pink-200 px-5 py-7 text-center md:border-l md:border-t-0 sm:px-8 sm:py-8">
              <div className="relative mb-3 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[hsl(var(--rose-primary))] text-[hsl(var(--rose-primary))]">
                <Scissors className="h-11 w-11" strokeWidth={1.8} />
                <Ban className="absolute h-[4.5rem] w-[4.5rem]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-montserrat text-xl font-extrabold text-[hsl(var(--rose-primary))]">
                Sem uso de alicates
              </h3>
              <p className="max-w-xs text-base leading-relaxed text-slate-900">
                Realize a cutilagem russa com brocas, de forma mais delicada e eficaz.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 px-3 pb-2 pt-7 text-center sm:gap-4 sm:pt-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--rose-primary))] text-white shadow-md shadow-pink-200">
              <Star className="h-7 w-7 fill-current" strokeWidth={1.5} />
            </div>
            <p className="max-w-3xl font-montserrat text-lg font-extrabold leading-tight text-slate-900 sm:text-2xl">
              Mais precisão, mais cuidado e um acabamento impecável que{" "}
              <span className="text-[hsl(var(--rose-primary))]">fideliza suas clientes!</span>
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}