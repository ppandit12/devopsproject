import React from 'react';

const GlowingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-700">
      {/* Primary Radial Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px] animate-blob" />
      
      {/* Secondary Dynamic Orb */}
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 dark:bg-cyan-600/10 blur-[130px] animate-blob [animation-delay:4s]" />
      
      {/* Subtle Accent Glow */}
      <div className="absolute top-[40%] left-[30%] w-[35%] h-[35%] rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-[100px] animate-pulse-slow" />
      
      {/* Modern Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" 
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
      />
    </div>
  );
};

export default GlowingBackground;
