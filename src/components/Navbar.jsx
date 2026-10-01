import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#features' },
    { name: 'EXPERIENCE', href: '#hero' },
    { name: 'METRICS', href: '#stats' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 rounded-lg p-1"
          aria-label="ITZFIZZ Home"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-accent-cyan/60 transition-colors">
            <span className="font-display font-black text-sm tracking-tighter text-white group-hover:text-accent-cyan transition-colors">
              IF
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-widest text-white group-hover:text-accent-cyan transition-colors">
              ITZFIZZ
            </span>
            <span className="text-[9px] font-mono-code text-zinc-400 tracking-wider hidden sm:block">
              DIGITAL LAB &bull; 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium font-tech tracking-widest text-zinc-400 hover:text-white transition-all duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold font-tech tracking-wider text-black bg-white hover:bg-accent-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-6 px-8' : 'max-h-0 opacity-0 py-0 px-8'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-tech tracking-widest text-zinc-300 hover:text-accent-cyan py-2 border-b border-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 w-full text-center py-2.5 rounded-full text-xs font-bold font-tech tracking-wider text-black bg-accent-cyan hover:bg-white transition-colors"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </header>
  );
}
