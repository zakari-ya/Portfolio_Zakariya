import React, { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';
import axios from 'axios';

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative rounded-3xl sm:border border-border
                 sm:p-8 lg:p-10 bg-foreground"
      >
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background text-foreground mb-4">
            <Mail className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-background/70">Thank you for reaching out. I'll get back to you within 24 hours.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors"
          >
            Send another message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="relative rounded-3xl sm:border border-border
               sm:p-8 lg:p-10 bg-foreground"
    >
      {/* Depth outline */}
      <div
        className="absolute inset-0 -translate-x-4 -translate-y-4
                    rounded-3xl border border-border/40 hidden sm:block"
      />

      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="p-3 rounded-full border border-border/20">
            <Mail strokeWidth={1.5} className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-background/60">Send a Message</h3>
            <p className="text-sm text-background/60">Fill out the form below</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-2xl border border-border/50
                         bg-transparent text-background placeholder:text-background/40
                         transition-all duration-300 focus:bg-background/5
                         focus:border-background/30 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-2xl border border-border/50
                         bg-transparent text-background placeholder:text-background/40
                         transition-all duration-300 focus:bg-background/5
                         focus:border-background/30 outline-none"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-5 py-3 rounded-2xl border border-border/50
                       bg-transparent text-background placeholder:text-background/40
                       transition-all duration-300 focus:bg-background/5
                       focus:border-background/30 outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              required
              rows={5}
              className="w-full px-5 py-3 rounded-2xl border border-border/50
                       bg-transparent text-background placeholder:text-background/40
                       transition-all duration-300 focus:bg-background/5
                       focus:border-background/30 outline-none resize-none"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex items-center justify-center gap-3
                     w-full rounded-2xl border border-border/50 px-6 py-4
                     bg-background text-foreground font-medium
                     transition-all duration-300 hover:bg-background/90
                     hover:border-transparent disabled:opacity-50
                     disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EmailForm;
