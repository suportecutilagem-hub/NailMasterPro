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
            whileTap={{ scale: 0.95 }}
            animate={{ 
              scale: [1, 1.04, 1],
              boxShadow: [
                "0 5px 15px rgba(255, 255, 255, 0.2)",
                "0 10px 25px rgba(255, 255, 255, 0.4)",
                "0 5px 15px rgba(255, 255, 255, 0.2)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <a href="https://pay.cakto.com.br/uk8zdk5_340907">
              <Button 
                variant="white" 
                roundedness="full" 
                size="xl" 
                className="shadow-lg w-full sm:w-auto"
              >
                QUERO GARANTIR MINHA VAGA AGORA
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