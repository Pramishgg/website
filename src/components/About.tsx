import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.6,
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <SectionTitle
            title="About"
            highlight="Me"
            centered
          />
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto mt-12 md:mt-16 text-gray-700 gpu-accelerated"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p 
            className="mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
            variants={itemVariants}
          >
            Hello! I'm <span className="gradient-text font-bold">Pramish</span>, an AI generalist with a passion for exploring and implementing artificial intelligence solutions across diverse domains and industries.
          </motion.p>
          
          <motion.p 
            className="mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
            variants={itemVariants}
          >
            My expertise spans machine learning, natural language processing, computer vision, and AI strategy. I specialize in bridging the gap between cutting-edge AI research and practical business applications, helping organizations leverage AI to solve complex problems and drive innovation.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            variants={itemVariants}
          >
            From developing custom AI models to consulting on AI implementation strategies, I'm passionate about making artificial intelligence accessible and impactful. Let's collaborate to bring AI solutions to life!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;