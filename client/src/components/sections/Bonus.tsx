import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Calendar, Instagram, Palette, Percent, Book, Gift, Sparkles } from "lucide-react";
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
    <motion.div
      className="w-full p-2 sm:w-1/2 lg:w-1/3"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--rose-primary))] hover:shadow-xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))]" />
        <div className="absolute -right-2 -top-2">
          <div className="rounded-full bg-[hsl(var(--rose-primary))] px-3 py-1 text-xs font-bold text-white shadow-md">
            Bônus {number}
          </div>
        </div>

        <div className="mb-4 flex items-center pt-1">
          <div className="mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff0f5] to-[#ffe4e9] text-[hsl(var(--rose-primary))] transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="font-montserrat text-base font-bold leading-tight text-gray-800">{title}</h3>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-dashed border-pink-200 pt-3">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">Valor</span>
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          </div>
          <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-extrabold tracking-wide text-white shadow-sm">
            GRÁTIS
          </span>
        </div>
      </div>
    </motion.div>
  );
}

interface BonusItemProps {
  title: string;
  description: string;
}

function BonusItem({ title, description }: BonusItemProps) {
  return (
    <div className="group flex h-full items-start gap-3 rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(var(--rose-light))] text-[hsl(var(--rose-primary))]">
        <CheckIcon className="h-4 w-4" />
      </div>
      <div>
        <h4 className="font-montserrat text-sm font-extrabold tracking-wide text-gray-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{description}</p>
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
    <section className="bg-gradient-to-b from-white via-[#fff9fb] to-white pb-14 pt-10">
      <Container>
        <div className="mb-9 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[hsl(var(--rose-primary))]">
            <Gift size={14} />
            Oferta exclusiva
          </div>
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Adquira Hoje e <span className="text-[hsl(var(--rose-primary))]">Ganhe + 11 Bônus</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
            Aproveite essa oportunidade única e receba estes bônus exclusivos que vão acelerar sua carreira
          </p>
        </div>

        <div className="-mx-1 mb-11 flex flex-wrap">
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
        
        <div className="relative mb-8 overflow-hidden rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-[#fff5f7] via-white to-[#fff0f5] p-5 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
          <div className="relative mb-7 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--rose-primary))] text-white shadow-lg shadow-pink-200">
              <Sparkles size={24} />
            </div>
            <h3 className="bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
              Bônus adicionais
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Cursos completos extras para ampliar ainda mais os seus serviços
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[hsl(var(--rose-primary))] shadow-sm">
              <CheckIcon className="h-3.5 w-3.5" />
              Todos com certificado
            </span>
          </div>
          
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {additionalBonuses.map((bonus, index) => (
              <BonusItem
                key={index}
                title={bonus.title}
                description={bonus.description}
              />
            ))}
          </div>
          
          <div className="relative mt-8 text-center">
            <div className="mb-4 inline-block rounded-2xl bg-[hsl(var(--rose-primary))] px-5 py-3 text-white shadow-md">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-90">Valor total dos bônus</p>
              <p className="text-xl font-extrabold">
                <span className="line-through">R$997,00</span>
              </p>
            </div>
            
            <p className="mb-4 text-sm text-gray-700">
              Aproveite agora e receba todos estes bônus <span className="font-bold text-[hsl(var(--rose-primary))]">GRATUITAMENTE</span> ao adquirir o curso!
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
          <a href="https://checkout.cutilagemrussa.com/c/3orijyx" className="block">
            <Button 
              variant="cta" 
              size="xl" 
              className="uppercase font-bold tracking-wide shadow-lg relative overflow-hidden group transition-all duration-300"
              style={{ 
                boxShadow: "0 4px 14px rgba(255, 77, 121, 0.3)"
              }}
            >
              <span className="relative z-10">
                QUERO ACESSO COMPLETO + BÔNUS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Pagamento único de R$19,90
          </p>
        </motion.div>
      </Container>
    </section>
  );
}