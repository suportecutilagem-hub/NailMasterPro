import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Calendar, Instagram, Palette, Percent, Book, Gift } from "lucide-react";
import { motion } from "framer-motion";

interface BonusCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  delay?: number;
}

function BonusCard({ number, icon, title, delay = 0 }: BonusCardProps) {
  return (
    <div className="w-full">
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        className="h-full"
      >
        <div className="group relative flex min-h-[76px] items-center overflow-hidden rounded-2xl border border-[#f1cada] bg-white px-4 py-3 shadow-[0_6px_18px_rgba(190,24,93,0.08)] transition-all duration-300 hover:border-[#eb8faf] hover:shadow-[0_12px_28px_rgba(190,24,93,0.14)] sm:px-5">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[hsl(var(--rose-primary))] via-[#fb7185] to-[#f9a8d4]" />
          <div className="absolute -right-8 -top-12 h-28 w-28 rounded-full bg-[#fff1f5] transition-transform duration-300 group-hover:scale-125" />

          <div className="relative z-10 flex min-w-0 flex-1 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff0f5] to-[#ffe0ea] text-[hsl(var(--rose-primary))] shadow-inner">
              {icon}
            </div>
            <h3 className="min-w-0 pr-2 font-montserrat text-[15px] font-extrabold leading-[1.15] text-slate-800 sm:text-base">
              {title}
            </h3>
          </div>

          <div className="relative z-10 ml-2 shrink-0 rounded-full bg-[hsl(var(--rose-primary))] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-md sm:px-4">
            Bônus{" "}
            {number}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface BonusItemProps {
  title: string;
}

function BonusItem({ title }: BonusItemProps) {
  return (
    <div className="rounded-xl border border-white/80 border-l-4 border-l-[hsl(var(--rose-primary))] bg-white/80 p-4 shadow-sm">
      <h4 className="font-montserrat text-sm font-extrabold text-slate-800">{title}</h4>
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffafd] to-[#fff4f7] py-14">
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#ffe8f0] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-40 h-72 w-72 rounded-full bg-[#fce7f3] opacity-60 blur-3xl" />
      <Container>
        <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 inline-flex rounded-full border border-[#f7bfd2] bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[hsl(var(--rose-primary))] shadow-sm">
            Oferta exclusiva
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Adquira hoje e <span className="text-[hsl(var(--rose-primary))]">ganhe +11 bônus</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Aproveite essa oportunidade única e receba estes bônus exclusivos que vão acelerar sua carreira
          </p>
        </div>

        <div className="relative z-10 mx-auto mb-14 grid max-w-[360px] grid-cols-1 gap-3">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              number={bonus.number}
              icon={bonus.icon}
              title={bonus.title}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <div className="relative z-10 mb-10 overflow-hidden rounded-3xl border border-[#f2bfd0] bg-gradient-to-br from-[#fff8fa] via-[#fff1f6] to-[#ffe7ef] p-5 shadow-[0_20px_55px_rgba(190,24,93,0.12)] sm:p-8">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/40" />
          <div className="relative z-10 mb-7 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[hsl(var(--rose-primary))]">E ainda tem mais</p>
              <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                Bônus adicionais com certificado
              </h3>
              <p className="mt-1 text-sm text-slate-500">Cursos completos para você ampliar seus serviços.</p>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[hsl(var(--rose-primary))] shadow-sm">
              <Gift className="h-4 w-4" />
              +5 Cursos inclusos
            </div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {additionalBonuses.map((bonus, index) => (
              <BonusItem
                key={index}
                title={bonus.title}
              />
            ))}
          </div>
          
          <div className="relative z-10 mt-8 flex flex-col items-center text-center">
            <div className="mb-3 inline-block rounded-2xl bg-[hsl(var(--rose-primary))] px-6 py-4 text-white shadow-lg">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white/75">Valor total dos Bônus</p>
              <p className="font-montserrat text-2xl font-extrabold">
                <span className="line-through">R$997,00</span>
              </p>
            </div>
            
            <p className="mb-4 max-w-xl text-sm text-slate-600">
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