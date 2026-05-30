import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, Star, Settings } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack' },
    { id: 'frontend', name: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', name: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'devops', name: 'DevOps & Cloud', icon: <Cloud className="w-4 h-4" /> },
  ];

  const skillsData = [
    // Frontend
    { name: 'React.js', category: 'frontend', level: 95, details: 'Hooks, Suspense, Context, State Management' },
    { name: 'Next.js', category: 'frontend', level: 90, details: 'App Router, SSR, SSG, Middlewares, Vercel' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 92, details: 'Asynchronous scripting, DOM APIs, Event Loop' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 95, details: 'Semantic structures, Flexbox/Grid layouts' },
    { name: 'Tailwind CSS', category: 'frontend', level: 95, details: 'Responsive styles, utility tokens, custom styling' },
    
    // Backend
    { name: 'Node.js', category: 'backend', level: 90, details: 'Event-driven systems, Streams, Native APIs' },
    { name: 'Express.js', category: 'backend', level: 92, details: 'REST APIs, Middleware orchestrations, routing' },
    
    // Database
    { name: 'MongoDB', category: 'database', level: 85, details: 'Mongoose, aggregation pipelines, document indexing' },
    { name: 'MySQL / SQL', category: 'database', level: 88, details: 'Relational design, indexing, performance tuning' },
    
    // DevOps
    { name: 'Docker', category: 'devops', level: 92, details: 'Multi-stage builds, compose files, image hardening' },
    { name: 'Kubernetes', category: 'devops', level: 88, details: 'Pod scheduling, ingress rules, configs, Helm charts' },
    { name: 'Terraform', category: 'devops', level: 85, details: 'Infrastructure as Code (IaC), state locking, modular plans' },
    { name: 'AWS Cloud', category: 'devops', level: 90, details: 'EC2, EKS, VPC networking, IAM, S3, CloudWatch' },
    { name: 'Jenkins & GitHub Actions', category: 'devops', level: 88, details: 'Automated CI/CD pipelines, testing matrices' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend': return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'backend': return <Server className="w-5 h-5 text-purple-500" />;
      case 'database': return <Database className="w-5 h-5 text-cyan-500" />;
      case 'devops': return <Cloud className="w-5 h-5 text-emerald-500" />;
      default: return <Star className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="py-6 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Skills &amp; Technology</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          My primary toolbelt for software development, microservice architectures, and automated cloud workflows.
        </p>
      </div>

      {/* Category Tabs Selector */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
              activeCategory === cat.id
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                : 'bg-white/40 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900'
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
            className="glow-card rounded-2xl p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Header Info */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="text-base font-bold text-slate-850 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-extrabold text-indigo-500 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                />
              </div>

              {/* Details Tag */}
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                {skill.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DevOps Metaphorical Console Callout */}
      <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-dashed border-indigo-500/30 bg-indigo-500/5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center space-x-3 text-indigo-500 dark:text-indigo-400">
          <Settings className="w-6 h-6 animate-spin-slow" />
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider">Cloud Native First</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              All tools listed are verified in active production pipelines with SLA checks.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-[10px] font-mono text-slate-500">
          <span>[ Helm v3 ]</span>
          <span>[ GitOps ]</span>
          <span>[ Serverless ]</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
