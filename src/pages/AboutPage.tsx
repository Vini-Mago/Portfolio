import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Check, Award, Users, Calendar } from 'lucide-react';
import TeamSection from '../components/home/TeamSection';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-about-pattern bg-cover bg-center py-32 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sobre Nós
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conheça nossa história, valores e a equipe por trás da Westy Creative.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-secondary-700 mb-6">
                A Westy Creative nasceu em 2007 da paixão de três amigos por design e tecnologia. O que começou como um pequeno estúdio em São Paulo, hoje é uma agência premiada com clientes em todo o Brasil e América Latina.
              </p>
              <p className="text-secondary-700 mb-6">
                Nos primeiros anos, focamos principalmente em design gráfico e identidade visual. Com o crescimento da web, expandimos nossa atuação para o desenvolvimento de websites e, posteriormente, marketing digital e experiências interativas.
              </p>
              <p className="text-secondary-700">
                Hoje, contamos com uma equipe multidisciplinar de mais de 30 profissionais apaixonados por criar experiências digitais inovadoras e impactantes que transformam negócios e conectam marcas com seu público.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipe Westy Creative" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              <div className="absolute -bottom-10 -left-10 bg-primary-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-semibold">
                  "Acreditamos que grandes designs nascem da colaboração entre criatividade e estratégia."
                </p>
                <p className="mt-2 font-medium">
                  — Ricardo Almeida, Fundador
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container">
          <SectionTitle 
            title="Missão & Valores"
            subtitle="Nossos princípios fundamentais que guiam cada projeto e decisão."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p className="text-secondary-600">
                Criar experiências digitais excepcionais que transformam negócios e conectam marcas com seu público de forma autêntica e memorável.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p className="text-secondary-600">
                Ser reconhecida como a agência criativa mais inovadora e confiável da América Latina, definindo novos padrões de excelência em design e tecnologia.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Excelência criativa em cada detalhe</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Inovação constante e aprendizado contínuo</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Transparência e honestidade em todas as relações</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Colaboração e trabalho em equipe</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Por Que Nos Escolher"
            subtitle="Descubra o que nos diferencia e como podemos ajudar sua empresa a se destacar no mundo digital."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise Comprovada</h3>
              <p className="text-secondary-600">
                Mais de 15 anos de experiência e centenas de projetos bem-sucedidos para empresas de diversos segmentos.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Abordagem Estratégica</h3>
              <p className="text-secondary-600">
                Não apenas criamos designs bonitos, mas soluções estratégicas alinhadas aos objetivos de negócio de nossos clientes.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Equipe Multidisciplinar</h3>
              <p className="text-secondary-600">
                Profissionais talentosos e especializados em diferentes áreas, trabalhando de forma integrada para entregar resultados excepcionais.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Foco em Resultados</h3>
              <p className="text-secondary-600">
                Comprometimento com métricas e KPIs que realmente importam para o sucesso do seu negócio, não apenas com aspectos estéticos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
    </motion.div>
  );
};

export default AboutPage;