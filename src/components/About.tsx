import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import BlurText from './ui/BlurText';

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
          <BlurText
            text="Hello! I'm Pramish, an AI-focused journalist with a passion for uncovering and analyzing the latest developments in artificial intelligence and their impact on journalism, media, and society at large."
            className="mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
            delay={60}
            animateBy="words"
            direction="top"
          />
          
          <BlurText
            text="My work focuses on investigating emerging AI technologies, exploring ethical considerations in AI development, and examining how artificial intelligence is reshaping the media landscape. I combine deep technical understanding with clear, accessible writing to make complex AI topics understandable to diverse audiences."
            className="mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
            delay={60}
            animateBy="words"
            direction="top"
          />
          
          <BlurText
            text="I contribute to leading technology publications and maintain a dedicated platform for in-depth AI journalism. Let's connect and explore the fascinating world of artificial intelligence together!"
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            delay={60}
            animateBy="words"
            direction="top"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;