import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { projects, Project } from '../data/projects';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading data
    setLoading(true);
    
    // Find project by id
    const foundProject = projects.find(p => p.id === Number(id));
    
    setTimeout(() => {
      if (foundProject) {
        setProject(foundProject);
      }
      setLoading(false);
    }, 300);
  }, [id]);
  
  // If project not found, redirect to portfolio page
  useEffect(() => {
    if (!loading && !project) {
      navigate('/portfolio');
    }
  }, [loading, project, navigate]);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!project) {
    return null; // Will redirect in useEffect
  }
  
  // Find related projects (same category, excluding current project)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-24">
        <div className="container">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-primary-300 hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> Voltar para o Portfólio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary-200 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - Imagem ${currentImageIndex + 1}`} 
              className="w-full h-auto object-cover"
            />
            
            {project.images.length > 1 && (
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {project.images.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index 
                        ? 'bg-primary-600' 
                        : 'bg-white/50 hover:bg-white/80'
                    } transition-colors duration-300`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Desafio</h2>
                <p className="text-secondary-700 mb-10">
                  {project.challenge}
                </p>
                
                <h2 className="text-2xl font-bold mb-6">Solução</h2>
                <p className="text-secondary-700 mb-10">
                  {project.solution}
                </p>
                
                <h2 className="text-2xl font-bold mb-6">Resultados</h2>
                <p className="text-secondary-700">
                  {project.results}
                </p>
              </motion.div>
            </div>
            
            <div>
              <motion.div 
                className="bg-secondary-50 p-8 rounded-lg sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-6 pb-6 border-b border-secondary-200">
                  Informações do Projeto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-secondary-600">Cliente</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-secondary-600">Data</p>
                      <p className="font-medium">{project.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Tag size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-secondary-600">Serviços</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.services.map((service, index) => (
                          <span 
                            key={index}
                            className="inline-block px-3 py-1 bg-secondary-200 text-secondary-800 text-xs font-medium rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-secondary-200">
                  <Link 
                    to="/contato" 
                    className="btn-primary w-full flex justify-center"
                  >
                    Iniciar um Projeto Similar
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Projetos Relacionados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map(relatedProject => (
                <motion.div 
                  key={relatedProject.id}
                  className="project-card group relative overflow-hidden rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={relatedProject.thumbnail} 
                    alt={relatedProject.title} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="project-overlay absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-secondary-900/20 opacity-0 transition-opacity duration-300">
                    <div className="project-content absolute bottom-0 left-0 w-full p-6 transform translate-y-4 opacity-0 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full mb-3">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">{relatedProject.title}</h3>
                      <Link 
                        to={`/portfolio/${relatedProject.id}`} 
                        className="inline-flex items-center text-white hover:text-primary-300 transition-colors duration-200"
                      >
                        Ver Projeto <ChevronRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary-600 text-white rounded-lg p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Gostou do que viu?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Vamos discutir como podemos criar algo incrível para o seu negócio. Nossa equipe está pronta para transformar suas ideias em realidade.
            </p>
            <Link 
              to="/contato" 
              className="btn-accent inline-flex items-center text-base md:text-lg px-8 py-4"
            >
              Iniciar meu Projeto <ExternalLink size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailsPage;