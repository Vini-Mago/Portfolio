import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  services: string[];
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    // In a real application, this would send the form data to a server
    console.log(data);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-contact-pattern bg-cover bg-center py-32 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Entre em Contato
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar a transformar suas ideias em realidade.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-secondary-600 mb-8">
                Preencha o formulário ou entre em contato diretamente através dos canais abaixo.
              </p>
              
              {/*<div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <MapPin size={24} />
                  </div>
                  {/*<div>
                    <h3 className="font-semibold text-secondary-900">Localização</h3>
                    <p className="text-secondary-600 mt-1">
                      Av. Paulista, 1000, São Paulo, SP
                    </p>
                  </div>*/}
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Email</h3>
                    <a 
                      href="mailto:contato@westycreative.com" 
                      className="text-secondary-600 hover:text-primary-600 transition-colors mt-1 block"
                    >
                      contato@westycreative.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Telefone</h3>
                    <a 
                      href="tel:+551198765432" 
                      className="text-secondary-600 hover:text-primary-600 transition-colors mt-1 block"
                    >
                      +55 11 9876-5432
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-secondary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-3">Horário de Atendimento</h3>
                <p className="text-secondary-600 mb-2">
                  Segunda a Sexta: 9h às 18h
                </p>
                <p className="text-secondary-600">
                  Sábado: 9h às 13h
                </p>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Nome Completo *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      {...register('name', { required: 'Nome é obrigatório' })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', { 
                        required: 'Email é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefone
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="form-input"
                      {...register('phone')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Assunto *
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                      {...register('subject', { required: 'Assunto é obrigatório' })}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Serviços de Interesse
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="web-design"
                        value="Web Design"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                        {...register('services')}
                      />
                      <label htmlFor="web-design" className="ml-2 text-sm text-secondary-700">
                        Web Design
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="branding"
                        value="Branding"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                        {...register('services')}
                      />
                      <label htmlFor="branding" className="ml-2 text-sm text-secondary-700">
                        Branding
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="marketing"
                        value="Marketing Digital"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                        {...register('services')}
                      />
                      <label htmlFor="marketing" className="ml-2 text-sm text-secondary-700">
                        Marketing Digital
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full flex justify-center items-center"
                >
                  Enviar Mensagem <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços e processo de trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-3">Qual é o prazo médio para entrega de um projeto?</h3>
              <p className="text-secondary-600">
                O prazo varia de acordo com a complexidade do projeto. Websites simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 4 meses. Sempre definimos prazos realistas no início do projeto.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-3">Vocês oferecem suporte após o lançamento?</h3>
              <p className="text-secondary-600">
                Sim, oferecemos planos de manutenção e suporte contínuo para todos os nossos projetos. Isso inclui atualizações de segurança, correções de bugs e pequenas melhorias conforme necessário.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-3">Qual é o investimento necessário para um projeto?</h3>
              <p className="text-secondary-600">
                Cada projeto é único e o investimento depende do escopo, complexidade e prazos. Trabalhamos com orçamentos personalizados para atender às necessidades específicas de cada cliente. Entre em contato para uma cotação detalhada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;