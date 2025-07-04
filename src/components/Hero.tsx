import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Brain } from 'lucide-react';
import Button from './ui/Button';
import BlurText from './ui/BlurText';

const Hero: React.FC = () => {
  // Simplified animations for mobile
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
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left gpu-accelerated"
            variants={itemVariants}
          >
            <BlurText
              text="Hi, I'm Pramish"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6"
              delay={100}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="An AI generalist passionate about developing intelligent solutions across multiple domains. I specialize in machine learning, deep learning, and AI strategy to help businesses harness the power of artificial intelligence."
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8"
              delay={80}
              animateBy="words"
              direction="bottom"
            />
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start touch-optimized"
              variants={itemVariants}
            >
              <Button 
                primary
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-base px-6 py-3"
              >
                <span>View My Work</span>
                <Brain size={18} />
              </Button>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full sm:w-auto"
              >
                <Button 
                  secondary
                  className="w-full flex items-center justify-center gap-2 text-base px-6 py-3"
                >
                  Get in Touch <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-2/5 lg:w-1/2 flex justify-center mb-6 md:mb-0 gpu-accelerated"
            variants={itemVariants}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 md:border-8 border-primary-100">
              <img
                src="/logo.png"
                alt="Pramish Logo"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;