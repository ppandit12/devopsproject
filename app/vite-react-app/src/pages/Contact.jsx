import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Copy, Check, Info, Loader2 } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pawanpandit9834@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState('submitting');
    
    // Simulate API delay
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  const socialCards = [
    {
      title: 'Email Address',
      value: 'pawanpandit9834@gmail.com',
      icon: <Mail className="w-5 h-5 text-indigo-500" />,
      action: (
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-500 hover:text-indigo-600 transition-colors p-1"
          title="Copy Email to Clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      )
    },
    {
      title: 'LinkedIn',
      value: 'pawan-kuamar-p-595676176',
      icon: <LinkedinIcon className="w-5 h-5 text-purple-500" />,
      action: (
        <a
          href="https://www.linkedin.com/in/pawan-kuamar-p-595676176/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-xs font-bold text-purple-500 hover:text-purple-600 transition-colors p-1"
        >
          <span>Connect</span>
        </a>
      )
    },
    {
      title: 'GitHub Profile',
      value: 'github.com/ppandit12',
      icon: <GithubIcon className="w-5 h-5 text-cyan-500" />,
      action: (
        <a
          href="https://github.com/ppandit12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-500 hover:text-cyan-600 transition-colors p-1"
        >
          <span>Follow</span>
        </a>
      )
    }
  ];

  return (
    <div className="py-6 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get in Touch</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Have an exciting project layout, contract integration, or cloud migration role? Let's discuss!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Methods cards */}
        <div className="lg:col-span-5 space-y-4">
          {socialCards.map((card) => (
            <div key={card.title} className="rounded-2xl glow-card p-5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50">
                  {card.icon}
                </div>
                <div className="space-y-0.5 text-left">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white truncate max-w-[200px] sm:max-w-xs">
                    {card.value}
                  </p>
                </div>
              </div>
              {card.action}
            </div>
          ))}

          {/* Form helper note */}
          <div className="rounded-2xl p-4 bg-amber-500/5 border border-amber-500/10 text-amber-600/90 dark:text-amber-400/90 flex items-start space-x-3 text-xs leading-relaxed">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Submitting this contact form generates a beautiful visual mock response detailing API payload handshakes and routing telemetry!
            </span>
          </div>
        </div>

        {/* Right Side: Contact Form panel */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl glow-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-850 dark:text-white">Message Transmitted!</h3>
                  <p className="text-sm text-slate-555 dark:text-slate-400 max-w-sm leading-relaxed">
                    The API response code resolved with <strong className="text-emerald-500">200 OK</strong>. Your message was processed cleanly, and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-4 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form-state"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-[10px] text-rose-500 font-bold">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                          errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-[10px] text-rose-500 font-bold">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                        errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                      placeholder="Collaboration opportunity..."
                    />
                    {errors.subject && <p className="text-[10px] text-rose-500 font-bold">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${
                        errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                      placeholder="Hi, I wanted to discuss..."
                    />
                    {errors.message && <p className="text-[10px] text-rose-500 font-bold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-[1.01] shadow-md shadow-indigo-500/20 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending API Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
