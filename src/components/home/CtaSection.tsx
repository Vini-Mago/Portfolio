import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Vamos Criar Algo Incrível Juntos?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-primary-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Estamos prontos para transformar suas ideias em experiências digitais memoráveis.
            Entre em contato para iniciarmos seu projeto.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/contato" 
              className="btn-accent text-base md:text-lg px-8 py-4"
            >
              Solicitar um Orçamento
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;