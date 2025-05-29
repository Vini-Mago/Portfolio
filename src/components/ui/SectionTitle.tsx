import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false,
  className
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const colorClasses = light 
    ? 'text-white' 
    : 'text-secondary-900';

  const subtitleColorClasses = light 
    ? 'text-secondary-200' 
    : 'text-secondary-600';

  return (
    <div className={clsx(alignmentClasses[align], className)}>
      <motion.h2 
        className={clsx("section-title", colorClasses)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={clsx("section-subtitle", subtitleColorClasses)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;