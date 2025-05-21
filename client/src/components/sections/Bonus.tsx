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
      className="bg-white rounded-lg p-4 border-l-4 border-[hsl(var(--rose-primary))] shadow-sm hover:shadow-md transition-shadow duration-300"
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "SPA DOS PÉS",
      description: "Tratamento completo para relaxamento e beleza dos pés",
      originalPrice: "R$197"
    },
    {
      number: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "MANICURE E PEDICURE",
      description: "Técnicas profissionais de cuidados para mãos e pés",
      originalPrice: "R$250"
    },
    {
      number: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: "ALONGAMENTO NO MOLDE F1",
      description: "Método avançado para alongamento de unhas perfeitas",
      originalPrice: "R$197"
    },
    {
      number: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "ALONGAMENTO DE UNHAS DE FIBRA DE VIDRO",
      description: "Técnica durável e natural para alongamentos",
      originalPrice: "R$220"
    },
    {
      number: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "UNHAS DECORADAS",
      description: "Designs criativos e tendências para nail art",
      originalPrice: "R$170"
    },
    {
      number: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "CURSO INSTAGRAM DE SUCESSO",
      description: "Aprenda a transformar seu perfil em uma vitrine profissional que atrai e conquista clientes todos os dias.",
      originalPrice: "R$197"
    }
  ];

  const additionalBonuses = [
    {
      title: "Curso Manicure Agenda Cheia",
      description: "Aprenda a lotar sua agenda com clientes fiéis e recorrentes."
    },
    {
      title: "Divulgação no Instagram Oficial",
      description: "Seja vista por mais de 100 mil pessoas sem gastar nada e aumente visibilidade."
    },
    {
      title: "Aula Exclusiva de Esmaltação em Gel",
      description: "Domine essa técnica moderna e lucre mais com seus atendimentos."
    },
    {
      title: "Modelos de Unhas Decoradas",
      description: "Receba 5 inspirações de nail art para encantar suas clientes."
    },
    {
      title: "30% de Desconto em Materiais",
      description: "Economize nos itens que você realmente vai usar no curso."
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
            <span className="bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-transparent bg-clip-text">Bônus Adicionais: Cursos Exclusivos Completos com Certificado</span>
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
