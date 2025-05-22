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
        <div className="p-4 text-white">
          <h3 className="font-bold font-montserrat">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const results = [
    {
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      title: "Técnica Precisa",
      description: "Remoção cuidadosa com ferramentas profissionais"
    },
    {
      image: "https://pixabay.com/get/g00d34730d96629f27c192c9e98eea002e593c51a43092b6e5ae0ccbcf3d179de98411851399392f3c20961ae389a4ed206ad2a097d15f6958331cf14b01760d8_1280.jpg",
      title: "Acabamento Impecável",
      description: "Cutículas perfeitamente aparadas"
    },
    {
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      title: "Transformação Visível",
      description: "Compare a diferença dos resultados"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            Resultados <span className="text-[hsl(var(--rose-primary))]">Profissionais</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja a qualidade dos resultados que você vai conseguir após dominar as técnicas do curso
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <ResultCard
              key={index}
              image={result.image}
              title={result.title}
              description={result.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a href="#checkout">
            <Button 
              variant="cta" 
              roundedness="full" 
              size="xl" 
              className="shadow-lg"
            >
              QUERO RESULTADOS PROFISSIONAIS
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
