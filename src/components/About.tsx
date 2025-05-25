import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden perspective-1000">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="About"
            highlight="Me"
            centered
          />
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-gray-700 preserve-3d"
          initial={{ opacity: 0, rotateX: -20, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.p 
            className="mb-6 text-xl lg:text-2xl leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello! I'm <span className="gradient-text font-bold">Pramish</span>, an AI-focused journalist with a passion for uncovering and analyzing the latest developments in artificial intelligence and their impact on journalism, media, and society at large.
          </motion.p>
          
          <motion.p 
            className="mb-6 text-xl lg:text-2xl leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            My work focuses on investigating emerging AI technologies, exploring ethical considerations in AI development, and examining how artificial intelligence is reshaping the media landscape. I combine deep technical understanding with clear, accessible writing to make complex AI topics understandable to diverse audiences.
          </motion.p>
          
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I contribute to leading technology publications and maintain a dedicated platform for in-depth AI journalism. Let's connect and explore the fascinating world of artificial intelligence together!
          </motion.p>

          <motion.div
            className="absolute -z-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"
            style={{ 
              left: '20%',
              top: '20%',
              transform: 'translateZ(-100px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute -z-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10"
            style={{ 
              right: '10%',
              bottom: '10%',
              transform: 'translateZ(-100px)'
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;