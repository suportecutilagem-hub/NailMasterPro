import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { LazyImage } from "../ui/lazy-image";
import { useMobileOptimization } from "../../hooks/use-mobile-optimization";
import manicureProfissionalImage from "../../assets/manicure-profissional.png";

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

            
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2 text-sm uppercase">CURSO COMPLETO DE</h5>
            <h1 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Domine a técnica que mais cresce no mercado de manicure e transforme sua carreira em apenas <span className="font-bold">16 horas</span> com acesso vitalício.
            </p>
            
            {/* Feature badges */}
            <div className="space-y-3 mb-6">
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
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-2">De <span className="line-through">R$197,00</span></p>
              <div className="flex items-baseline gap-3 mb-4">
                <div className="text-5xl font-bold text-[hsl(var(--rose-primary))]">
                  R$ 19,90
                </div>
                <div className="bg-[hsl(var(--teal))] text-white px-3 py-1 rounded-md text-sm font-bold">
                  90% de desconto
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="mb-4 relative"
            >
              <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full lg:w-auto uppercase font-bold tracking-wide shadow-lg relative overflow-hidden group transition-all duration-300 text-base py-4 px-8"
                >
                  <span className="relative z-10">
                    QUERO COMEÇAR AGORA
                  </span>
                  {/* Efeito shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </a>
            </motion.div>
            
            <div className="flex items-center text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pagamento 100% seguro
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
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Badge de Avaliação */}
              <div className="absolute bottom-4 left-4 bg-[hsl(var(--teal))] text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
                <div className="text-sm">
                  <div className="font-bold">4,0/5</div>
                  <div className="text-xs opacity-90">Avaliação média</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}