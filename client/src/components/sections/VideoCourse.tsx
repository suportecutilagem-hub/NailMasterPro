import { motion } from "framer-motion";
import { MonitorPlay } from "lucide-react";
import { Container } from "../ui/container";

export default function VideoCourse() {
  return (
    <section className="py-14 sm:py-20 bg-[#fff5f8]">
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

      </Container>
    </section>
  );
}