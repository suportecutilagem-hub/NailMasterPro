import { Container } from "../ui/container";
import { Button } from "../ui/button";
import {
  Calendar,
  Instagram,
  Palette,
  Percent,
  Book,
  Gift,
  Footprints,
  Hand,
  Ruler,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";
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
    <motion.li
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className="group relative overflow-hidden rounded-2xl border border-[#f1cada] bg-white shadow-[0_7px_22px_rgba(190,24,93,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#eb8faf] hover:shadow-[0_14px_30px_rgba(190,24,93,0.14)]"
    >
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[hsl(var(--rose-primary))] via-[#fb7185] to-[#f9a8d4]" />
      <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#fff1f5] transition-transform duration-500 group-hover:scale-125" />

      <div className="relative z-10 flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-5">
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--rose-primary))] font-montserrat text-xs font-extrabold text-white shadow-md shadow-pink-200">
            {String(number).padStart(2, "0")}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f8d5e1] bg-gradient-to-br from-[#fff0f5] to-[#ffe0ea] text-[hsl(var(--rose-primary))] shadow-inner transition-transform duration-300 group-hover:scale-105">
            {icon}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-start gap-2">
            <h3 className="font-montserrat text-[15px] font-extrabold leading-tight text-slate-800 sm:text-base">
              {title}
            </h3>
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={3} />
          </div>
          <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{description}</p>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#f8e4eb] pt-3 sm:min-w-[112px] sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
          <div className="text-left sm:text-right">
            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Valor</span>
            <span className="font-montserrat text-sm font-extrabold text-slate-700 line-through">{originalPrice}</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-emerald-600">
            <Gift className="h-3 w-3" />
            Grátis
          </span>
        </div>
      </div>
    </motion.li>
  );
}

interface BonusItemProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BonusItem({ number, icon, title, description }: BonusItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="group relative h-full"
    >
      <div className="relative flex min-h-[82px] gap-3 overflow-hidden rounded-2xl border border-white/90 bg-white/85 p-3.5 shadow-[0_8px_20px_rgba(190,24,93,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0a9c1] hover:shadow-[0_14px_28px_rgba(190,24,93,0.12)] sm:p-4">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[hsl(var(--rose-primary))] to-[#f9a8d4]" />
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff0f5] to-[#ffdce9] text-[hsl(var(--rose-primary))]">
          {icon}
          <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--rose-primary))] text-[9px] font-extrabold text-white shadow-sm">
            {number}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-start gap-2">
            <h4 className="font-montserrat text-sm font-extrabold leading-tight text-slate-800">{title}</h4>
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={3} />
          </div>
          <p className="text-xs leading-relaxed text-slate-500">{description}</p>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#fff0f5] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[hsl(var(--rose-primary))]">
            <Gift className="h-3 w-3" />
            Incluso grátis
          </span>
        </div>
      </div>
    </motion.li>
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
      number: 1,
      icon: <Footprints className="h-5 w-5" />,
      title: "SPA DOS PÉS",
      description: "Tratamento completo para relaxamento e beleza dos pés"
    },
    {
      number: 2,
      icon: <Hand className="h-5 w-5" />,
      title: "MANICURE E PEDICURE",
      description: "Técnicas profissionais de cuidados para mãos e pés"
    },
    {
      number: 3,
      icon: <Ruler className="h-5 w-5" />,
      title: "ALONGAMENTO NO MOLDE F1",
      description: "Método avançado para alongamento de unhas perfeitas"
    },
    {
      number: 4,
      icon: <Layers className="h-5 w-5" />,
      title: "ALONGAMENTO DE UNHAS DE FIBRA DE VIDRO",
      description: "Técnica durável e natural para alongamentos"
    },
    {
      number: 5,
      icon: <Sparkles className="h-5 w-5" />,
      title: "UNHAS DECORADAS",
      description: "Designs criativos e tendências para nail art"
    }
  ];

  return (
    <section id="bonus" className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffafd] to-[#fff4f7] py-14 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#ffe8f0] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-40 h-72 w-72 rounded-full bg-[#fce7f3] opacity-60 blur-3xl" />
      <Container>
        <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f7bfd2] bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[hsl(var(--rose-primary))] shadow-sm">
            <Gift className="h-3.5 w-3.5" />
            Oferta exclusiva
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Adquira hoje e <span className="text-[hsl(var(--rose-primary))]">ganhe +11 bônus</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Aproveite essa oportunidade única e receba estes bônus exclusivos que vão acelerar sua carreira
          </p>
        </div>

        <div className="relative z-10 mx-auto mb-14 max-w-2xl rounded-[2rem] border border-[#f2bfd0] bg-white/80 p-3 shadow-[0_18px_45px_rgba(190,24,93,0.1)] backdrop-blur-sm sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-[#fff0f5] to-white px-4 py-3 sm:px-5">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[hsl(var(--rose-primary))]">
                Seus presentes
              </p>
              <h3 className="mt-1 font-montserrat text-base font-extrabold text-slate-900 sm:text-lg">
                6 bônus para acelerar sua carreira
              </h3>
            </div>
            <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-[hsl(var(--rose-primary))] text-white shadow-md">
              <span className="font-montserrat text-lg font-extrabold leading-none">06</span>
              <span className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-white/80">itens</span>
            </div>
          </div>

           <ul className="space-y-3">
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
           </ul>
        </div>
        
        <div className="relative z-10 mb-10 overflow-hidden rounded-[2rem] border border-[#f2bfd0] bg-gradient-to-br from-[#fff8fa] via-[#fff1f6] to-[#ffe7ef] p-5 shadow-[0_20px_55px_rgba(190,24,93,0.12)] sm:p-8">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/40" />
          <div className="absolute bottom-0 left-1/4 h-1 w-1/2 rounded-full bg-white/70" />
          <div className="relative z-10 mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--rose-primary))] text-white shadow-lg shadow-pink-200">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[hsl(var(--rose-primary))]">E ainda tem mais</p>
                <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Bônus adicionais com certificado
                </h3>
                <p className="mt-1 text-sm text-slate-500">Cursos completos para você ampliar seus serviços.</p>
              </div>
            </div>
            <div className="ml-[3.75rem] flex shrink-0 items-center gap-2 rounded-full border border-[#f5c8d8] bg-white/85 px-4 py-2 text-xs font-bold text-[hsl(var(--rose-primary))] shadow-sm sm:ml-0">
              <Sparkles className="h-4 w-4" />
              +5 inclusos
            </div>
          </div>
          
          <ul className="relative z-10 space-y-3">
            {additionalBonuses.map((bonus, index) => (
              <BonusItem
                key={index}
                number={bonus.number}
                icon={bonus.icon}
                title={bonus.title}
                description={bonus.description}
              />
            ))}
          </ul>
          
          <div className="relative z-10 mt-8 flex flex-col gap-4 rounded-2xl border border-white/90 bg-white/75 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--rose-primary))]">Valor total dos bônus</p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-montserrat text-2xl font-extrabold text-slate-800">
                  <span className="line-through">R$997,00</span>
                </p>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                  100% grátis
                </span>
              </div>
            </div>
            
            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-right">
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