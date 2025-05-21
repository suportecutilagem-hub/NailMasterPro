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
                      <span className="text-[hsl(var(--rose-primary))] font-bold text-3xl">R$ 79,90</span>
                      <span className="ml-2 bg-[hsl(var(--teal))] text-white text-xs font-bold px-2 py-1 rounded-full">60% OFF</span>
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
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href="https://pay.cakto.com.br/uk8zdk5_340907" 
                    className="block w-full bg-[hsl(var(--rose-primary))] hover:bg-[hsl(var(--rose-secondary))] text-white text-center font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mb-4 pink-shadow"
                  >
                    GARANTIR MINHA VAGA AGORA
                  </a>
                </motion.div>
                
                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pagamento 100% seguro via PIX, Cartão ou Boleto
                  </p>
                  <div className="flex justify-center mt-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.508-2.589.399-3.803-.207-1.712-.863-2.578-2.685-2.214-4.609.761.19 1.516-.066 2.085-.603.649-.582.997-1.446.873-2.382-.115-.836-.599-1.505-1.262-1.902.33-.258.674-.495 1.03-.706 1.965-1.131 4.443-.916 6.159.565 1.736 1.485 2.241 3.918 1.297 5.94-.86-.705-2.131-.689-3.075.035-.952.734-1.396 1.896-1.271 2.723z" />
                      <path d="M7.739 6.25c.801-2.199 2.976-3.548 5.151-3.243 2.547.359 4.413 2.726 4.222 5.422-.267-.107-.496-.25-.668-.384-1.387-1.116-3.34-1.038-4.512.157-1.126 1.177-1.373 2.991-.753 4.433.057.137.114.272.17.408-1.892-.381-3.401-1.824-3.823-3.701-.27-1.214-.012-2.422.463-3.463-1.598.117.43.074.089 0 .171-.295.343-.577.514-.845.527-.819 1.183-1.359 1.919-1.659-.839.524-1.79 1.39-2.483 2.485-.72 1.135-1.051 2.531-.909 3.973-.099-.14-.176-.291-.23-.458-.216-.677-.094-1.329.297-1.821z" />
                      <path d="M13.908 12.263c.735-.805 1.983-.805 2.717 0 .734.806.734 2.112 0 2.918-.735.805-1.983.805-2.717 0-.734-.806-.734-2.112 0-2.918z" />
                      <path d="M20.37 16.046h.773v-3.311h-1.172v.452c-.394-.399-.928-.62-1.488-.62-1.184 0-2.142.969-2.142 2.163 0 1.194.958 2.163 2.142 2.163.56 0 1.094-.22 1.488-.62v.452h.398v-.679zm-1.886.18c-.679 0-1.235-.561-1.235-1.255 0-.693.556-1.254 1.235-1.254.68 0 1.236.561 1.236 1.254 0 .694-.556 1.255-1.236 1.255z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.508-2.589.399-3.803-.207-1.712-.863-2.578-2.685-2.214-4.609.761.19 1.516-.066 2.085-.603.649-.582.997-1.446.873-2.382-.115-.836-.599-1.505-1.262-1.902.33-.258.674-.495 1.03-.706 1.965-1.131 4.443-.916 6.159.565 1.736 1.485 2.241 3.918 1.297 5.94-.86-.705-2.131-.689-3.075.035-.952.734-1.396 1.896-1.271 2.723z" />
                      <path d="M7.739 6.25c.801-2.199 2.976-3.548 5.151-3.243 2.547.359 4.413 2.726 4.222 5.422-.267-.107-.496-.25-.668-.384-1.387-1.116-3.34-1.038-4.512.157-1.126 1.177-1.373 2.991-.753 4.433.057.137.114.272.17.408-1.892-.381-3.401-1.824-3.823-3.701-.27-1.214-.012-2.422.463-3.463-1.598.117.43.074.089 0 .171-.295.343-.577.514-.845.527-.819 1.183-1.359 1.919-1.659-.839.524-1.79 1.39-2.483 2.485-.72 1.135-1.051 2.531-.909 3.973-.099-.14-.176-.291-.23-.458-.216-.677-.094-1.329.297-1.821z" />
                      <path d="M13.908 12.263c.735-.805 1.983-.805 2.717 0 .734.806.734 2.112 0 2.918-.735.805-1.983.805-2.717 0-.734-.806-.734-2.112 0-2.918z" />
                      <path d="M20.37 16.046h.773v-3.311h-1.172v.452c-.394-.399-.928-.62-1.488-.62-1.184 0-2.142.969-2.142 2.163 0 1.194.958 2.163 2.142 2.163.56 0 1.094-.22 1.488-.62v.452h.398v-.679zm-1.886.18c-.679 0-1.235-.561-1.235-1.255 0-.693.556-1.254 1.235-1.254.68 0 1.236.561 1.236 1.254 0 .694-.556 1.255-1.236 1.255z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 21h-4c-1.104 0-2-.896-2-2v-15c0-1.104.896-2 2-2h19c1.104 0 2 .896 2 2v15c0 1.104-.896 2-2 2h-15zm-6-10h21v-6h-21v6zm4-1h-2v-1h2v1zm3 0h-2v-1h2v1zm3 0h-2v-1h2v1z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
