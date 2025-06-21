import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, User, MessageSquare } from 'lucide-react';
import { getContactSubmissions, ContactSubmission } from '../../lib/supabase';

const ContactSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await getContactSubmissions();
        setSubmissions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading submissions: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
        <p className="text-gray-600">
          {submissions.length} {submissions.length === 1 ? 'submission' : 'submissions'} received
        </p>
      </div>

      {submissions.length === 0 ? (
        <div className="text-center py-12">
          <Mail className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
          <p className="text-gray-600">Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {submissions.map((submission, index) => (
            <motion.div
              key={submission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <User className="h-5 w-5 text-primary-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{submission.name}</h3>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(submission.created_at)}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-2" />
                  <a
                    href={`mailto:${submission.email}`}
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    {submission.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-700 font-medium">{submission.subject}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Message:</h4>
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {submission.message}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <a
                  href={`mailto:${submission.email}?subject=Re: ${submission.subject}&body=Hi ${submission.name},%0D%0A%0D%0AThank you for your message.%0D%0A%0D%0ABest regards,%0D%0APramish`}
                  className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Reply
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;