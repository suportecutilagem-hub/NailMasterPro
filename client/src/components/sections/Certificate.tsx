import { motion } from "framer-motion";
import { Container } from "../ui/container";
import certificateImg from "@assets/image_1782160848500.png";

export default function Certificate() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.h2
          className="font-montserrat font-extrabold text-3xl md:text-4xl text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Obtenha seu{" "}
          <span className="text-[hsl(var(--rose-primary))]">Certificado PREMIUM</span>
        </motion.h2>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={certificateImg}
            alt="Certificado Premium de Cutilagem Russa"
            className="max-w-xl w-full drop-shadow-xl rounded-xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}
