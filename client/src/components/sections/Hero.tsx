import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { LazyImage } from "../ui/lazy-image";
import manicureProfissionalImage from "../../assets/manicure-profissional.png";

export default function Hero() {
  
  return (
    <header className="pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12 bg-gradient-to-b from-white to-pink-50/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-3 text-sm sm:text-base uppercase tracking-wide">CURSO COMPLETO DE</h5>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat mb-4 sm:mb-5 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-7 leading-relaxed">
              A técnica que mais gera lucro nos salões agora ao seu alcance! Domine a cutilagem russa e <span className="font-bold text-[hsl(var(--rose-primary))]">multiplique seus ganhos</span> oferecendo um serviço premium que suas clientes vão amar.
            </p>
            
            {/* Feature badges */}
            <div className="space-y-2 mb-6 sm:mb-7">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-rose-100 border border-rose-200 rounded-lg px-3 py-3 sm:px-4 sm:py-3 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(var(--rose-primary))] mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <span className="text-base sm:text-lg text-gray-900 font-medium whitespace-nowrap">6 Certificados Inclusos</span>
                </div>
                
                <div className="bg-rose-100 border border-rose-200 rounded-lg px-3 py-3 sm:px-4 sm:py-3 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(var(--rose-primary))] mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <span className="text-base sm:text-lg text-gray-900 font-medium whitespace-nowrap">+11 Bônus Exclusivos</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-[hsl(var(--rose-primary))]/20 mb-6 sm:mb-7">
              <p className="text-gray-500 text-sm sm:text-base mb-3">De <span className="line-through text-lg sm:text-xl">R$197,00</span> por apenas:</p>
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[hsl(var(--rose-primary))]">
                  R$ 19,90
                </div>
                <div className="bg-green-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-bold shadow-md">
                  90% OFF
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap text-base sm:text-lg font-semibold">Pagamento único</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap text-base sm:text-lg font-semibold">Sem mensalidade</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-5 sm:mb-6"
            >
              <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block" data-testid="cta-button-hero">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full uppercase font-bold tracking-wide shadow-xl relative overflow-hidden group transition-all duration-300 text-lg sm:text-xl lg:text-2xl py-5 sm:py-6 px-6 sm:px-8"
                >
                  <span className="relative z-10">
                    QUERO COMEÇAR AGORA
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-sm sm:text-base text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center">
                <span className="relative flex h-2.5 w-2.5 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="font-medium">Acesso imediato</span>
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
            <div className="relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-rose-600">
                <LazyImage 
                  src={manicureProfissionalImage}
                  alt="Técnica de Cutilagem Russa sendo aplicada por profissional especializada" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}