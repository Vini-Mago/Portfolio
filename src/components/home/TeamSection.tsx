import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Ricardo Almeida',
    position: 'CEO & Diretor Criativo',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Amanda Souza',
    position: 'Diretora de UX/UI',
    image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Fernando Costa',
    position: 'Desenvolvedor Full Stack',
    image: 'https://images.pexels.com/photos/4064698/pexels-photo-4064698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Carla Ribeiro',
    position: 'Gerente de Projetos',
    image: 'https://images.pexels.com/photos/3786534/pexels-photo-3786534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

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

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle 
          title="Conheça Nossa Equipe"
          subtitle="Profissionais talentosos e apaixonados por criar experiências digitais excepcionais."
        />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div 
              key={member.id}
              className="group"
              variants={item}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} className="text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} className="text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} className="text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900">{member.name}</h3>
              <p className="text-secondary-600">{member.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;