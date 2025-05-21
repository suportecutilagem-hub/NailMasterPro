import { Container } from "../ui/container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CheckIcon } from "../ui/check-icon";
import { motion } from "framer-motion";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function FeatureItem({ icon, title, description, delay = 0 }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start"
    >
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--rose-light))] flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function CourseOverview() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "16 Horas de Conteúdo",
      description: "Curso completo com aulas práticas e teóricas que você pode assistir no seu próprio ritmo."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      ),
      title: "Acesso Vitalício",
      description: "Assista e reveja as aulas quantas vezes quiser, para sempre, sem mensalidades."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Certificado Incluso",
      description: "Receba seu certificado ao concluir o curso e agregue valor ao seu currículo profissional."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "+11 Bônus Exclusivos",
      description: "Receba cursos e materiais complementares que vão turbinar sua carreira na área."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--rose-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Acesso em Qualquer Dispositivo",
      description: "Estude pelo celular, tablet ou computador, onde e quando quiser."
    }
  ];

  return (
    <section className="py-16 bg-white" id="checkout">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-[hsl(var(--rose-primary))] font-semibold font-montserrat mb-2">DETALHES DO CURSO</h5>
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
              Tudo o Que Você <span className="text-[hsl(var(--rose-primary))]">Precisa Saber</span>
            </h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Course Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] p-6 text-white">
                <h3 className="text-2xl font-bold font-montserrat">Curso de Cutilagem Russa</h3>
                <p className="opacity-90">Comece agora mesmo sua transformação profissional</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-gray-500 font-medium line-through text-lg">De R$197,00</span>
                    <div className="flex items-center">
                      <span className="text-[hsl(var(--rose-primary))] font-bold text-3xl">R$ 65,00</span>
                      <span className="ml-2 bg-[hsl(var(--teal))] text-white text-xs font-bold px-2 py-1 rounded-full">67% OFF</span>
                    </div>
                  </div>
                  <div className="bg-[hsl(var(--rose-light))] rounded-lg p-2 text-[hsl(var(--rose-primary))] text-center">
                    <div className="text-sm font-bold">Oferta por</div>
                    <div className="text-xl font-bold">24h</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckIcon className="text-[hsl(var(--teal))] mr-2" />
                    <span>16 horas de conteúdo exclusivo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="text-[hsl(var(--teal))] mr-2" />
                    <span>Acesso vitalício às aulas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="text-[hsl(var(--teal))] mr-2" />
                    <span>Certificado de conclusão</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="text-[hsl(var(--teal))] mr-2" />
                    <span>+11 bônus exclusivos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="text-[hsl(var(--teal))] mr-2" />
                    <span>Suporte para dúvidas</span>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    scale: [1, 1.04, 1],
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
                  <a 
                    href="https://pay.cakto.com.br/uk8zdk5_340907" 
                    className="block w-full bg-[hsl(var(--rose-primary))] hover:bg-[hsl(var(--rose-secondary))] text-white text-center font-bold text-base sm:text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mb-4 pink-shadow"
                    style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)" }}
                  >
                    GARANTIR MINHA VAGA AGORA
                  </a>
                </motion.div>
                
                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pagamento 100% seguro via PIX e Cartão
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
