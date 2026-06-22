import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Award, BadgeCheck, Shield } from "lucide-react";
import certificateImg from "@assets/image_1782160848500.png";

export default function Certificate() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b2e] to-[#1a1a2e] relative overflow-hidden">
      {/* decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[hsl(var(--rose-primary))] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[hsl(var(--rose-primary))] blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* left: text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--rose-primary))]/20 border border-[hsl(var(--rose-primary))]/40 text-[hsl(var(--rose-primary))] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Award size={16} />
              Certificação Incluída
            </div>

            <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6">
              Obtenha seu{" "}
              <span className="text-[hsl(var(--rose-primary))]">
                Certificado PREMIUM
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Ao concluir o curso de Cutilagem Russa Profissional, você recebe
              um certificado de conclusão com validade nacional — reconhecido
              por salões e spas de todo o Brasil.
            </p>

            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {[
                { icon: BadgeCheck, text: "Certificado digital enviado imediatamente após a conclusão" },
                { icon: BadgeCheck, text: "16 horas de carga horária reconhecida" },
                { icon: Shield,     text: "Validade nacional — apresente aos seus clientes com orgulho" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <Icon size={20} className="text-[hsl(var(--rose-primary))] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-base">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* right: certificate image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative max-w-[480px] w-full">
              {/* glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-[hsl(var(--rose-primary))]/20 blur-xl" />
              <img
                src={certificateImg}
                alt="Certificado Premium de Cutilagem Russa"
                className="relative w-full drop-shadow-2xl rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
