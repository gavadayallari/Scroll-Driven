import React from 'react';
import { Code, Palette, Rocket, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      number: '01',
      title: 'WEB DEVELOPMENT',
      category: 'ENGINEERING & ARCHITECTURE',
      description:
        'Architecting modern frontend ecosystems with React, smooth GSAP orchestration, and modular component design built for performance and scalability.',
      tags: ['React.js', 'GSAP ScrollTrigger', 'Tailwind CSS', 'Vite Bundler'],
      icon: Code,
      glow: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.2)]',
      accentColor: 'text-accent-cyan',
    },
    {
      number: '02',
      title: 'CREATIVE DESIGN',
      category: 'ART DIRECTION & MOTION',
      description:
        'Sculpting high-impact digital brand aesthetics, cinematic scroll experiences, dark-mode visual hierarchy, and intuitive user experiences.',
      tags: ['Interactive Motion', 'Typography Design', 'Visual Systems', 'Micro-Interactions'],
      icon: Palette,
      glow: 'group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]',
      accentColor: 'text-purple-400',
    },
    {
      number: '03',
      title: 'DIGITAL PERFORMANCE',
      category: 'VELOCITY & OPTIMIZATION',
      description:
        'Optimizing every millisecond with GPU-accelerated transforms, zero layout thrashing, clean asset compression, and universal device responsiveness.',
      tags: ['60 FPS Rendering', 'Accessible Motion', 'Sub-second Loads', 'Zero Reflow'],
      icon: Rocket,
      glow: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.2)]',
      accentColor: 'text-emerald-400',
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#08080c] border-t border-white/[0.06] text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
              <span className="text-xs font-mono-code tracking-widest text-accent-cyan uppercase">
                ITZFIZZ CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
              WE BUILD DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-zinc-400">
                EXPERIENCES
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Crafting hyper-responsive interfaces, cinematic web motion, and scalable digital architectures that redefine modern brand storytelling.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl bg-dark-800/60 backdrop-blur-xl border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${feature.glow}`}
              >
                {/* Card Top: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono-code font-bold text-3xl text-zinc-600 group-hover:text-white transition-colors duration-300">
                      {feature.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-accent-cyan group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-code tracking-widest text-zinc-400 uppercase block mb-1">
                    {feature.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4 group-hover:text-accent-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>

                {/* Card Bottom: Tech Pills & Arrow */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06] mb-6">
                    {feature.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono-code text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-tech font-semibold tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                    <span>EXPLORE STACK</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 text-accent-cyan transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Engineering Telemetry Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-800 to-dark-700/80 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                ENGINEERED FOR 60 FPS MOTION
              </h4>
              <p className="text-xs text-zinc-400 font-light">
                Hardware-accelerated CSS transforms and GSAP ScrollTrigger timeline interpolation.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>SCRUB INTERPOLATION: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
              <span>ZERO LAYOUT REFLOW</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>PREFERS-REDUCED-MOTION READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
