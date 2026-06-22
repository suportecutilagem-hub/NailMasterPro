import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "../ui/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

import t1 from "@assets/image_1782161912299.png";
import t2 from "@assets/image_1782161926989.png";
import t3 from "@assets/image_1782161934895.png";
import t4 from "@assets/image_1782161941264.png";
import t5 from "@assets/image_1782161957357.png";
import t6 from "@assets/image_1782161965579.png";
import t7 from "@assets/image_1782161984636.png";
import t8 from "@assets/image_1782161990013.png";
import t9 from "@assets/image_1782162002086.png";
import t10 from "@assets/image_1782162006780.png";
import t11 from "@assets/image_1782162017129.png";

const images = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[hsl(var(--rose-primary))]/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--rose-primary))]/5 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <Container>
        {/* header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            O Que Nossas <span className="text-[hsl(var(--rose-primary))]">Alunas</span> Dizem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Depoimentos reais de alunas que transformaram sua carreira com o curso
          </p>
        </motion.div>

        {/* carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex-none w-[260px] sm:w-[300px]"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white h-[460px] sm:h-[520px]">
                    <img
                      src={src}
                      alt={`Depoimento real ${i + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* prev / next buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[hsl(var(--rose-primary))] hover:border-[hsl(var(--rose-primary))] transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[hsl(var(--rose-primary))] hover:border-[hsl(var(--rose-primary))] transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-[hsl(var(--rose-primary))]"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          className="mt-16 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.06, 1],
            y: [0, -3, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880">
            <Button
              variant="cta"
              roundedness="full"
              size="xl"
              className="shadow-lg w-full sm:w-auto text-base sm:text-xl py-4 px-6 sm:py-6 sm:px-12 font-bold"
            >
              QUERO APRENDER CUTILAGEM RUSSA
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
