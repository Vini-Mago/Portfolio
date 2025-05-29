import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { id: 1, value: 150, label: 'Projetos Concluídos' },
  { id: 2, value: 18, label: 'Anos de Experiência' },
  { id: 3, value: 35, label: 'Prêmios Conquistados' },
  { id: 4, value: 120, label: 'Clientes Satisfeitos' },
];

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container">
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <CountUp 
                end={stat.value} 
                isInView={isInView} 
                className="text-5xl font-bold" 
              />
              <p className="text-lg mt-2 text-primary-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  isInView: boolean;
  className?: string;
}

const CountUp = ({ end, isInView, className }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    
    if (count < end) {
      const timeout = setTimeout(() => {
        setCount(prev => {
          const nextValue = prev + Math.ceil(end / 50);
          return nextValue > end ? end : nextValue;
        });
      }, 20);
      
      return () => clearTimeout(timeout);
    }
  }, [count, end, isInView]);
  
  return <span className={className}>{count}+</span>;
};

export default StatsSection;