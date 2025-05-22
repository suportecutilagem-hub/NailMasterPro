import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="pt-6 pb-8 lg:pt-16 lg:pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">CURSO COMPLETO DE</h5>
            <h1 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Domine a técnica que mais cresce no mercado de manicure e transforme sua carreira em apenas <span className="font-bold text-[hsl(var(--rose-primary))]">16 horas</span> com acesso vitalício.
            </p>
            
            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
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
              
              <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-sm font-medium">+11 Bônus Exclusivos</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-2">De <span className="line-through">R$197,00</span></p>
              <div className="flex items-baseline gap-2 mb-4">
                <div className="text-4xl font-bold text-[hsl(var(--rose-primary))]">
                  R$ 65,00
                </div>
                <div className="bg-[hsl(var(--teal))] text-white px-2 py-1 rounded text-sm font-bold">
                  67% OFF
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-4"
            >
              <a href="https://pay.cakto.com.br/uk8zdk5_340907" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full lg:w-auto uppercase font-bold tracking-wide shadow-lg"
                >
                  QUERO COMEÇAR AGORA
                </Button>
              </a>
            </motion.div>
            
            <p className="text-gray-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pagamento 100% seguro
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img 
                src="/cutilagem-russa-curso.jpg"
                alt="Técnica de Cutilagem Russa - Trabalho detalhado nas unhas" 
                className="rounded-2xl shadow-2xl w-full h-auto border-2 border-[hsl(var(--rose-primary))]"
              />
              
              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-[hsl(var(--teal))] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Avaliação média</div>
                  <div className="text-lg font-bold text-gray-800">4.9/5</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-[hsl(var(--rose-primary))] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Alunas satisfeitas</div>
                  <div className="text-lg font-bold text-gray-800">1,500+</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}