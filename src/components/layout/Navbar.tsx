import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close mobile menu when route changes or on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="z-50">
          <Logo color={isScrolled || isOpen ? "dark" : "light"} />
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-secondary-800"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              clsx(
                'navbar-link',
                isScrolled ? 'text-secondary-900' : 'text-white',
                isActive && 'active'
              )
            }
          >
            Início
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => 
              clsx(
                'navbar-link',
                isScrolled ? 'text-secondary-900' : 'text-white',
                isActive && 'active'
              )
            }
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              clsx(
                'navbar-link',
                isScrolled ? 'text-secondary-900' : 'text-white',
                isActive && 'active'
              )
            }
          >
            Portfólio
          </NavLink>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => 
              clsx(
                'navbar-link',
                isScrolled ? 'text-secondary-900' : 'text-white',
                isActive && 'active'
              )
            }
          >
            Contato
          </NavLink>
          <Link to="/contato" className="btn-primary">
            Orçamento
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-white flex flex-col z-40 md:hidden"
          >
            <div className="container flex flex-col items-center justify-center flex-1 space-y-8 py-20">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  clsx(
                    'text-2xl font-medium text-secondary-900',
                    isActive && 'text-primary-600'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                Início
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => 
                  clsx(
                    'text-2xl font-medium text-secondary-900',
                    isActive && 'text-primary-600'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  clsx(
                    'text-2xl font-medium text-secondary-900',
                    isActive && 'text-primary-600'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                Portfólio
              </NavLink>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => 
                  clsx(
                    'text-2xl font-medium text-secondary-900',
                    isActive && 'text-primary-600'
                  )
                }
                onClick={() => setIsOpen(false)}
              >
                Contato
              </NavLink>
              <Link 
                to="/contato" 
                className="btn-primary mt-6 w-full max-w-xs text-center"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;