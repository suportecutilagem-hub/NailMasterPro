import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
            Comece Sua Transformação Profissional Hoje
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Não perca mais tempo com técnicas ultrapassadas. Domine a cutilagem russa e transforme sua carreira na área da beleza!
          </p>
          
          <div className="mb-8">
            <div className="inline-block bg-white/20 rounded-lg p-4 mb-4">
              <p className="font-bold text-xl">De <span className="line-through">R$197,00</span> por apenas <span className="text-2xl">R$79,90</span></p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
            Pagamento 100% seguro via PIX e Cartão | Acesso Imediato
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
