import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Layers, Cloud, Code } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Work', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'devops', name: 'DevOps & Cloud', icon: <Cloud className="w-3.5 h-3.5" /> },
  ];

  const projectsData = [
    {
      id: 1,
      title: 'CloudOps Orchestrator',
      category: 'devops',
      description: 'A multi-cloud orchestration panel designed for managing cluster scaling. Integrates with AWS, displays real-time Pod metrics, simulates Helm deployments, and parses Terraform state visualizers.',
      tech: ['React', 'Tailwind', 'Go', 'AWS EKS', 'Docker', 'Terraform'],
      github: 'https://github.com',
      live: 'https://example.com',
      // Dynamic Inline SVG Mockup
      svgMockup: (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-slate-900 text-slate-100" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <path d="M 0 40 L 400 40 M 0 180 L 400 180 M 50 0 L 50 220 M 350 0 L 350 220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          
          {/* Server Nodes */}
          <rect x="70" y="60" width="80" height="45" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" className="animate-pulse" />
          <text x="80" y="78" fill="#a5b4fc" fontSize="10" fontWeight="bold" fontFamily="monospace">us-east-1a</text>
          <text x="80" y="93" fill="#10b981" fontSize="9" fontFamily="monospace">● Healthy</text>

          <rect x="70" y="115" width="80" height="45" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="80" y="133" fill="#a5b4fc" fontSize="10" fontWeight="bold" fontFamily="monospace">us-east-1b</text>
          <text x="80" y="148" fill="#10b981" fontSize="9" fontFamily="monospace">● Healthy</text>

          {/* Central Hub Node */}
          <circle cx="230" cy="110" r="30" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
          <path d="M 220 110 L 240 110 M 230 100 L 230 120" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <text x="230" y="132" fill="#22d3ee" fontSize="8" textAnchor="middle" fontFamily="monospace">Hub-VPC</text>

          {/* Connected Network Lines */}
          <path d="M 150 82.5 L 205 95 M 150 137.5 L 205 125 M 260 110 L 310 110" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Load Balancer */}
          <rect x="310" y="85" width="60" height="50" rx="6" fill="#020617" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="340" y="105" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ALB</text>
          <text x="340" y="122" fill="#60a5fa" fontSize="8" textAnchor="middle" fontFamily="monospace">Active</text>
        </svg>
      )
    },
    {
      id: 2,
      title: 'DevFlow Social',
      category: 'fullstack',
      description: 'A developer-centric social catalog and chat ecosystem. Supports live syntax-highlighted code block sharing, private messaging with socket connections, and runs entirely in dockerized environments.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
      svgMockup: (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-slate-950 text-slate-100" xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="0" y="0" width="400" height="30" fill="#0f172a" />
          <circle cx="15" cy="15" r="4" fill="#ef4444" />
          <circle cx="27" cy="15" r="4" fill="#f59e0b" />
          <circle cx="39" cy="15" r="4" fill="#10b981" />
          <text x="200" y="19" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">devflow-social-app</text>

          {/* Sidebar Chat List */}
          <rect x="10" y="40" width="100" height="170" rx="4" fill="#020617" />
          <circle cx="25" cy="55" r="8" fill="#6366f1" />
          <rect x="40" y="52" width="55" height="6" rx="2" fill="#475569" />
          <circle cx="25" cy="75" r="8" fill="#10b981" />
          <rect x="40" y="72" width="55" height="6" rx="2" fill="#475569" />
          <circle cx="25" cy="95" r="8" fill="#ec4899" />
          <rect x="40" y="92" width="55" height="6" rx="2" fill="#475569" />

          {/* Active Message Feed */}
          <rect x="120" y="40" width="270" height="170" rx="4" fill="#0f172a" />
          {/* Chat bubble left */}
          <rect x="135" y="55" width="160" height="40" rx="8" fill="#1e293b" />
          <text x="145" y="70" fill="#e2e8f0" fontSize="8" fontFamily="monospace">npm run dev</text>
          <text x="145" y="85" fill="#a5b4fc" fontSize="7" fontFamily="monospace">&gt; listening on port 3000</text>
          {/* Chat bubble right */}
          <rect x="235" y="110" width="140" height="35" rx="8" fill="#4338ca" />
          <text x="245" y="125" fill="#ffffff" fontSize="8" fontFamily="monospace">Dockerized cleanly!</text>
          <text x="245" y="137" fill="#c7d2fe" fontSize="7" fontFamily="monospace">Deploy payload sent.</text>

          {/* Chat Input */}
          <rect x="135" y="165" width="240" height="25" rx="6" fill="#020617" stroke="#334155" strokeWidth="1" />
          <text x="145" y="181" fill="#475569" fontSize="8" fontFamily="monospace">Write code snippet...</text>
        </svg>
      )
    },
    {
      id: 3,
      title: 'SaaS Analytics Engine',
      category: 'fullstack',
      description: 'High-volume analytics backend monitoring server traffic and metrics. Offers responsive charts, custom reporting filters, secure authorization barriers, and integrates with Express and MySQL.',
      tech: ['Next.js', 'Express', 'MySQL', 'Tailwind', 'ChartJS', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com',
      svgMockup: (
        <svg viewBox="0 0 400 220" className="w-full h-full bg-slate-900 text-slate-100" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <line x1="40" y1="40" x2="40" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <line x1="40" y1="180" x2="360" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          
          {/* Chart Bars or lines */}
          <path d="M 40 160 L 100 130 L 160 145 L 220 80 L 280 95 L 340 50" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Fill under chart line */}
          <path d="M 40 160 L 100 130 L 160 145 L 220 80 L 280 95 L 340 50 L 340 180 L 40 180 Z" fill="url(#cyan-grad)" opacity="0.15" />
          
          <defs>
            <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Target points */}
          <circle cx="220" cy="80" r="5" fill="#22d3ee" stroke="#0e7490" strokeWidth="1.5" />
          <circle cx="340" cy="50" r="5" fill="#22d3ee" stroke="#0e7490" strokeWidth="1.5" className="animate-ping" />

          {/* Metric tooltip */}
          <rect x="180" y="35" width="80" height="30" rx="4" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" />
          <text x="220" y="47" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">API Request</text>
          <text x="220" y="58" fill="#10b981" fontSize="7" textAnchor="middle" fontFamily="monospace">Peak: +240%</text>
        </svg>
      )
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="py-6 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Projects</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          A showcase of systems integration, custom backend microservices, and interactive developer tooling.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center space-x-2 max-w-md mx-auto">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === filter.id
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-slate-650 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900'
            }`}
          >
            {filter.icon}
            <span>{filter.name}</span>
          </button>
        ))}
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glow-card rounded-2xl flex flex-col justify-between group h-full"
            >
              {/* Graphic Visual Cover */}
              <div className="relative aspect-video overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-950/20">
                {project.svgMockup}
                {/* Glassmorphic hover overlay */}
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-md"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-105 text-white shadow-md transition-all"
                    aria-label="Live Demo Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full">
                    {project.category === 'devops' ? 'DevOps / Infrastructure' : 'Full Stack Development'}
                  </span>
                  <h3 className="text-lg font-bold text-slate-850 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-450 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges List */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Fallback link layout for touch devices */}
                  <div className="flex items-center space-x-4 text-xs font-bold md:hidden pt-2 border-t border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-indigo-500">
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-indigo-500">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
