import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "../ui/check-icon";
import { Gift, Gem, Sparkles, PaintBucket, Medal } from "lucide-react";

interface BonusCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  originalPrice: string;
  delay?: number;
}

function BonusCard({ number, icon, title, description, originalPrice, delay = 0 }: BonusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="border-2 border-[hsl(var(--rose-primary))] p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0">
          <div className="bg-[hsl(var(--rose-primary))] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            BÔNUS {number}
          </div>
        </div>

        <div className="mb-4 text-3xl text-[hsl(var(--rose-primary))]">
          {icon}
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
  icon?: React.ReactNode;
}

function BonusItem({ title, description, delay = 0, icon }: BonusItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-4 border-l-4 border-[hsl(var(--rose-primary))] shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Bonus() {
  const bonuses = [
    {
      number: 1,
      icon: <Gift />,
      title: "SPA DOS PÉS",
      description: "Tratamento completo para relaxamento e beleza dos pés",
      originalPrice: "R$197"
    },
    {
      number: 2,
      icon: <PaintBucket />,
      title: "MANICURE E PEDICURE",
      description: "Técnicas profissionais de cuidados para mãos e pés",
      originalPrice: "R$250"
    },
    {
      number: 3,
      icon: <Sparkles />,
      title: "ALONGAMENTO NO MOLDE F1",
      description: "Método avançado para alongamento de unhas perfeitas",
      originalPrice: "R$197"
    },
    {
      number: 4,
      icon: <Gem />,
      title: "ALONGAMENTO DE FIBRA DE VIDRO",
      description: "Técnica durável e natural para alongamentos",
      originalPrice: "R$220"
    },
    {
      number: 5,
      icon: <Medal />,
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              number={bonus.number}
              icon={bonus.icon}
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
          className="bg-gradient-to-r from-[#fff5f7] to-[#fff0f5] border-2 border-[hsl(var(--rose-primary))] rounded-xl shadow-lg p-8 mb-8"
        >
          <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">
            <span className="bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-transparent bg-clip-text">Bônus Adicionais</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalBonuses.map((bonus, index) => (
              <BonusItem
                key={index}
                title={bonus.title}
                description={bonus.description}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="bg-[hsl(var(--rose-light))] inline-block rounded-lg p-4 mb-4">
              <p className="font-bold text-[hsl(var(--rose-primary))] text-xl">
                Valor Total dos Bônus: <span className="line-through">R$997,00</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-white px-4 py-2 rounded-lg mx-auto max-w-md mb-4 text-center font-bold">
              Todos os cursos incluem certificado de conclusão
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Aproveite agora e receba todos estes bônus <span className="font-bold text-[hsl(var(--rose-primary))]">GRATUITAMENTE</span> ao adquirir o curso!
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href="#checkout">
            <Button 
              variant="cta" 
              size="xl" 
              className="animate-pulse shadow-glow-primary"
            >
              QUERO GARANTIR TODOS OS BÔNUS
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}