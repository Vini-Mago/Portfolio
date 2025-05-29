import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TeamSection from '../components/home/TeamSection';
import ClientsSection from '../components/home/ClientsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <ClientsSection />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;