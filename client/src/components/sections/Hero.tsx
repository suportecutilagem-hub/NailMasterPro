import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { LazyImage } from "../ui/lazy-image";
import { useMobileOptimization } from "../../hooks/use-mobile-optimization";
import manicureProfissionalImage from "../../assets/manicure-profissional.png";
import avatar1 from "@assets/generated_images/Real_Brazilian_woman_headshot_4edea942.png";
import avatar2 from "@assets/generated_images/Black_Brazilian_woman_headshot_03b6eac4.png";
import avatar3 from "@assets/generated_images/Real_Brazilian_woman_headshot_3_d49f0507.png";

export default function Hero() {
  const { getMotionConfig } = useMobileOptimization();
  const motionConfig = getMotionConfig();
  
  return (
    <header className="pt-6 pb-8 lg:pt-16 lg:pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            {...motionConfig}
            initial={motionConfig.initial !== false ? { opacity: 0, x: -20 } : false}
            animate={motionConfig.animate !== false ? { opacity: 1, x: 0 } : false}
            transition={motionConfig.transition || { duration: 0.5 }}
            className="order-2 lg:order-1"
          >

            
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">CURSO MAIS VENDIDO DO BRASIL</h5>
            <h1 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              Domine a técnica que mais cresce no mercado e <span className="font-bold text-[hsl(var(--rose-primary))]">ganhe até R$75,00 por procedimento</span>.<br className="sm:hidden" /> 
              Mais de <span className="font-bold text-[hsl(var(--teal))]">23.897 mil alunas</span> já transformaram suas carreiras.
            </p>
            

            
            {/* Prova Social com Fotos */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <div className="flex -space-x-1">
                  <LazyImage 
                    src={avatar1} 
                    alt="Aluna satisfeita" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <LazyImage 
                    src={avatar2} 
                    alt="Aluna satisfeita" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <LazyImage 
                    src={avatar3} 
                    alt="Aluna satisfeita" 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
                </div>
                <span className="ml-3 text-sm font-medium text-green-800">327 pessoas compraram nas últimas 24h</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">4,9/5 • Avaliação média das alunas</span>
              </div>
            </div>
            
            {/* Feature badges */}
            <div className="space-y-3 mb-8">
              {/* Primeira linha: 6 Certificados e Acesso Vitalício lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span className="text-sm font-medium">6 Certificados Inclusos</span>
                </div>
                
                <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Acesso Vitalício</span>
                </div>
              </div>
              
              {/* Segunda linha: 11 Bônus Exclusivos abaixo */}
              <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-sm font-medium">+11 Bônus Exclusivos</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-2">De <span className="line-through text-lg">R$197,00</span> • Valor normal do curso</p>
              <div className="flex items-baseline gap-2 mb-4">
                <div className="text-4xl font-bold text-[hsl(var(--rose-primary))]">
                  R$ 35,00
                </div>
                <div className="bg-[hsl(var(--teal))] text-white px-3 py-1 rounded-full text-sm font-bold">
                  82% OFF
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -2, 0],
                boxShadow: [
                  "0 4px 15px rgba(236, 72, 153, 0.3)",
                  "0 8px 25px rgba(236, 72, 153, 0.5)",
                  "0 4px 15px rgba(236, 72, 153, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-4 relative"
            >
              <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full lg:w-auto uppercase font-bold tracking-wide shadow-lg relative overflow-hidden group transition-all duration-300 text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6"
                >
                  <span className="relative z-10 leading-tight">
                    SIM, QUERO GARANTIR<br className="sm:hidden" /> MINHA VAGA AGORA
                  </span>
                  {/* Efeito shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </a>
            </motion.div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Pagamento 100% seguro
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                Acesso imediato
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <LazyImage 
                src={manicureProfissionalImage}
                alt="Técnica de Cutilagem Russa sendo aplicada por profissional especializada" 
                className="rounded-2xl shadow-2xl w-full h-auto border-2 border-[hsl(var(--rose-primary))]"
              />
              

            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}