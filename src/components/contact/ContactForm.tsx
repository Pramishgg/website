import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };
  
  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
            placeholder="John Doe"
          />
        </motion.div>
        
        <motion.div variants={inputVariants} whileFocus="focus">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
            placeholder="you@example.com"
          />
        </motion.div>
      </div>
      
      <motion.div variants={inputVariants} whileFocus="focus">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300"
          placeholder="Project Inquiry"
        />
      </motion.div>
      
      <motion.div variants={inputVariants} whileFocus="focus">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 resize-none"
          placeholder="Your detailed message here..."
        ></textarea>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button
          type="submit"
          primary
          className="w-full flex items-center justify-center gap-2 py-4"
          onClick={() => {}}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={18} />
            </>
          )}
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: formStatus ? 1 : 0,
            y: formStatus ? 0 : 10
          }}
          transition={{ duration: 0.4 }}
          className="mt-4"
        >
          {formStatus === 'success' && (
            <p className="text-center text-green-600 bg-green-50 py-3 px-4 rounded-xl">
              Your message has been sent successfully! I'll get back to you soon.
            </p>
          )}
          
          {formStatus === 'error' && (
            <p className="text-center text-red-600 bg-red-50 py-3 px-4 rounded-xl">
              There was an error sending your message. Please try again.
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;