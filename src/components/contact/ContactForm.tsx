import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from '../ui/Button';
import { insertContactSubmission } from '../../lib/supabase';

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
      // Store in database first - this is the primary action
      await insertContactSubmission(formData);
      
      // Try to send email notification, but don't fail if it doesn't work
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        if (supabaseUrl && supabaseAnonKey) {
          const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            console.warn('Email notification failed, but contact submission was saved successfully');
          }
        } else {
          console.warn('Supabase environment variables not configured for email notifications');
        }
      } catch (emailError) {
        // Email notification failed, but that's okay - the main submission succeeded
        console.warn('Email notification failed, but contact submission was saved successfully:', emailError);
      }

      // Form submission was successful (data saved to database)
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMobile = window.innerWidth < 768;
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
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
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 touch-optimized"
            placeholder="John Doe"
          />
        </div>
        
        <div>
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
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 touch-optimized"
            placeholder="you@example.com"
          />
        </div>
      </div>
      
      <div>
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
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 touch-optimized"
          placeholder="Project Inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all duration-300 resize-none touch-optimized"
          placeholder="Your detailed message here..."
        ></textarea>
      </div>
      
      <div>
        <Button
          type="submit"
          primary
          className="w-full flex items-center justify-center gap-2 py-3 md:py-4"
          onClick={() => {}}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={16} />
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
            <p className="text-center text-green-600 bg-green-50 py-2 md:py-3 px-4 rounded-xl text-sm md:text-base">
              Your message has been sent successfully! I'll get back to you soon.
            </p>
          )}
          
          {formStatus === 'error' && (
            <p className="text-center text-red-600 bg-red-50 py-2 md:py-3 px-4 rounded-xl text-sm md:text-base">
              There was an error sending your message. Please try again.
            </p>
          )}
        </motion.div>
      </div>
    </form>
  );
};

export default ContactForm;