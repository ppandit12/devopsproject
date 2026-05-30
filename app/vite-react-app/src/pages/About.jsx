import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Building, Sparkles } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      role: 'Lead DevOps Engineer',
      company: 'CloudScale Solutions',
      period: '2024 - Present',
      location: 'Remote / Seattle, WA',
      description: 'Architecting containerized cloud infrastructure on AWS. Spearheaded migration of legacy monoliths to Kubernetes, dropping compute costs by 30%. Designing resilient CI/CD workflows supporting 50+ developers.',
    },
    {
      role: 'Full Stack & Cloud Developer',
      company: 'InnovateTech Labs',
      period: '2022 - 2024',
      location: 'Hybrid / Boston, MA',
      description: 'Engineered high-performance web systems using React, Next.js, and Node.js. Maintained MySQL clustering and integrated secure Redis-based caching. Automated multi-environment staging deployments with Docker.',
    },
    {
      role: 'Software Developer',
      company: 'CoreBits Inc',
      period: '2021 - 2022',
      location: 'On-site / Austin, TX',
      description: 'Built interactive dashboard interfaces and reusable API endpoints with Express and React. Partnered closely with senior engineers to transition deployment flows from manual setups to automated Jenkins pipelines.',
    },
  ];

  const educationData = [
    {
      degree: 'M.S. in Cloud Systems Engineering',
      institution: 'Apex Technology University',
      period: '2019 - 2021',
      location: 'San Francisco, CA',
      description: 'Specialization in Distributed Databases, Microservice Architectures, and Automated Orchestration. Graduate thesis focused on high-density scheduling optimizations in Kubernetes.',
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'Metro State University',
      period: '2015 - 2019',
      location: 'Denver, CO',
      description: 'Acquired foundational knowledge in data structures, design patterns, operating systems, and computer networks. Graduated with Honors (Magna Cum Laude).',
    },
  ];

  const bioStats = [
    { value: '5+', label: 'Years Architecting' },
    { value: '35+', label: 'Pipelines Created' },
    { value: '20k+', label: 'Commits Pushed' },
    { value: '99%', label: 'Release Success' }
  ];

  return (
    <div className="py-6 space-y-12">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Me</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          The story behind the cloud architecture, server metrics, and interactive software designs.
        </p>
      </div>

      {/* Grid Layout Bio / Highlight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Text Bio Card */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl glow-card bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 shadow-md dark:shadow-none p-6 sm:p-8 space-y-6">
          <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="flex items-center space-x-2 text-indigo-500">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-sm uppercase tracking-wider">My Journey</span>
            </div>
            <p>
              I am a hybrid software engineer who loves the harmony between coding scalable user experiences and provisioning the secure, automated server frameworks that run them. My journey began writing frontend templates, which quickly evolved into an obsession with database optimizations, cloud scaling, and Docker.
            </p>
            <p>
              Today, I bridge the software developer/infrastructure gap. I spend my time constructing fast API architectures, managing serverless pipelines, and debugging cluster networking parameters. I thrive in challenging, fast-paced teams that put high availability and premium UX first.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-slate-500 text-xs font-semibold pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>Currently based in Seattle, WA (Open to Remote Globally)</span>
          </div>
        </div>

        {/* Right Side: Visual Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {bioStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-center items-center p-6 rounded-2xl glow-card bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 shadow-md dark:shadow-none text-center"
            >
              <span className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Switch Timeline Area */}
      <div className="pt-6 space-y-8">
        {/* Toggle Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-900 p-1 border border-slate-200/50 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'experience'
                ? 'bg-white dark:bg-slate-800 text-indigo-500 dark:text-white shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'education'
                ? 'bg-white dark:bg-slate-800 text-indigo-500 dark:text-white shadow-md'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience-timeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10"
              >
                {experienceData.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Circle Node */}
                    <div className="absolute top-1.5 -left-[31px] sm:-left-[39px] flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-indigo-500 bg-white dark:bg-slate-950 text-indigo-500 shadow-sm z-10">
                      <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>

                    {/* Content Card */}
                    <div className="rounded-2xl glow-card bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 shadow-md dark:shadow-none p-5 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <div className="inline-flex items-center space-x-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full w-fit">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                        <Building className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education-timeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10"
              >
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Circle Node */}
                    <div className="absolute top-1.5 -left-[31px] sm:-left-[39px] flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-indigo-500 bg-white dark:bg-slate-950 text-indigo-500 shadow-sm z-10">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>

                    {/* Content Card */}
                    <div className="rounded-2xl glow-card bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 shadow-md dark:shadow-none p-5 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <div className="inline-flex items-center space-x-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full w-fit">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                        <Building className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                        <span>{edu.institution}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;