import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function CourseContent() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Lista de materiais completa",
      description: "Acesso a todos os materiais necessários para iniciar sua jornada na cutilagem russa sem surpresas."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Onde comprar os materiais",
      description: "Indicações exclusivas de fornecedores confiáveis com os melhores preços do mercado."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: "Posicionamento com a tesoura",
      description: "Aprenda a técnica correta para manusear a tesoura com segurança e precisão desde o primeiro dia."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Perder o medo",
      description: "Estratégias psicológicas para superar a insegurança inicial e ganhar confiança na técnica."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Por onde começar",
      description: "Guia passo a passo desde o básico até as técnicas avançadas para sua evolução gradual."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Não machucar a cliente",
      description: "Técnicas seguras que preservam a integridade da unha natural sem causar desconforto."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Remoção de esmalte em gel + Cutilagem Russa",
      description: "Procedimentos combinados que aumentam o valor do seu serviço e a satisfação das clientes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Blindagem",
      description: "Método eficaz para fortalecer as unhas naturais e prevenir quebras e danos."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Esterilização",
      description: "Protocolos profissionais de biossegurança para garantir a saúde e segurança de suas clientes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: "Cutilagem russa com tesoura",
      description: "Técnica refinada para resultados perfeitos e acabamento impecável usando tesoura profissional."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Cutilagem russa com brocas",
      description: "Domínio completo da técnica utilizando micromotores e brocas para maior eficiência."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cutilagem russa em 8 minutos",
      description: "Estratégias para otimizar seu tempo e atender mais clientes sem perder a qualidade."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Para que serve as brocas e como usá-las",
      description: "Guia completo sobre os diferentes tipos de brocas e suas aplicações específicas."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Como estipular um preço para sua cliente",
      description: "Estratégias de precificação para valorizar seu trabalho e maximizar seus lucros."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Como obter o certificado no final do curso",
      description: "Passo a passo para receber sua certificação e agregar valor ao seu currículo profissional."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[hsl(var(--rose-light))]/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-16 h-80 w-80 rounded-full bg-pink-50 blur-3xl" />
      <Container>
        <div className="relative mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--rose-primary))]">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--rose-primary))] shadow-[0_0_0_4px_hsl(var(--rose-light))]" />
            Conteúdo completo e prático
          </div>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            O que você vai <span className="gradient-text">aprender</span> no curso?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Um método completo, direto ao ponto e pensado para levar você do primeiro passo a um atendimento profissional e valorizado.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-pink-100 bg-gradient-to-br from-pink-50/70 via-white to-white px-4 py-7 shadow-[0_24px_70px_rgba(190,24,93,0.10)] sm:px-8 sm:py-10 lg:px-12">
          <div className="absolute bottom-12 left-[2.05rem] top-12 w-px bg-gradient-to-b from-pink-200 via-pink-300 to-transparent sm:left-[3.55rem]" />
          <div className="relative space-y-2">
            {features.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.3) }}
                className="group relative flex items-start gap-4 rounded-2xl p-2 transition-colors duration-300 hover:bg-white/80 sm:gap-6 sm:p-3"
              >
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-[hsl(var(--rose-primary))] text-white shadow-[0_4px_12px_rgba(190,24,93,0.25)] transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                  <span className="scale-[0.72] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:!text-white sm:scale-90">{feature.icon}</span>
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-transparent py-2 transition-all duration-300 group-hover:border-pink-100 group-hover:bg-white group-hover:px-4 group-hover:shadow-sm sm:py-3">
                  <h3 className="mb-2 font-montserrat text-base font-bold leading-snug text-slate-900 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-500 sm:text-[15px]">{feature.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-8 text-center shadow-[0_18px_45px_rgba(15,23,42,0.20)] sm:mt-14 sm:px-10 sm:py-9"
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-48 w-48 rounded-full bg-pink-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-48 w-48 rounded-full bg-pink-500/10 blur-2xl" />
          <p className="relative mb-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-300">Pronta para começar?</p>
          <h3 className="relative mb-6 text-xl font-extrabold text-white sm:text-2xl">
            Transforme conhecimento em resultados
          </h3>
          <motion.div
            className="relative inline-block"
            whileHover={{ y: -3, transition: { duration: 0.25 } }}
            animate={{
              scale: [1, 1.025, 1],
              boxShadow: [
                "0 8px 20px rgba(236,72,153,0.24)",
                "0 12px 28px rgba(236,72,153,0.42)",
                "0 8px 20px rgba(236,72,153,0.24)"
              ]
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <a href="https://checkout.cutilagemrussa.com/c/3orijyx">
              <Button 
                variant="cta" 
                roundedness="full" 
                size="xl"
                className="relative overflow-hidden shadow-[0_10px_25px_rgba(236,72,153,0.32)] transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10">
                  QUERO DOMINAR A CUTILAGEM RUSSA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
