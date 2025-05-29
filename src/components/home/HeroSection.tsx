import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center text-white">
      <div className="container">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transformamos ideias em <span className="text-primary-400">experiências digitais</span> memoráveis
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-secondary-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Somos uma agência criativa dedicada a desenvolver soluções digitais que conectam marcas e pessoas através de design excepcional e tecnologia inovadora.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contato" className="btn-primary">
              Iniciar Projeto
            </Link>
            <Link to="/portfolio" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Ver Portfólio <ChevronRight size={18} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full text-center">
        <motion.div 
          className="inline-block animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <a 
            href="#servicos" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            aria-label="Rolar para baixo"
          >
            <ChevronRight size={20} className="rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;