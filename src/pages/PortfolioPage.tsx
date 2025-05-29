import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

// Unique categories from projects
const categories = ['Todos', ...Array.from(new Set(projects.map(project => project.category)))];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PortfolioPage = () => {
  const [filter, setFilter] = useState('Todos');
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nosso Portfólio
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conheça alguns dos nossos projetos mais recentes e descubra como transformamos ideias em experiências digitais memoráveis.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid Section */}
      <section className="py-20">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  filter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id} 
                  className="project-card group relative overflow-hidden rounded-lg shadow-md"
                  variants={item}
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="project-overlay absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-secondary-900/20 opacity-0 transition-opacity duration-300">
                    <div className="project-content absolute bottom-0 left-0 w-full p-6 transform translate-y-4 opacity-0 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <Link 
                        to={`/portfolio/${project.id}`} 
                        className="inline-flex items-center text-white hover:text-primary-300 transition-colors duration-200"
                      >
                        Ver Projeto <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-secondary-600">
                Nenhum projeto encontrado na categoria selecionada.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Pronto para iniciar seu projeto?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Vamos transformar suas ideias em realidade. Entre em contato para uma consulta gratuita.
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
    </motion.div>
  );
};

export default PortfolioPage;