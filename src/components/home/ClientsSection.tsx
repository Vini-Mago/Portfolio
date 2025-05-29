import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const clients = [
  {
    id: 1,
    name: 'Empresa 1',
    logo: 'https://images.pexels.com/photos/12927306/pexels-photo-12927306.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Empresa 2',
    logo: 'https://images.pexels.com/photos/12927324/pexels-photo-12927324.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Empresa 3',
    logo: 'https://images.pexels.com/photos/12927285/pexels-photo-12927285.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Empresa 4',
    logo: 'https://images.pexels.com/photos/12927249/pexels-photo-12927249.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Empresa 5',
    logo: 'https://images.pexels.com/photos/12927255/pexels-photo-12927255.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Empresa 6',
    logo: 'https://images.pexels.com/photos/12927244/pexels-photo-12927244.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
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

const ClientsSection = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container">
        <SectionTitle 
          title="Clientes que Confiam em Nós"
          subtitle="Orgulhosamente trabalhando com empresas inovadoras de diversos segmentos."
        />
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div 
              key={client.id}
              className="flex items-center justify-center p-6"
              variants={item}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;