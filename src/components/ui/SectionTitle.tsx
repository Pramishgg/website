import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  highlight,
  centered = false 
}) => {
  const fullTitle = highlight ? `${title} ${highlight}` : title;
  
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <BlurText
        text={fullTitle}
        className="text-3xl md:text-4xl font-bold"
        delay={100}
        animateBy="words"
        direction="top"
      />
      <div className={`h-1 w-20 bg-primary-500 mt-4 rounded ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;