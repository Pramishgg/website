import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      // Ensure we're using the anon key for public submissions
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
      }

      setStatus({ 
        type: 'success', 
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly.' 
      });
    }
  };

  const isLoading = status.type === 'loading';
  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     formData.subject.trim() && 
                     formData.message.trim();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Tell me about your project, ideas, or just say hello!"
          />
        </div>

        {status.type !== 'idle' && (
          <div className={`p-4 rounded-lg flex items-center gap-3 ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : status.type === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            {status.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
            {status.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            {status.type === 'loading' && (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{status.message || 'Sending message...'}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}