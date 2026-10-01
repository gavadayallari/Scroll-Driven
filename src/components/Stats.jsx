import React from 'react';
import { Award, Zap, Clock } from 'lucide-react';

export default function Stats() {
  const statsData = [
    {
      value: '95%',
      label: 'CLIENT SATISFACTION',
      detail: 'Benchmark Net Promoter Score',
      icon: Award,
    },
    {
      value: '40+',
      label: 'DIGITAL PROJECTS',
      detail: 'High-performance web apps',
      icon: Zap,
    },
    {
      value: '24/7',
      label: 'CREATIVE SUPPORT',
      detail: 'Continuous delivery & motion',
      icon: Clock,
    },
  ];

  return (
    <div id="stats" className="w-full max-w-5xl mx-auto px-4 relative z-20">
      {/* Demo metrics notification badge */}
      <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[9px] font-mono-code tracking-widest text-zinc-400 bg-white/[0.03] border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/80 animate-ping"></span>
          DEMO METRICS // ITZFIZZ SHOWCASE SPECIFICATION
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="stat-card group relative p-3.5 sm:p-4 rounded-xl glass-panel glass-panel-hover border border-white/10 overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Corner decorative light beam */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-accent-cyan/15 transition-all duration-300" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="font-tech font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white group-hover:text-accent-cyan transition-colors">
                    <span className="stat-number">{stat.value}</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold font-tech tracking-wider text-zinc-300 uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-400 group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-zinc-400">
                <span>{stat.detail}</span>
                <span className="text-zinc-500 group-hover:text-accent-cyan transition-colors">
                  // 0{index + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
