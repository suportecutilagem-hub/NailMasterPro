import { motion } from "framer-motion";
import { Container } from "../ui/container";
import certificateImg from "@assets/certificate_nobg.png";

export default function Certificate() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fff5f8] to-white relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[hsl(var(--rose-primary))]/8 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--rose-primary))]/8 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* tag */}
          <motion.span
            className="inline-block bg-[hsl(var(--rose-primary))]/10 text-[hsl(var(--rose-primary))] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Incluído no curso
          </motion.span>

          {/* title */}
          <motion.h2
            className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-5 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Obtenha seu{" "}
            <span className="text-[hsl(var(--rose-primary))]">Certificado PREMIUM</span>
          </motion.h2>

          {/* description */}
          <motion.p
            className="text-gray-500 text-lg max-w-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            Ao concluir o curso você recebe um certificado digital de conclusão
            com <strong className="text-gray-700">16 horas de carga horária</strong>,
            assinado pela professora Paula Eduarda — reconhecido em salões e spas
            de todo o Brasil.
          </motion.p>

          {/* certificate image */}
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={certificateImg}
              alt="Certificado Premium de Cutilagem Russa"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
