import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))]">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Transforme sua carreira hoje mesmo
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Aproveite esta oportunidade única e comece a dominar a técnica mais desejada do mercado
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-white/80 text-sm mb-2">Oferta especial por tempo limitado</p>
              <p className="font-bold text-xl">De <span className="line-through">R$197,00</span> por apenas <span className="text-2xl">R$65,00</span></p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ 
              scale: 1.08,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 8px 20px rgba(255, 255, 255, 0.3)",
                "0 15px 35px rgba(255, 255, 255, 0.6)",
                "0 8px 20px rgba(255, 255, 255, 0.3)"
              ],
              y: [0, -3, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
            
            <a href="https://pay.cakto.com.br/uk8zdk5_340907">
              <Button 
                variant="white" 
                roundedness="full" 
                size="xl" 
                className="shadow-lg w-full sm:w-auto relative overflow-hidden group bg-white hover:bg-gray-50 transition-all duration-300 font-bold text-lg px-8 py-4 border-2 border-white hover:border-yellow-300"
              >
                <span className="relative z-10 group-hover:text-[hsl(var(--rose-primary))] transition-colors duration-300">
                  ✨ QUERO COMEÇAR AGORA ✨
                </span>
                {/* Efeito shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </a>
          </motion.div>
          
          <p className="text-white/80 text-sm mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pagamento 100% seguro
          </p>
        </div>
      </Container>
    </section>
  );
}