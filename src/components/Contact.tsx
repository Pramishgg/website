import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import ContactInfo from './contact/ContactInfo';

const Contact: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-secondary-50 relative overflow-hidden">
      {!isMobile && (
        <>
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [45, 0, 45],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
        </>
      )}
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <SectionTitle
            title="Get In"
            highlight="Touch"
            centered
          />
        </motion.div>
        
        <div className="mt-12 md:mt-16">
          <motion.p 
            className="text-center text-lg md:text-xl text-gray-700 mb-12 md:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: 0.1 }}
          >
            Ready to explore AI solutions for your business? I'm always excited to discuss new projects, AI strategy, or opportunities to collaborate on innovative AI implementations. Let's connect!
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;