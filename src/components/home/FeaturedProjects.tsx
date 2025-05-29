import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

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

const FeaturedProjects = () => {
  // Show only the first 6 projects on the home page
  const featuredProjects = projects.slice(0, 6);
  
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle 
          title="Projetos em Destaque"
          subtitle="Conheça alguns dos nossos trabalhos mais recentes e descubra como transformamos ideias em experiências digitais impactantes."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
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
        
        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="btn-primary"
          >
            Ver Todos os Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;