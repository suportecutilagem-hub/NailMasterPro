import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-[hsl(var(--rose-primary))] font-montserrat font-bold text-2xl">Cutilagem Russa</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#checkout">
              <Button 
                variant="cta" 
                roundedness="full" 
                size="lg"
              >
                Quero Começar Agora
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>
    </nav>
  );
}
