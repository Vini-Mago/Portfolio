import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo color="light" />
            <p className="mt-4 mb-6 text-secondary-300">
              Criamos experiências digitais que transformam negócios e encantam pessoas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Design de Websites
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Branding & Identidade
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary-500" />
                <span className="text-secondary-300">
                  Av. Paulista, 1000, São Paulo, SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-500" />
                <a href="tel:+551198765432" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  +55 11 9876-5432
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-500" />
                <a href="mailto:contato@westycreative.com" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  contato@westycreative.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 mb-4 md:mb-0">
              &copy; {currentYear} Westy Creative. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;