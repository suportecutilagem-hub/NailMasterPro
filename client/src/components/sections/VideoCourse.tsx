import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MonitorPlay, ShieldCheck } from "lucide-react";
import { Container } from "../ui/container";

const featureIconSize = "h-6 w-6 sm:h-8 sm:w-8";
const courseVideoUrl = "/video-aulas-praticas.mp4";

function LocalCourseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const element = videoContainerRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px 0px", threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isNearViewport) return;

    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    video
      .play()
      .then(() => {
        setAutoplayBlocked(false);
      })
      .catch(() => {
        setAutoplayBlocked(true);
      });
  }, [isNearViewport]);

  const handleManualPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video
      .play()
      .then(() => {
        setAutoplayBlocked(false);
      })
      .catch(() => {
        setAutoplayBlocked(true);
      });
  };

  return (
    <div ref={videoContainerRef} className="relative">
      <video
        id="videoCutilagem"
        ref={videoRef}
        className="block aspect-[720/836] w-full rounded-[1rem] bg-[#fff5f8] object-cover"
        src={isNearViewport ? courseVideoUrl : undefined}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        loop
        preload={isNearViewport ? "metadata" : "none"}
        aria-label="Aula prática de cutilagem russa"
      >
      </video>
      {autoplayBlocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[1rem] bg-slate-950/65 px-4 text-center">
          <span className="text-4xl" aria-hidden="true">
            🎥
          </span>
          <p className="mt-3 font-montserrat text-sm font-extrabold tracking-wide text-white sm:text-base">
            VEJA UMA DEMONSTRAÇÃO DA TÉCNICA
          </p>
          <button
            type="button"
            onClick={handleManualPlay}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--rose-primary))] px-5 py-3 font-montserrat text-sm font-extrabold text-white shadow-lg shadow-pink-950/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[hsl(var(--rose-primary))]" aria-hidden="true">
              ▶
            </span>
            ASSISTIR VÍDEO
          </button>
        </div>
      )}
    </div>
  );
}

export default function VideoCourse() {
  return (
    <section id="video-course" className="bg-[#fff5f8] pb-8 pt-14 sm:pb-12 sm:pt-20">
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

        <div
          className="mx-auto mt-8 max-w-sm rounded-[1.75rem] bg-gradient-to-br from-[hsl(var(--rose-primary))] via-[#f4729a] to-[#fbcfe8] p-1.5 shadow-[0_18px_45px_rgba(190,24,93,0.18)] sm:mt-10 sm:p-2"
        >
          <div className="overflow-hidden rounded-[1.35rem] bg-white p-1 shadow-inner sm:p-1.5">
            <LocalCourseVideo />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] bg-[#fff5f8] p-2 sm:mt-10 sm:p-4">
          <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_30px_rgba(190,24,93,0.12)]">
            <div className="flex items-center justify-center gap-1.5 px-2 py-4 sm:gap-3 sm:px-8 sm:py-6">
              <ShieldCheck className={`${featureIconSize} shrink-0 text-[hsl(var(--rose-primary))]`} strokeWidth={1.8} />
              <h3 className="font-montserrat text-xs font-extrabold leading-tight text-[hsl(var(--rose-primary))] sm:text-xl">
                Sem risco de cortes
              </h3>
            </div>

            <div className="flex items-center justify-center gap-1.5 border-l border-pink-200 px-2 py-4 sm:gap-3 sm:px-8 sm:py-6">
              <span className={`box-border flex ${featureIconSize} shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[hsl(var(--rose-primary))] text-[hsl(var(--rose-primary))] leading-none`}>
                <svg
                  viewBox="4 4 16 16"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
                </svg>
              </span>
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