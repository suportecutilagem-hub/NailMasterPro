import { motion } from "framer-motion";
import { MonitorPlay } from "lucide-react";
import { Container } from "../ui/container";

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
            <video
              className="pointer-events-none aspect-[720/836] w-full rounded-[1rem] bg-[#fff5f8] object-cover"
              src="/video-aulas-praticas.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              aria-label="Aula prática de cutilagem russa"
            />
          </div>
        </motion.div>

      </Container>
    </section>
  );
}