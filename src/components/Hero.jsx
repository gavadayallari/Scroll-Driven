import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollVisual from './ScrollVisual';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const pinContainerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Immediately show everything for reduced-motion users
        gsap.set(['#car-wrapper', '#green-banner', '#banner-text', '.stat-card-scroll'], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        gsap.set('#car-wrapper', { left: '80%' });
        gsap.set('#green-banner', { width: '100%' });
        return;
      }

      // Scroll-driven animation timeline
      const mm = gsap.matchMedia();

      // ======== DESKTOP (>= 1024px) ========
      mm.add('(min-width: 1024px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            pin: pinContainerRef.current,
            start: 'top top',
            end: '+=300%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTl
          // Phase 1 (0% → 20%): Car enters from left, drives onto the road
          .fromTo(
            '#car-wrapper',
            { left: '-15%' },
            { left: '15%', ease: 'power1.inOut', duration: 1 },
            0
          )
          // Green banner starts expanding behind car
          .to('#green-banner', { width: '20%', ease: 'power1.inOut', duration: 1 }, 0)

          // Phase 2 (20% → 40%): First stat cards appear
          // Top-left stat card (yellow - 58%)
          .to('#stat-card-1', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.6)
          // Car continues moving
          .to('#car-wrapper', { left: '30%', ease: 'power1.inOut', duration: 1 }, 1)
          .to('#green-banner', { width: '35%', ease: 'power1.inOut', duration: 1 }, 1)

          // Phase 3 (40% → 60%): More stat cards, car crosses midpoint
          // Bottom-left stat card (blue - 23%)
          .to('#stat-card-3', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 1.3)
          .to('#car-wrapper', { left: '50%', ease: 'power1.inOut', duration: 1 }, 2)
          .to('#green-banner', { width: '55%', ease: 'power1.inOut', duration: 1 }, 2)

          // Phase 4 (60% → 80%): Second pair of stat cards
          // Top-right stat card (gray - 27%)
          .to('#stat-card-2', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 2.2)
          .to('#car-wrapper', { left: '65%', ease: 'power1.inOut', duration: 1 }, 3)
          .to('#green-banner', { width: '70%', ease: 'power1.inOut', duration: 1 }, 3)

          // Phase 5 (80% → 100%): Final stat card, car reaches end
          // Bottom-right stat card (orange - 40%)
          .to('#stat-card-4', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 3.2)
          .to('#car-wrapper', { left: '82%', ease: 'power2.out', duration: 1 }, 4)
          .to('#green-banner', { width: '90%', ease: 'power1.inOut', duration: 1 }, 4);
      });

      // ======== TABLET (768px → 1023px) ========
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            pin: pinContainerRef.current,
            start: 'top top',
            end: '+=250%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTl
          .fromTo('#car-wrapper', { left: '-15%' }, { left: '15%', duration: 1 }, 0)
          .to('#green-banner', { width: '20%', duration: 1 }, 0)
          .to('#stat-card-1', { opacity: 1, y: 0, duration: 0.5 }, 0.6)
          .to('#car-wrapper', { left: '35%', duration: 1 }, 1)
          .to('#green-banner', { width: '40%', duration: 1 }, 1)
          .to('#stat-card-3', { opacity: 1, y: 0, duration: 0.5 }, 1.3)
          .to('#car-wrapper', { left: '55%', duration: 1 }, 2)
          .to('#green-banner', { width: '60%', duration: 1 }, 2)
          .to('#stat-card-2', { opacity: 1, y: 0, duration: 0.5 }, 2.2)
          .to('#car-wrapper', { left: '75%', duration: 1 }, 3)
          .to('#green-banner', { width: '82%', duration: 1 }, 3)
          .to('#stat-card-4', { opacity: 1, y: 0, duration: 0.5 }, 3.2);
      });

      // ======== MOBILE (< 768px) ========
      mm.add('(max-width: 767px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            pin: pinContainerRef.current,
            start: 'top top',
            end: '+=250%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTl
          .fromTo('#car-wrapper', { left: '-20%' }, { left: '10%', duration: 1 }, 0)
          .to('#green-banner', { width: '15%', duration: 1 }, 0)
          .to('#stat-card-1', { opacity: 1, y: 0, duration: 0.5 }, 0.6)
          .to('#car-wrapper', { left: '30%', duration: 1 }, 1)
          .to('#green-banner', { width: '35%', duration: 1 }, 1)
          .to('#stat-card-3', { opacity: 1, y: 0, duration: 0.5 }, 1.3)
          .to('#car-wrapper', { left: '50%', duration: 1 }, 2)
          .to('#green-banner', { width: '55%', duration: 1 }, 2)
          .to('#stat-card-2', { opacity: 1, y: 0, duration: 0.5 }, 2.2)
          .to('#car-wrapper', { left: '70%', duration: 1 }, 3)
          .to('#green-banner', { width: '75%', duration: 1 }, 3)
          .to('#stat-card-4', { opacity: 1, y: 0, duration: 0.5 }, 3.2);
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full"
      style={{ backgroundColor: '#C0C0C0' }}
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinContainerRef}
        className="w-full h-screen relative overflow-hidden"
      >
        <ScrollVisual />
      </div>
    </section>
  );
}
