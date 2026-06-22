import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Star } from "lucide-react";
import certificateImg from "@assets/certificate_nobg.png";

export default function Certificate() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fff5f8] to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[hsl(var(--rose-primary))]/8 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--rose-primary))]/8 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* left: text */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* premium badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[hsl(var(--rose-primary))]">
                Certificação Premium
              </span>
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-5 leading-tight">
              Obtenha seu{" "}
              <span className="text-[hsl(var(--rose-primary))]">Certificado<br />PREMIUM</span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
              Ao concluir o curso você recebe{" "}
              <strong className="text-gray-800">6 certificados exclusivos</strong> de
              conclusão, com validade nacional — assine seus serviços com autoridade
              e mostre aos seus clientes que você é uma profissional de elite.
            </p>
          </motion.div>

          {/* right: certificate image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src={certificateImg}
              alt="Certificado Premium de Cutilagem Russa"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
