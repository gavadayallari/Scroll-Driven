import React from 'react';
import { ArrowUp, Github, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#050505] border-t border-white/[0.08] text-white pt-20 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-accent-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center">
                <span className="font-display font-black text-sm text-white">IF</span>
              </div>
              <span className="font-display font-black text-2xl tracking-widest text-white">
                ITZFIZZ
              </span>
            </a>
            <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed mb-6">
              A high-precision scroll-driven hero section demonstration engineered for the Itzfizz Digital Web Development Internship Assignment.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-code text-accent-cyan bg-accent-cyan/[0.08] border border-accent-cyan/20">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              STATUS: READY FOR PRODUCTION
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-tech font-bold text-xs uppercase tracking-widest text-zinc-300 mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-code text-zinc-400">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', ' ');
                  }}
                  className="hover:text-accent-cyan transition-colors"
                >
                  // 01. EXPERIENCE
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#stats');
                  }}
                  className="hover:text-accent-cyan transition-colors"
                >
                  // 02. METRICS
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#features');
                  }}
                  className="hover:text-accent-cyan transition-colors"
                >
                  // 03. CAPABILITIES
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#about');
                  }}
                  className="hover:text-accent-cyan transition-colors"
                >
                  // 04. ABOUT
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-tech font-bold text-xs uppercase tracking-widest text-zinc-300 mb-4">
              TECHNOLOGY
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-code text-zinc-400">
              <li className="hover:text-white transition-colors">GSAP 3 + ScrollTrigger</li>
              <li className="hover:text-white transition-colors">React 18 & Vite</li>
              <li className="hover:text-white transition-colors">Tailwind CSS</li>
              <li className="hover:text-white transition-colors">Hardware Transforms</li>
            </ul>
          </div>

          {/* References & Links */}
          <div>
            <h4 className="font-tech font-bold text-xs uppercase tracking-widest text-zinc-300 mb-4">
              ASSIGNMENT SPEC
            </h4>
            <div className="space-y-3 text-xs font-mono-code text-zinc-400">
              <a
                href="https://paraschaturvedi.github.io/car-scroll-animation"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors group"
              >
                <span>Reference Project</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#hero"
                className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
              >
                <span>Itzfizz Repository</span>
                <Github className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-zinc-500 pt-2">
                Assignment submission code base.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} ITZFIZZ DIGITAL &bull; Developed by Candidate for Web Development Internship.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-black hover:bg-accent-cyan transition-all duration-300"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
