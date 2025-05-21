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
      <div className="flex items-start">
        {icon && <div className="mr-3 mt-1">{icon}</div>}
        <div>
          <h4 className="font-bold mb-1">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Bonus() {
  const bonuses = [
    {
      number: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a2 2 0 014 0v6m-4 0h4m-4 0h0M9 11.5V14m0-2.5v-6a2 2 0 014 0v6m-4 0h4m-4 0h0M14 11.5V14m0-2.5v-6a2 2 0 014 0v6m-4 0h4m-4 0h0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "UNHAS DECORADAS",
      description: "Designs criativos e tendências para nail art",
      originalPrice: "R$170"
    }
  ];

  const additionalBonuses = [
    {
      title: "Curso Instagram de Sucesso",
      description: "Aprenda a transformar seu perfil em uma vitrine profissional que atrai e conquista clientes todos os dias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Curso Manicure Agenda Cheia",
      description: "Aprenda a lotar sua agenda com clientes fiéis e recorrentes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Divulgação no Instagram Oficial",
      description: "Seja vista por mais de 100 mil pessoas sem gastar nada e aumente visibilidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Aula Exclusiva de Esmaltação em Gel",
      description: "Domine essa técnica moderna e lucre mais com seus atendimentos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Modelos de Unhas Decoradas",
      description: "Receba 5 inspirações de nail art para encantar suas clientes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "30% de Desconto em Materiais",
      description: "Economize nos itens que você realmente vai usar no curso.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
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
