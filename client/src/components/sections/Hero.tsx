import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="pt-6 pb-8 lg:pt-16 lg:pb-16">
      <Container>
        <div className="max-w-md mx-auto">
          {/* Hero Image with floating elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Técnica de Cutilagem Russa" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating elements - Avaliação */}
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
            
            {/* Floating elements - Alunas */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-[hsl(var(--rose-primary))] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h2l3 2 4-2v3h3v4H4z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Alunas satisfeitas</div>
                <div className="text-lg font-bold text-gray-800">1,500+</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">CURSO COMPLETO DE</h5>
            <h1 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span><br />
              <span className="text-gray-900">Profissional</span>
            </h1>
            <p className="text-gray-700 text-base mb-6">
              Domine a técnica que mais cresce no mercado de manicure e transforme sua carreira em apenas <span className="font-bold text-[hsl(var(--rose-primary))]">16 horas</span> com acesso vitalício.
            </p>
            
            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Certificado Incluso</span>
              </div>
              
              <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">Acesso Vitalício</span>
              </div>
              
              <div className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-sm font-medium">+11 Bônus Exclusivos</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-2">De <span className="line-through">R$197,00</span></p>
              <div className="flex items-baseline justify-center gap-2 mb-4">
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
                  className="w-full uppercase font-bold tracking-wide shadow-lg"
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
        </div>
      </Container>
    </header>
  );
}