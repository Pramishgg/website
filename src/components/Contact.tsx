import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary-50 relative overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
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
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10"
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
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Get In"
            highlight="Touch"
            centered
          />
        </motion.div>
        
        <div className="mt-16">
          <motion.p 
            className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out through any of these channels!
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            <ContactInfo />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl" />
            <div className="relative">
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Ready to bring your ideas to life?
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;