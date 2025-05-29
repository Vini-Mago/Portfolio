import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4"
    >
      <h1 className="text-9xl font-bold text-primary-600 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Página Não Encontrada</h2>
      <p className="text-lg text-secondary-600 max-w-md mb-8">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        to="/" 
        className="btn-primary inline-flex items-center"
      >
        <Home size={18} className="mr-2" /> Voltar para a Página Inicial
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;