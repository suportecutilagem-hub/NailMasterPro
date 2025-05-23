import { Container } from "../ui/container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface TestimonialProps {
  content: string;
  image: string;
  name: string;
  location: string;
  delay?: number;
}

function Testimonial({ content, image, name, location, delay = 0 }: TestimonialProps) {
  return (
    <div>
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-[hsl(var(--rose-primary))] text-2xl mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
          </div>
        </div>
        <p className="text-gray-600 italic mb-4">
          "{content}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img src={image} alt={`Depoimento de ${name}`} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      content: "Eu tinha muito medo de trabalhar com cutilagem russa e machucar minhas clientes. Com esse curso, perdi o medo e agora consigo fazer um trabalho perfeito em menos de 10 minutos! Minhas clientes estão encantadas e minha agenda está lotada!",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
      name: "Mariana Silva",
      location: "São Paulo, SP"
    },
    {
      content: "Consegui aumentar o valor do meu atendimento em mais de 50% depois que dominei a cutilagem russa. As dicas de como precificar meu trabalho foram fundamentais. Agora trabalho menos e ganho mais!",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f",
      name: "Juliana Costa",
      location: "Rio de Janeiro, RJ"
    },
    {
      content: "Os bônus do curso foram um diferencial incrível! Aprendi a usar o Instagram para divulgar meu trabalho e hoje tenho clientes que vêm de cidades vizinhas para fazer cutilagem russa comigo. O investimento valeu cada centavo!",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
      name: "Patrícia Oliveira",
      location: "Belo Horizonte, MG"
    },
    {
      content: "Em apenas duas semanas após o curso, já estava aplicando todas as técnicas com segurança. Os vídeos são super detalhados e a explicação é clara. A técnica de cutilagem em 8 minutos mudou minha rotina completamente!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Ana Carolina Mendes",
      location: "Curitiba, PR"
    },
    {
      content: "O curso de Cutilagem Russa foi um divisor de águas na minha carreira. Em apenas um mês, consegui triplicar minha renda. A explicação sobre posicionamento da tesoura foi o que mais me ajudou, pois tinha muita dificuldade nessa parte.",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12",
      name: "Fernanda Gomes",
      location: "Salvador, BA"
    },
    {
      content: "Os cursos bônus foram essenciais para ampliar meu atendimento. Hoje ofereço pacotes completos com todos os serviços que aprendi e minhas clientes amam! Vale muito a pena o investimento, recuperei o valor em apenas uma semana.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      name: "Camila Rocha",
      location: "Recife, PE"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            O Que Nossas <span className="text-[hsl(var(--rose-primary))]">Alunas</span> Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os resultados e a transformação na carreira de quem já participou do curso
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              image={testimonial.image}
              name={testimonial.name}
              location={testimonial.location}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          whileHover={{ 
            scale: 1.08,
            rotate: [0, -1, 1, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 8px 20px rgba(236, 72, 153, 0.3)",
              "0 15px 35px rgba(236, 72, 153, 0.6)",
              "0 8px 20px rgba(236, 72, 153, 0.3)"
            ],
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <a href="#checkout">
            <Button 
              variant="cta" 
              roundedness="full" 
              size="xl" 
              className="shadow-lg relative overflow-hidden group transition-all duration-300 text-xl py-6 px-12"
              style={{ 
                fontSize: "1.25rem",
                padding: "1.5rem 3rem"
              }}
            >
              <span className="relative z-10 font-bold">
                QUERO COMEÇAR AGORA
              </span>

            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
