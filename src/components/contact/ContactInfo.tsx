import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactMethods = [
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={24} />,
    value: 'pramishgelal@gmail.com',
    action: 'Send an Email',
    link: 'mailto:pramishgelal@gmail.com',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: <Linkedin size={24} />,
    value: 'linkedin.com/in/pramish',
    action: 'Connect on LinkedIn',
    link: 'https://linkedin.com/in/pramish',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: <Github size={24} />,
    value: 'github.com/pramish',
    action: 'Follow on GitHub',
    link: 'https://github.com/pramish',
  },
];

const ContactInfo: React.FC = () => {
  return (
    <>
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center flex flex-col items-center relative group"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
          />
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
            <p className="text-gray-600 mb-4">{method.value}</p>
            <a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              {method.action}
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ContactInfo;