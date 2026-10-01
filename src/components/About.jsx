import React from 'react';
import { Terminal, Lightbulb, Workflow, Sparkles, ArrowUpRight } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'ENGINEERING RIGOR',
      description:
        'Hardware-accelerated CSS transforms, GSAP timeline scrubbing, zero layout reflows, and modular React component design.',
      icon: Terminal,
    },
    {
      title: 'CREATIVE AUDACITY',
      description:
        'Rejecting generic agency templates in pursuit of dark futuristic aesthetics, kinetic typography, and immersive brand worlds.',
      icon: Lightbulb,
    },
    {
      title: 'PERFORMANCE VELOCITY',
      description:
        'Sub-second first contentful paint, 100% responsive fluid layouts, and accessible motion systems honoring reduced-motion preferences.',
      icon: Workflow,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#08080c] border-t border-white/[0.08] text-white overflow-hidden scroll-mt-20"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-accent-cyan/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/[0.08] border border-accent-cyan/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="text-[11px] font-mono-code tracking-widest text-accent-cyan uppercase">
                THE ITZFIZZ PHILOSOPHY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white uppercase leading-tight mb-6">
              CREATIVE CODE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-zinc-400">
                AT SCALE
              </span>
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
              We operate at the convergence of digital aesthetics, motion design, and frontend architecture. Every interaction is calculated to captivate users and elevate brand perception.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-tech font-semibold tracking-wider text-accent-cyan hover:text-white transition-colors"
            >
              <span>DISCUSS A COLLABORATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: 3 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/60 border border-white/[0.08] backdrop-blur-md hover:border-accent-cyan/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-accent-cyan group-hover:scale-105 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
