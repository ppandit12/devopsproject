import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Database, Server, Cpu, Cloud, CheckCircle, ExternalLink } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('fullstack'); // 'fullstack' or 'devops'

  // Custom typing animation hook variables
  const titles = ["Full Stack Developer", "DevOps Engineer", "Cloud Architect"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === fullText) {
      // Wait before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <div className="flex-grow flex flex-col justify-center items-center py-10 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column - Intro */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="self-start inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel text-slate-800 dark:text-slate-200 text-xs font-semibold"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Remote Cloud &amp; Web Projects</span>
          </motion.div>

          {/* Big Header */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-slate-850 dark:text-white">Hi, I'm Pawan Kumar Pandit</span>
              <span className="block h-[50px] sm:h-[60px] md:h-[70px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 typing-cursor">
                {currentText}
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            I build highly scalable, cloud-native backend systems and elegant, interactive frontend interfaces. Specializing in bridging the gap between robust software engineering and automated infrastructure pipelines.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-[1.02] shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Fast Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 max-w-md">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-850 dark:text-white">5+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase mt-1">Years Exp</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-850 dark:text-white">30+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase mt-1">Completed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-850 dark:text-white">99.9%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase mt-1">Uptime SLA</p>
            </div>
          </div>
        </div>

        {/* Right Column - Premium Interactive Graphic Console */}
        <div className="lg:col-span-5 w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full max-w-[420px] rounded-2xl glow-card shadow-2xl overflow-hidden"
          >
            {/* Header / Tabs */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-100/40 dark:bg-slate-900/60">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex space-x-1 rounded-lg bg-slate-200/50 dark:bg-slate-800/80 p-0.5 border border-slate-350 dark:border-slate-850">
                <button
                  onClick={() => setActiveTab('fullstack')}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'fullstack'
                      ? 'bg-white dark:bg-slate-700 text-indigo-500 dark:text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                >
                  Full Stack
                </button>
                <button
                  onClick={() => setActiveTab('devops')}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'devops'
                      ? 'bg-white dark:bg-slate-700 text-indigo-500 dark:text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                >
                  DevOps
                </button>
              </div>
            </div>

            {/* Terminal Window Body */}
            <div className="p-5 font-mono text-xs h-[300px] overflow-hidden flex flex-col text-slate-700 dark:text-slate-300 bg-slate-50/70 dark:bg-slate-950/65">
              <AnimatePresence mode="wait">
                {activeTab === 'fullstack' ? (
                  <motion.div
                    key="fullstack"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-2 text-indigo-500">
                        <Terminal className="w-4 h-4" />
                        <span className="font-bold">~/projects/portfolio-v2</span>
                      </div>
                      <div className="text-slate-400 font-light text-[11px] leading-relaxed">
                        <p><span className="text-cyan-500 font-semibold">const</span> server = express();</p>
                        <p><span className="text-cyan-500 font-semibold">const</span> PORT = process.env.PORT || <span className="text-purple-400">8080</span>;</p>
                        <p className="mt-2.5">// Express Routing &amp; Middleware</p>
                        <p>server.use(express.json());</p>
                        <p>server.use(<span className="text-emerald-400">"/api/v1/metrics"</span>, metricsRouter);</p>
                        <p className="mt-2.5">// Server Activation</p>
                        <p>server.listen(PORT, () =&gt; &#123;</p>
                        <p className="pl-4 text-emerald-500">console.log(<span className="text-emerald-400">{"`🚀 Server executing cleanly on port ${PORT}`"}</span>);</p>
                        <p>&#125;);</p>
                      </div>
                    </div>

                    {/* Footer mock state */}
                    <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-3 flex items-center justify-between text-slate-500">
                      <span className="flex items-center space-x-1">
                        <Database className="w-3.5 h-3.5 text-cyan-400" />
                        <span>MongoDB: Connected</span>
                      </span>
                      <span className="flex items-center space-x-1 text-emerald-500 font-bold">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Ready</span>
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="devops"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-2 text-cyan-500">
                        <Cpu className="w-4 h-4 animate-spin-slow" />
                        <span className="font-bold">kubectl logs -f deployment/api</span>
                      </div>
                      <div className="text-[11px] leading-relaxed text-slate-400 dark:text-slate-400">
                        <p className="text-slate-500">[2026-05-30T00:25] CI/CD Pipeline trigger #401</p>
                        <p className="text-emerald-500">✔ Terraform: Plan verified. 0 changes to apply.</p>
                        <p className="text-emerald-500">✔ Docker: Image built cleanly [tags: v2.4.12]</p>
                        <p className="text-indigo-400">⚡ AWS: Deploying container image to ECR...</p>
                        <p className="text-emerald-500">✔ AWS EKS: Rolling update initiated on cluster...</p>
                        <p className="text-emerald-500">✔ DNS Check: Route53 mapped successfully.</p>
                        <p className="text-slate-200 font-bold bg-indigo-500/10 px-1 mt-2 inline-block">
                          STATUS: HEALTHY - UPTIME 99.98%
                        </p>
                      </div>
                    </div>

                    {/* Footer mock state */}
                    <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-3 flex items-center justify-between text-slate-500">
                      <span className="flex items-center space-x-1">
                        <Cloud className="w-3.5 h-3.5 text-indigo-400 animate-pulse-slow" />
                        <span>AWS: Active Node</span>
                      </span>
                      <span className="flex items-center space-x-1 text-emerald-500 font-bold">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Online</span>
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
