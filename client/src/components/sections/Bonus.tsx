import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "../ui/check-icon";

interface BonusCardProps {
  number: number;
  title: string;
  description: string;
  originalPrice: string;
  delay?: number;
}

function BonusCard({ number, title, description, originalPrice, delay = 0 }: BonusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="w-full sm:w-1/2 lg:w-1/3 p-3"
    >
      <Card className="relative h-full flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[hsl(var(--rose-primary))]">
        <div className="absolute top-0 right-0">
          <div className="bg-[hsl(var(--rose-primary))] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            BÔNUS {number}
          </div>
        </div>

        <h3 className="font-montserrat font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-2">
          {description}
        </p>
        <div className="flex items-center mt-4">
          <span className="text-gray-500 line-through mr-2">{originalPrice}</span>
          <span className="bg-[hsl(var(--teal))] text-white text-xs font-bold px-2 py-1 rounded-full">GRÁTIS</span>
        </div>
      </Card>
    </motion.div>
  );
}

interface BonusItemProps {
  title: string;
  description: string;
  delay?: number;
}

function BonusItem({ title, description, delay = 0 }: BonusItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start mb-4"
    >
      <div className="flex-shrink-0 bg-[hsl(var(--rose-primary))] rounded-full p-1 mr-3">
        <CheckIcon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Bonus() {
  const bonuses = [
    {
      number: 1,
      title: "SPA DOS PÉS",
      description: "Tratamento completo para relaxamento e beleza dos pés",
      originalPrice: "R$197"
    },
    {
      number: 2,
      title: "MANICURE E PEDICURE",
      description: "Técnicas profissionais de cuidados para mãos e pés",
      originalPrice: "R$250"
    },
    {
      number: 3,
      title: "ALONGAMENTO NO MOLDE F1",
      description: "Método avançado para alongamento de unhas perfeitas",
      originalPrice: "R$197"
    },
    {
      number: 4,
      title: "ALONGAMENTO DE FIBRA DE VIDRO",
      description: "Técnica durável e natural para alongamentos",
      originalPrice: "R$220"
    },
    {
      number: 5,
      title: "UNHAS DECORADAS",
      description: "Designs criativos e tendências para nail art",
      originalPrice: "R$170"
    }
  ];

  const additionalBonuses = [
    {
      title: "SPA DOS PÉS",
      description: "Tratamento completo para relaxamento e beleza dos pés"
    },
    {
      title: "MANICURE E PEDICURE",
      description: "Técnicas profissionais de cuidados para mãos e pés"
    },
    {
      title: "ALONGAMENTO NO MOLDE F1",
      description: "Método avançado para alongamento de unhas perfeitas"
    },
    {
      title: "ALONGAMENTO DE UNHAS DE FIBRA DE VIDRO",
      description: "Técnica durável e natural para alongamentos"
    },
    {
      title: "UNHAS DECORADAS",
      description: "Designs criativos e tendências para nail art"
    },
    {
      title: "CERTIFICADO RECONHECIDO",
      description: "Documento oficial que comprova sua formação profissional"
    }
  ];

  return (
    <section className="pt-0 pb-6 lg:pb-10 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">OFERTA EXCLUSIVA</h5>
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            Adquira Hoje e <span className="text-[hsl(var(--rose-primary))]">Ganhe + 11 Bônus</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aproveite essa oportunidade única e receba estes bônus exclusivos que vão acelerar sua carreira
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-3 mb-8">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              number={bonus.number}
              title={bonus.title}
              description={bonus.description}
              originalPrice={bonus.originalPrice}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold font-montserrat text-center mb-6">
            + 6 Bônus Adicionais para Impulsionar Seus Resultados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBonuses.map((bonus, index) => (
              <BonusItem
                key={index}
                title={bonus.title}
                description={bonus.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-montserrat mb-2">
              Não Perca Esta <span className="text-[hsl(var(--rose-primary))]">Oportunidade Única!</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Inscreva-se agora e aproveite todos estes bônus exclusivos. Oferta por tempo limitado!
            </p>
          </div>
          <div className="inline-block">
            <Button variant="primary" size="lg" className="animate-pulse shadow-glow-primary">
              QUERO COMEÇAR AGORA COM DESCONTO
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Pagamento único de R$65,00 • Acesso imediato • Garantia de 7 dias
          </p>
        </motion.div>
      </Container>
    </section>
  );
}