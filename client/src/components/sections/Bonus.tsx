import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Calendar, Instagram, Palette, Percent, Book } from "lucide-react";
import { CheckIcon } from "../ui/check-icon";

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
      <div className="bg-white rounded-lg shadow-md p-4 h-full border-2 border-[hsl(var(--rose-primary))] relative hover:shadow-lg transition-shadow duration-300">
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
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
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
    <div className="mb-3 bg-white shadow-md rounded-md p-3 border-l-4 border-[hsl(var(--rose-primary))]">
      <h4 className="font-bold text-sm">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
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
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-[#fff5f7] to-[#fff0f5] rounded-lg p-8 mb-8 border-2 border-[hsl(var(--rose-primary))] shadow-lg">
          <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-transparent bg-clip-text">
            Bônus Adicionais: Cursos Exclusivos Completos com Certificado
          </h3>
          
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
            <div className="inline-block bg-[hsl(var(--rose-primary))] text-white rounded-lg p-4 mb-4 shadow-md">
              <p className="font-bold text-xl">
                Valor Total dos Bônus: <span className="line-through">R$997,00</span>
              </p>
            </div>
            
            <p className="text-gray-700 mb-4">
              Aproveite agora e receba todos estes bônus <span className="font-bold text-[hsl(var(--rose-primary))]">GRATUITAMENTE</span> ao adquirir o curso!
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://pay.cakto.com.br/uk8zdk5_340907" target="_blank" rel="noopener noreferrer" className="block">
            <Button 
              variant="cta" 
              size="xl" 
              className="uppercase font-bold tracking-wide shadow-lg"
              style={{ 
                boxShadow: "0 4px 14px rgba(255, 77, 121, 0.3)"
              }}
            >
              QUERO TODOS OS BÔNUS AGORA
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Pagamento único de R$65,00 • Acesso vitalício
          </p>
        </div>
      </Container>
    </section>
  );
}