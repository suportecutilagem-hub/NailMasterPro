import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="pt-6 pb-4 lg:pt-16 lg:pb-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 mt-2 lg:mt-0"
          >
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">CURSO COMPLETO DE</h5>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat mb-6 leading-tight">
              <span className="gradient-text">Cutilagem Russa</span> Profissional
            </h1>
            <p className="text-gray-700 text-lg mb-4">
              Domine a técnica que mais cresce no mercado de manicure e transforme sua carreira em apenas <span className="font-bold text-[hsl(var(--rose-primary))]">16 horas</span> com acesso vitalício.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">16 horas certificadas</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">Acesso vitalício</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-sm font-medium">+ de R$900 em bônus</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8"
            >
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-2">De <span className="line-through">R$79,90</span></p>
                <div className="text-4xl font-bold text-[hsl(var(--rose-primary))] mb-4">
                  R$65<span className="text-lg">,00</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Pagamento único • Sem mensalidades
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://pay.cakto.com.br/uk8zdk5_340907" target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      variant="cta" 
                      size="xl" 
                      className="w-full mb-4 uppercase font-bold tracking-wide shadow-lg"
                    >
                      QUERO COMEÇAR AGORA
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
            <p className="text-gray-500 text-sm mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pagamento 100% seguro
            </p>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Técnica de Cutilagem Russa" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--rose-primary))]">16h</div>
                  <div className="text-xs text-gray-600">Certificado</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 bg-[hsl(var(--rose-primary))] text-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs">Online</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-1/2 -left-8 bg-[hsl(var(--teal))] text-white rounded-lg p-3 shadow-lg hidden lg:block"
              >
                <div className="text-center">
                  <div className="text-sm font-bold">+11</div>
                  <div className="text-xs">Bônus</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}