import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <GithubIcon className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <LinkedinIcon className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:developer@example.com', label: 'Email' },
  ];

  return (
    <footer className="w-full border-t bg-slate-50/50 dark:bg-slate-950/20 border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 text-white font-mono shadow-sm">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                DevOps<span className="text-indigo-500 font-medium">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-center md:text-left text-slate-500 dark:text-slate-400">
              Building robust cloud systems and interactive web architectures with high availability and premium UX.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Connect With Me</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white shadow-sm hover:shadow-md transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold uppercase tracking-wider">Back to Top</span>
              <ArrowUp className="w-4 h-4 animate-bounce" />
            </motion.button>
          </div>
        </div>

        <hr className="my-8 border-slate-200/50 dark:border-slate-800/50" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>&copy; {new Date().getFullYear()} DevOpsFlow. All rights reserved.</span>
          <span className="mt-2 md:mt-0 flex items-center space-x-1">
            <span>Powered by</span>
            <span className="text-indigo-500 font-medium">React</span>
            <span>&amp;</span>
            <span className="text-cyan-500 font-medium">Vite</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
