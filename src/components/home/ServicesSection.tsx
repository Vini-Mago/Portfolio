import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { 
  Monitor, 
  PenTool, 
  Smartphone, 
  ShoppingBag, 
  BarChart, 
  Code 
} from 'lucide-react';

const services = [
  {
    icon: <Monitor />,
    title: 'Design de Websites',
    description: 'Criamos websites personalizados e responsivos que representam sua marca e engajam seus visitantes.',
  },
  {
    icon: <Code />,
    title: 'Desenvolvimento Web',
    description: 'Desenvolvemos soluções web de alta performance utilizando as tecnologias mais modernas do mercado.',
  },
  {
    icon: <PenTool />,
    title: 'Branding & Identidade',
    description: 'Construímos identidades visuais memoráveis que comunicam a essência e os valores de sua marca.',
  },
  {
    icon: <Smartphone />,
    title: 'Design UI/UX',
    description: 'Projetamos interfaces intuitivas e experiências de usuário que transformam visitantes em clientes.',
  },
  {
    icon: <ShoppingBag />,
    title: 'E-commerce',
    description: 'Desenvolvemos lojas online otimizadas para conversão e com uma experiência de compra superior.',
  },
  {
    icon: <BarChart />,
    title: 'Marketing Digital',
    description: 'Estratégias de marketing digital para aumentar sua visibilidade online e gerar mais resultados.',
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

const ServicesSection = () => {
  return (
    <section id="servicos\" className="py-20 bg-secondary-50">
      <div className="container">
        <SectionTitle 
          title="Nossos Serviços"
          subtitle="Oferecemos soluções digitais completas para impulsionar o seu negócio no ambiente online."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={item}
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-secondary-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;