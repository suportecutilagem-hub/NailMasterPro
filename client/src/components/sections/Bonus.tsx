import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Calendar, Instagram, Palette, Percent, Book } from "lucide-react";
import { CheckIcon } from "../ui/check-icon";
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
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-md p-4 h-full border-2 border-[hsl(var(--rose-primary))] relative">
        <div className="absolute -top-2 -right-2">
          <div className="bg-[hsl(var(--rose-primary))] text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
            Bônus {number}
          </div>
        </div>

        <div className="flex items-center mb-3 pt-1">
          <div className="w-10 h-10 mr-3 text-[hsl(var(--rose-primary))] bg-gradient-to-br from-[#fff0f5] to-[#ffe4e9] rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <h3 className="font-montserrat font-bold text-base text-gray-800 leading-tight">{title}</h3>
        </div>

        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center mt-auto pt-2 border-t border-gray-100">
          <span className="text-gray-500 line-through text-sm mr-2">{originalPrice}</span>
          <span className="bg-[hsl(var(--teal))] text-white text-xs font-bold px-2 py-1 rounded-full">
            GRÁTIS
          </span>
        </div>
      </div>
    </div>
  );
}

interface BonusItemProps {
  title: string;
  description: string;
}

function BonusItem({ title, description }: BonusItemProps) {
  return (
    <div className="mb-4 bg-white shadow-lg rounded-lg p-4 border-l-4 border-[hsl(var(--rose-primary))] transform hover:scale-105 transition-transform duration-200">
      <h4 className="font-bold text-base text-[hsl(var(--rose-primary))] mb-2">{title}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      <div className="mt-2 inline-block bg-[hsl(var(--teal))] text-white text-xs font-bold px-2 py-1 rounded-full">
        INCLUÍDO GRÁTIS
      </div>
    </div>
  );
}

export default function Bonus() {
  const bonuses = [
    {
      number: 1,
      icon: <Calendar className="w-8 h-8" />,
      title: "Curso Manicure Agenda Cheia",
      description: "Aprenda a lotar sua agenda com clientes fiéis e recorrentes.",
      originalPrice: "R$97"
    },
    {
      number: 2,
      icon: <Instagram className="w-8 h-8" />,
      title: "Divulgação no Instagram Oficial",
      description: "Seja vista por mais de 100 mil pessoas sem gastar nada e aumente a visibilidade.",
      originalPrice: "R$250"
    },
    {
      number: 3,
      icon: <Palette className="w-8 h-8" />,
      title: "Aula Exclusiva de Esmaltação em Gel",
      description: "Domine essa técnica moderna e lucre mais com seus atendimentos.",
      originalPrice: "R$147"
    },
    {
      number: 4,
      icon: <Book className="w-8 h-8" />,
      title: "Modelos de Unhas Decoradas",
      description: "Receba 5 inspirações de nail art para encantar suas clientes.",
      originalPrice: "R$97"
    },
    {
      number: 5,
      icon: <Percent className="w-8 h-8" />,
      title: "30% de desconto em materiais",
      description: "Economize nos itens que você realmente vai usar no curso.",
      originalPrice: "R$120"
    },
    {
      number: 6,
      icon: <Instagram className="w-8 h-8" />,
      title: "Curso Instagram de Sucesso",
      description: "Aprenda a transformar seu perfil em uma vitrine profissional que atrai e conquista clientes todos os dias.",
      originalPrice: "R$197"
    }
  ];

  const additionalBonuses = [
    {
      title: "🌟 SPA DOS PÉS PROFISSIONAL",
      description: "💰 VALOR: R$147 - Tratamento completo VIP para relaxamento e beleza dos pés que suas clientes vão AMAR!"
    },
    {
      title: "💅 MANICURE E PEDICURE COMPLETA",
      description: "💰 VALOR: R$197 - Técnicas profissionais secretas de cuidados para mãos e pés com acabamento de salão!"
    },
    {
      title: "💎 ALONGAMENTO NO MOLDE F1",
      description: "💰 VALOR: R$247 - Método EXCLUSIVO e avançado para alongamento de unhas perfeitas que duram semanas!"
    },
    {
      title: "✨ ALONGAMENTO DE FIBRA DE VIDRO",
      description: "💰 VALOR: R$197 - Técnica PREMIUM durável e natural para alongamentos que parecem unhas naturais!"
    },
    {
      title: "🎨 NAIL ART E UNHAS DECORADAS",
      description: "💰 VALOR: R$147 - + de 50 designs criativos e tendências para nail art que vão impressionar suas clientes!"
    }
  ];

  return (
    <section className="pt-8 pb-12 bg-white">
      <Container>
        <div className="text-center mb-8">
          <h5 className="text-[hsl(var(--rose-primary))] font-semibold mb-2 uppercase text-sm">OFERTA EXCLUSIVA</h5>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Adquira Hoje e <span className="text-[hsl(var(--rose-primary))]">Ganhe + 11 Bônus</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Aproveite essa oportunidade única e receba estes bônus exclusivos que vão acelerar sua carreira
          </p>
        </div>

        <div className="flex flex-wrap -mx-1 mb-10">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              number={bonus.number}
              icon={bonus.icon}
              title={bonus.title}
              description={bonus.description}
              originalPrice={bonus.originalPrice}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-[#fff5f7] to-[#fff0f5] rounded-lg p-8 mb-8 border-2 border-[hsl(var(--rose-primary))] shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[hsl(var(--rose-primary))] text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-6 -translate-y-2">
            GRÁTIS!
          </div>
          <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-transparent bg-clip-text">
            🎁 BÔNUS ADICIONAIS EXCLUSIVOS
          </h3>
          <p className="text-center text-gray-600 mb-6 font-medium">
            5 Cursos Completos com Certificado • Valor Total: R$935,00
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBonuses.map((bonus, index) => (
              <BonusItem
                key={index}
                title={bonus.title}
                description={bonus.description}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-white rounded-lg p-6 mb-4 shadow-xl">
              <p className="font-bold text-sm mb-2">VALOR TOTAL DE TODOS OS BÔNUS:</p>
              <p className="font-bold text-3xl">
                <span className="line-through opacity-70">R$1.932,00</span>
              </p>
              <p className="font-bold text-2xl text-yellow-300 mt-2">
                HOJE: 100% GRÁTIS! 🎉
              </p>
            </div>
            
            <p className="text-gray-700 mb-4 text-lg font-medium">
              Aproveite esta <span className="font-bold text-[hsl(var(--rose-primary))] text-xl">OPORTUNIDADE ÚNICA</span> e receba todos estes bônus <span className="font-bold text-[hsl(var(--rose-primary))] bg-yellow-100 px-2 py-1 rounded">GRATUITAMENTE</span> ao adquirir o curso!
            </p>
          </div>
        </div>
        
        <motion.div 
          className="text-center"
          whileHover={{ 
            scale: 1.08,
            rotate: [0, -1, 1, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 8px 20px rgba(236, 72, 153, 0.3)",
              "0 15px 35px rgba(236, 72, 153, 0.6)",
              "0 8px 20px rgba(236, 72, 153, 0.3)"
            ],
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <a href="https://pay.cakto.com.br/uk8zdk5_340907" target="_blank" rel="noopener noreferrer" className="block">
            <Button 
              variant="cta" 
              size="xl" 
              className="uppercase font-bold tracking-wide shadow-lg relative overflow-hidden group transition-all duration-300"
              style={{ 
                boxShadow: "0 4px 14px rgba(255, 77, 121, 0.3)"
              }}
            >
              <span className="relative z-10">
                QUERO TODOS OS BÔNUS AGORA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Pagamento único de R$27,00 • Acesso vitalício
          </p>
        </motion.div>
      </Container>
    </section>
  );
}