import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollVisual from './ScrollVisual';
import Stats from './Stats';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const pinContainerRef = useRef(null);
  const headlineRef = useRef(null);

  const word1 = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];
  const word2 = ['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'];

  useLayoutEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Initial Load Animation Sequence
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (!prefersReducedMotion) {
        // 0.0s: Eyebrow label appears
        tl.fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
        // 0.2s: Staggered Headline Reveal
        .fromTo(
          '.headline-char',
          { opacity: 0, y: 30, rotateX: -25 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.03,
            ease: 'expo.out',
          },
          0.2
        )
        // 0.5s: Supporting text & CTAs appear
        .fromTo(
          ['.hero-subtext', '.hero-ctas'],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.5
        )
        // 0.7s: Statistics appear one by one
        .fromTo(
          '.stat-card',
          { opacity: 0, y: 25, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
          },
          0.7
        )
        // 0.9s: Car slides/fades into position
        .fromTo(
          '#car-wrapper',
          { opacity: 0, x: 70, scale: 0.94 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power4.out',
          },
          0.9
        )
        // 1.1s: Scroll indicator appears
        .fromTo(
          '.hero-scroll-indicator',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          1.1
        );
      } else {
        // Immediate display for reduced-motion users
        gsap.set(
          ['.hero-eyebrow', '.headline-char', '.hero-subtext', '.hero-ctas', '.stat-card', '#car-wrapper', '.hero-scroll-indicator'],
          { opacity: 1, y: 0, x: 0, scale: 1 }
        );
      }

      // 2. Responsive Scroll-Driven Animation (GSAP ScrollTrigger)
      if (!prefersReducedMotion) {
        const mm = gsap.matchMedia();

        // DESKTOP (Width >= 1024px)
        mm.add('(min-width: 1024px)', () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              pin: pinContainerRef.current,
              start: 'top top',
              end: '+=180%',
              scrub: 1.2,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          scrollTl
            // Scroll 0% -> 25%: Car starts moving right and scales slightly
            .to('#car-wrapper', {
              x: 160,
              y: -10,
              scale: 1.08,
              rotation: -2,
              ease: 'power1.inOut',
            }, 0)
            // Speed trail expands
            .to('#car-speed-trail', {
              width: '65%',
              opacity: 0.9,
              ease: 'power1.inOut',
            }, 0)
            // Headline and text gently drift with cinematic parallax
            .to('.hero-headline-container', {
              y: -40,
              opacity: 0.35,
              scale: 0.97,
              ease: 'power1.out',
            }, 0)
            .to('.hero-stats-wrapper', {
              y: -30,
              opacity: 0.6,
              ease: 'power1.out',
            }, 0)
            // Background ambient glow moves with car
            .to('.car-ambient-glow', {
              x: 140,
              scale: 1.15,
              opacity: 0.8,
              ease: 'power1.inOut',
            }, 0)
            // Scroll 25% -> 60%: Car traverses smoothly across viewport
            .to('#car-wrapper', {
              x: 380,
              y: 25,
              scale: 1.14,
              rotation: 1.5,
              ease: 'power1.inOut',
            }, 0.5)
            .to('#car-speed-trail', {
              width: '95%',
              opacity: 1,
              ease: 'power1.inOut',
            }, 0.5)
            // Scroll 60% -> 100%: Car glides toward transition exit
            .to('#car-wrapper', {
              x: 620,
              y: 50,
              scale: 1.04,
              rotation: 2.5,
              opacity: 0.7,
              ease: 'power2.in',
            }, 1.1)
            .to('#car-speed-trail', {
              opacity: 0,
              ease: 'power2.in',
            }, 1.2)
            .to(['.hero-scroll-indicator', '.hero-headline-container', '.hero-stats-wrapper'], {
              opacity: 0,
              y: -70,
              ease: 'power1.in',
            }, 1.0);
        });

        // TABLET (768px to 1023px)
        mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              pin: pinContainerRef.current,
              start: 'top top',
              end: '+=150%',
              scrub: 1.0,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          scrollTl
            .to('#car-wrapper', {
              x: 130,
              y: 15,
              scale: 1.06,
              rotation: -1.5,
              ease: 'power1.inOut',
            }, 0)
            .to('#car-speed-trail', {
              width: '75%',
              opacity: 0.8,
            }, 0)
            .to('.hero-headline-container', {
              y: -35,
              opacity: 0.3,
            }, 0)
            .to('.hero-stats-wrapper', {
              opacity: 0.4,
              y: -25,
            }, 0)
            .to('#car-wrapper', {
              x: 240,
              y: 35,
              scale: 1.02,
              rotation: 1,
              opacity: 0.6,
            }, 0.6);
        });

        // MOBILE PORTRAIT & LANDSCAPE (< 768px)
        mm.add('(max-width: 767px)', () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              pin: pinContainerRef.current,
              start: 'top top',
              end: '+=130%',
              scrub: 1.0,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Safe, bounded mobile path without horizontal scrollbar overflow
          scrollTl
            .to('#car-wrapper', {
              x: 40,
              y: 15,
              scale: 1.05,
              rotation: -1,
              ease: 'power1.inOut',
            }, 0)
            .to('.hero-headline-container', {
              y: -25,
              opacity: 0.25,
            }, 0)
            .to('.hero-stats-wrapper', {
              opacity: 0.3,
              y: -15,
            }, 0)
            .to('#car-wrapper', {
              x: 80,
              y: 35,
              scale: 0.98,
              rotation: 1.5,
              opacity: 0.5,
            }, 0.6);
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen bg-dark-900 text-white overflow-hidden"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinContainerRef}
        className="w-full h-screen min-h-[660px] max-h-[1080px] flex flex-col justify-between pt-20 pb-4 px-4 sm:px-8 md:px-12 relative overflow-hidden"
      >
        {/* Background Grid and Subtle Radial Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-accent-cyan/[0.04] rounded-full blur-[110px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/[0.08] rounded-full blur-[90px]"></div>
          <div className="absolute inset-0 bg-radial-vignette"></div>
        </div>

        {/* TOP SECTION: Eyebrow + Prominent Headline + CTAs */}
        <div className="hero-headline-container w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center z-20">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono-code font-medium tracking-widest text-zinc-300 uppercase">
              CREATIVE DIGITAL EXPERIENCE
            </span>
          </div>

          {/* Large Letter-Spaced Headline: "W E L C O M E   I T Z F I Z Z" */}
          <h1
            ref={headlineRef}
            aria-label="WELCOME ITZFIZZ"
            className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-sm select-none py-0.5 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8"
          >
            {/* Word 1: W E L C O M E */}
            <span className="inline-flex items-center gap-1 sm:gap-2 md:gap-2.5 whitespace-nowrap">
              {word1.map((char, index) => (
                <span
                  key={`w1-${index}`}
                  className="headline-char inline-block will-change-transform hover:text-accent-cyan transition-colors duration-200"
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Word 2: I T Z F I Z Z */}
            <span className="inline-flex items-center gap-1 sm:gap-2 md:gap-2.5 whitespace-nowrap">
              {word2.map((char, index) => (
                <span
                  key={`w2-${index}`}
                  className="headline-char inline-block will-change-transform text-white hover:text-accent-cyan transition-colors duration-200"
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* Supporting Paragraph & CTAs */}
          <div className="hero-subtext-container max-w-2xl mx-auto mt-2">
            <p className="hero-subtext text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
              Building digital experiences that move, engage and perform.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap items-center justify-center gap-3 mt-3">
              <a
                href="#features"
                className="px-5 py-2 rounded-full text-xs font-semibold font-tech tracking-wider text-black bg-white hover:bg-accent-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>EXPLORE MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#features"
                className="px-5 py-2 rounded-full text-xs font-semibold font-tech tracking-wider text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                VIEW WORK
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Main Visual (Sports Car with Kinetic Effects) */}
        <div className="w-full relative z-10 my-auto py-1">
          <ScrollVisual />
        </div>

        {/* BOTTOM SECTION: 3 Statistics & Scroll Indicator */}
        <div className="w-full flex flex-col items-center gap-2 z-20">
          <Stats />

          {/* Animated Scroll Indicator */}
          <div className="hero-scroll-indicator flex flex-col items-center gap-1 pt-1 cursor-pointer group">
            <span className="text-[9px] font-mono-code tracking-widest text-zinc-400 group-hover:text-accent-cyan transition-colors">
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1.5px] h-5 bg-white/20 rounded-full overflow-hidden relative">
              <div className="w-full h-1/2 bg-accent-cyan rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
