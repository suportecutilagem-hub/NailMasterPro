import { Container } from "../ui/container";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <button 
        className="w-full flex justify-between items-center p-4 text-left font-bold hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-[hsl(var(--rose-primary))] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso ter experiência prévia em manicure?",
      answer: "Não é necessário ter experiência prévia. O curso foi desenvolvido para iniciantes e profissionais que desejam aprender a técnica desde o básico. Você aprenderá passo a passo, com explicações detalhadas."
    },
    {
      question: "Quais materiais vou precisar para fazer o curso?",
      answer: "No início do curso você receberá uma lista completa de materiais necessários, com indicações de onde comprar por preços acessíveis. Além disso, com o bônus de 30% de desconto em materiais, você poderá economizar na aquisição dos itens essenciais."
    },
    {
      question: "Quanto tempo tenho para assistir o curso?",
      answer: "O acesso ao curso é vitalício! Você poderá assistir as aulas quantas vezes quiser, para sempre, sem pagar mensalidades ou renovações. Isso permite que você estude no seu próprio ritmo e reveja o conteúdo sempre que precisar."
    },
    {
      question: "Como recebo o certificado?",
      answer: "Ao concluir o curso, você terá acesso a uma aula específica que explica como solicitar seu certificado. Após seguir as instruções, você receberá o certificado digital que pode ser impresso ou compartilhado online, agregando valor ao seu currículo profissional."
    },
    {
      question: "Como acesso os bônus do curso?",
      answer: "Todos os bônus estarão disponíveis na mesma plataforma do curso principal, logo após a sua compra. Você terá acesso imediato a todo o conteúdo extra, incluindo os cursos complementares com certificado."
    },
    {
      question: "Consigo assistir pelo celular?",
      answer: "Sim! O curso é totalmente responsivo e pode ser acessado em qualquer dispositivo: celular, tablet ou computador. Você pode estudar onde e quando quiser, bastando ter acesso à internet."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            Perguntas <span className="text-[hsl(var(--rose-primary))]">Frequentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o curso e a técnica de cutilagem russa
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
