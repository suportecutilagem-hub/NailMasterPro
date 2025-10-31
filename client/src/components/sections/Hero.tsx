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
            {/* Urgency Banner */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg mb-4 text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              ✅ 23.897 alunas já transformaram suas carreiras
            </div>
            
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2 text-xs sm:text-sm uppercase tracking-wide">CURSO COMPLETO DE</h5>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat mb-4 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-5 leading-relaxed">
              Domine a técnica que mais cresce no mercado de manicure e transforme sua carreira em apenas <span className="font-bold text-[hsl(var(--rose-primary))]">16 horas</span> com acesso vitalício.
            </p>
            
            {/* Feature badges */}
            <div className="space-y-2 mb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-white border border-[hsl(var(--rose-primary))]/20 rounded-lg px-3 py-2.5 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">6 Certificados Inclusos</span>
                </div>
                
                <div className="bg-white border border-[hsl(var(--rose-primary))]/20 rounded-lg px-3 py-2.5 flex items-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Acesso Vitalício</span>
                </div>
              </div>
              
              <div className="bg-white border border-[hsl(var(--rose-primary))]/20 rounded-lg px-3 py-2.5 flex items-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-sm font-medium text-gray-800">+11 Bônus Exclusivos</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border-2 border-[hsl(var(--rose-primary))]/20 mb-5">
              <p className="text-gray-500 text-xs sm:text-sm mb-2">De <span className="line-through text-base">R$197,00</span> por apenas:</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--rose-primary))]">
                  R$ 19,90
                </div>
                <div className="bg-[hsl(var(--teal))] text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-md">
                  90% OFF
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pagamento único</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sem mensalidade</span>
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
              className="mb-4"
            >
              <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block" data-testid="cta-button-hero">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full uppercase font-bold tracking-wide shadow-xl relative overflow-hidden group transition-all duration-300 text-sm sm:text-base lg:text-lg py-4 sm:py-5 px-6"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    QUERO COMEÇAR AGORA
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">Pagamento 100% seguro</span>
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
              
              {/* Badge de Avaliação */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[hsl(var(--teal))] text-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 shadow-xl backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
                <div className="text-xs sm:text-sm">
                  <div className="font-bold">4,0/5</div>
                  <div className="text-[10px] sm:text-xs opacity-90">Avaliação média</div>
                </div>
              </div>
              
              {/* Selo de Qualidade */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-[hsl(var(--rose-primary))] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 shadow-lg text-xs sm:text-sm font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Certificado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}