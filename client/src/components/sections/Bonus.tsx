import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

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
}

function BonusItem({ title, description, delay = 0 }: BonusItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-4 border-l-4 border-[hsl(var(--rose-primary))]"
    >
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

export default function Bonus() {
  const bonuses = [
    {
      number: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Curso Manicure Agenda Cheia",
      description: "Aprenda a lotar sua agenda com clientes fiéis e recorrentes.",
      originalPrice: "R$97"
    },
    {
      number: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Divulgação no Instagram Oficial",
      description: "Seja vista por mais de 100 mil pessoas sem gastar nada e aumente visibilidade.",
      originalPrice: "R$250"
    },
    {
      number: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Aula Exclusiva de Esmaltação em Gel",
      description: "Domine essa técnica moderna e lucre mais com seus atendimentos.",
      originalPrice: "R$147"
    },
    {
      number: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Modelos de Unhas Decoradas",
      description: "Receba 5 inspirações de nail art para encantar suas clientes.",
      originalPrice: "R$97"
    },
    {
      number: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "30% de Desconto em Materiais",
      description: "Economize nos itens que você realmente vai usar no curso.",
      originalPrice: "R$120"
    },
    {
      number: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Curso Instagram de Sucesso",
      description: "Aprenda a transformar seu perfil em uma vitrine profissional que atrai e conquista clientes todos os dias.",
      originalPrice: "R$197"
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
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">OFERTA EXCLUSIVA</h5>
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            Adquira Hoje e <span className="text-[hsl(var(--rose-primary))]">Ganhe + 6 Bônus</span>
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
          className="bg-gray-50 rounded-xl shadow-lg p-4 sm:p-8 mb-4 sm:mb-8"
        >
          <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-center">
            Bônus Adicionais: Cursos Exclusivos Completos com Certificado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
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
              roundedness="full" 
              size="xl" 
              className="shadow-lg"
            >
              QUERO GARANTIR TODOS OS BÔNUS
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
