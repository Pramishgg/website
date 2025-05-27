import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Eye } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
          <motion.div
            className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              damping: 20
            }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm <motion.span 
                className="text-primary-500"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
              >Pramish</motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              An AI-focused journalist exploring the intersection of artificial intelligence. I specialize in investigating emerging AI trends, ethical implications, and their impact on society.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  primary
                  className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg px-8 py-4 relative overflow-hidden group"
                >
                  <span className="relative z-10">Read My Articles</span>
                  <Eye size={20} className="relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-primary-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full sm:w-auto"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button 
                    secondary
                    className="w-full flex items-center justify-center gap-3 text-lg px-8 py-4"
                  >
                    Get in Touch <ArrowRight size={20} />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-2/5 lg:w-1/2 flex justify-center perspective-1000 mb-8 md:mb-0"
            initial={{ opacity: 0, rotateY: -30 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-primary-100"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src="https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg"
                alt="AI Journalism"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;