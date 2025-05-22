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
                <span>Certificado Incluso</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                <span>Acesso Vitalício</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[hsl(var(--rose-light))] rounded-lg px-4 py-3 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span>+11 Bônus Exclusivos</span>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <span className="text-gray-500 font-medium line-through text-xl">De R$197,00</span>
              <div className="flex items-center">
                <span className="text-[hsl(var(--rose-primary))] font-bold text-3xl">R$ 65,00</span>
                <span className="ml-2 bg-[hsl(var(--teal))] text-white text-xs font-bold px-2 py-1 rounded-full">67% OFF</span>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 5px 15px rgba(0, 0, 0, 0.1)",
                  "0 10px 25px rgba(236, 72, 153, 0.3)",
                  "0 5px 15px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
            >
              <a href="#checkout">
                <Button 
                  variant="cta" 
                  roundedness="full" 
                  size="xl" 
                  className="shadow-lg w-full sm:w-auto"
                >
                  QUERO GARANTIR MINHA VAGA
                </Button>
              </a>
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
                alt="Resultado profissional de cutilagem russa" 
                className="rounded-xl shadow-xl mx-auto float-animation" 
              />
              
              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 float-animation"
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-[hsl(var(--rose-primary))] rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Alunas satisfeitas</p>
                    <p className="font-bold text-lg">1,500+</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 float-animation-delay"
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-[hsl(var(--teal))] rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Avaliação média</p>
                    <p className="font-bold text-lg">4.9/5</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      <div className="custom-shape-divider-bottom mt-0 lg:mt-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </header>
  );
}
