import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  // Ensure smooth scroll restoration and top on refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-accent-cyan selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Accessibility Skip Link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent-cyan text-black font-bold rounded-md"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Viewport 1: Pinned Scroll-Driven Hero Section */}
        <Hero />

        {/* Viewport 2+: Features & Capabilities */}
        <Features />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
