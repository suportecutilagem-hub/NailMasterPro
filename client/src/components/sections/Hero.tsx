import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { LazyImage } from "../ui/lazy-image";
import manicureProfissionalImage from "../../assets/manicure-profissional.png";

export default function Hero() {
  
  return (
    <header className="pt-4 pb-6 lg:pt-12 lg:pb-12 bg-gradient-to-b from-white to-pink-50/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2 text-xs sm:text-sm uppercase tracking-wide">CURSO COMPLETO DE</h5>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat mb-4 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-5 leading-relaxed">
              Aprenda a técnica mais procurada pelas clientes e multiplique seus ganhos com o método profissional completo — curso de <span className="font-bold text-[hsl(var(--rose-primary))]">16 horas</span>.
            </p>
            
            {/* Feature badges */}
            <div className="space-y-2 mb-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-rose-100 border border-rose-200 rounded-lg px-3 py-2.5 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--rose-primary))] mr-1.5 sm:mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <span className="text-sm sm:text-base text-black whitespace-nowrap">6 Certificados Inclusos</span>
                </div>
                
                <div className="bg-rose-100 border border-rose-200 rounded-lg px-3 py-2.5 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--rose-primary))] mr-1.5 sm:mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <span className="text-sm sm:text-base text-black whitespace-nowrap">+11 Bônus Exclusivos</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border-2 border-[hsl(var(--rose-primary))]/20 mb-5">
              <p className="text-gray-500 text-xs sm:text-sm mb-2">De <span className="line-through text-base">R$197,00</span> por apenas:</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--rose-primary))]">
                  R$ 19,90
                </div>
                <div className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-md">
                  90% OFF
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap text-sm sm:text-base font-semibold">Pagamento único</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap text-sm sm:text-base font-semibold">Sem mensalidade</span>
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
              className="mb-4"
            >
              <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block" data-testid="cta-button-hero">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full uppercase font-bold tracking-wide shadow-xl relative overflow-hidden group transition-all duration-300 text-base sm:text-lg lg:text-xl py-4 sm:py-5 px-6"
                >
                  <span className="relative z-10">
                    QUERO COMEÇAR AGORA
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center">
                <span className="relative flex h-2 w-2 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
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