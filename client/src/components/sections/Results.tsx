import { Container } from "../ui/container";
import { Button } from "../ui/button";

interface ResultCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

function ResultCard({ image, title, description, delay = 0 }: ResultCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 text-white">
          <h3 className="font-montserrat font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const results = [
    {
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Técnica Profissional",
      description: "Aprenda a técnica que os salões mais procuram"
    },
    {
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Resultados Incríveis",
      description: "Resultados duradouros e naturais"
    },
    {
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Clientes Satisfeitas",
      description: "Fidelize suas clientes com a melhor técnica"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat mb-6">
            Resultados que <span className="gradient-text">Impressionam</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja a transformação que a técnica de Cutilagem Russa pode proporcionar às suas clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <ResultCard
              key={index}
              {...result}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">Oferta especial</p>
              <div className="text-3xl font-bold text-[hsl(var(--rose-primary))] mb-4">
                R$35<span className="text-lg">,00</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Pagamento único • Acesso vitalício
              </p>
              
              <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full uppercase font-bold tracking-wide"
                >
                  QUERO COMEÇAR AGORA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}