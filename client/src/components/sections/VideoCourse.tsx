import { motion } from "framer-motion";
import { Clock3, MonitorPlay, Smartphone } from "lucide-react";
import { Container } from "../ui/container";

const benefits = [
  {
    icon: MonitorPlay,
    title: "Videoaulas passo a passo",
    description: "Veja cada detalhe da técnica demonstrado de forma clara e prática.",
  },
  {
    icon: Clock3,
    title: "Aprenda no seu ritmo",
    description: "Assista às aulas com calma e reveja os conteúdos sempre que precisar.",
  },
  {
    icon: Smartphone,
    title: "Acesse de onde estiver",
    description: "Estude pelo celular, tablet ou computador, onde for mais conveniente.",
  },
];

export default function VideoCourse() {
  return (
    <section className="py-14 sm:py-20 bg-[#fff5f8]">
      <Container>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--rose-primary))] text-white shadow-lg shadow-pink-200">
            <MonitorPlay size={32} strokeWidth={1.8} />
          </div>
          <h2 className="font-montserrat text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Aprenda com{" "}
            <span className="text-[hsl(var(--rose-primary))]">videoaulas práticas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            O curso é 100% online e em vídeo, com explicações didáticas para você
            acompanhar cada etapa da cutilagem russa e praticar com segurança.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-pink-100 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--rose-light))] text-[hsl(var(--rose-primary))]">
                <Icon size={22} />
              </div>
              <h3 className="font-montserrat text-base font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}