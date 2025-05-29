import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "A Westy Creative superou todas as nossas expectativas. Eles transformaram nossa presença online e ajudaram a aumentar significativamente nossas conversões. Altamente recomendado!",
    author: "Maria Silva",
    position: "Diretora de Marketing, TechBr",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content: "Trabalhar com a equipe da Westy Creative foi uma experiência incrível. Profissionais talentosos que realmente se importam com o sucesso de seus clientes e entregam resultados excepcionais.",
    author: "Carlos Mendes",
    position: "CEO, Inovare Solutions",
    image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: "Nosso e-commerce teve um aumento de 150% nas vendas após o redesign realizado pela Westy Creative. A equipe foi extremamente profissional e atenciosa durante todo o processo.",
    author: "Ana Paula Costa",
    position: "Fundadora, Beleza Natural",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container">
        <SectionTitle 
          title="O Que Nossos Clientes Dizem"
          subtitle="Veja como nossos serviços têm ajudado empresas a alcançarem seus objetivos digitais."
        />
        
        <div className="mt-12 max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 text-primary-500 opacity-20">
            <Quote size={80} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-md"
            >
              <p className="text-lg md:text-xl text-secondary-700 mb-8 italic relative z-10">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].author} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-secondary-900">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-secondary-600 text-sm">
                    {testimonials[current].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;