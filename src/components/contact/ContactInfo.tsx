import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const contactMethods = [
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={24} />,
    value: 'pramishgelal2@gmail.com',
    action: 'Send an Email',
    link: 'https://mail.google.com',
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
    value: 'github.com/pramishgg',
    action: 'Follow on GitHub',
    link: 'https://github.com/pramishgg',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    icon: <Instagram size={24} />,
    value: 'instagram.com/pramish_gg',
    action: 'Follow on Instagram',
    link: 'https://instagram.com/pramish_gg',
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