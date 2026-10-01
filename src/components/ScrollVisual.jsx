import React from 'react';
import { Gauge, Compass, Activity } from 'lucide-react';

export default function ScrollVisual() {
  return (
    <div
      id="scroll-visual-container"
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center my-2 select-none pointer-events-none"
    >
      {/* Background runway and light guide */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        {/* Radial ambient glow behind car */}
        <div className="car-ambient-glow w-[350px] md:w-[650px] h-[200px] md:h-[350px] rounded-full bg-gradient-to-r from-accent-cyan/20 via-blue-600/15 to-purple-600/10 blur-[80px] opacity-70 transform -translate-y-4"></div>
        
        {/* Speed grid perspective runway */}
        <div className="absolute bottom-4 w-full h-[120px] bg-gradient-to-t from-accent-cyan/[0.05] via-transparent to-transparent border-b border-accent-cyan/20">
          <div className="w-full h-full opacity-30 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </div>

        {/* Dynamic laser speed trail running behind the vehicle */}
        <div
          id="car-speed-trail"
          className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-transparent via-accent-cyan/80 to-accent-cyan rounded-full opacity-60 shadow-[0_0_15px_#00f0ff] will-change-transform origin-left"
          style={{ width: '0%' }}
        />
      </div>

      {/* Main Vehicle Container */}
      <div
        id="car-wrapper"
        className="relative z-10 w-[80%] sm:w-[70%] md:w-[62%] lg:w-[54%] max-w-[680px] mx-auto will-change-transform"
      >
        {/* Headlight beam projection effect */}
        <div
          id="car-headlight-beam"
          className="absolute -bottom-8 -left-16 w-44 md:w-64 h-32 bg-gradient-to-l from-transparent via-accent-cyan/20 to-transparent blur-xl -rotate-12 pointer-events-none opacity-80"
        />

        {/* Telemetry floating HUD chip - positioned cleanly below car image or to the right */}
        <div
          id="car-telemetry"
          className="absolute -bottom-3 right-0 sm:right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950/90 border border-accent-cyan/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)] text-[9px] font-mono-code text-accent-cyan tracking-wider pointer-events-none z-20"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
            DRIVE // KINETIC
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">SCROLL SYNC</span>
        </div>

        {/* The Sports Car Visual */}
        <div className="relative group">
          <picture>
            <source srcSet="./car.webp" type="image/webp" />
            <img
              id="car-image"
              src="./car.png"
              alt="ITZFIZZ Cyber Hypercar - Creative Web Experience"
              className="w-full h-auto max-h-[320px] md:max-h-[360px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] filter brightness-105 contrast-110 will-change-transform mx-auto"
              loading="eager"
            />
          </picture>

          {/* Underglow neon chassis shadow */}
          <div className="absolute -bottom-2 inset-x-8 h-6 bg-accent-cyan/25 blur-lg rounded-full pointer-events-none transform scale-y-50"></div>
          {/* Ground contact shadow */}
          <div className="absolute -bottom-1 inset-x-4 h-4 bg-black/90 blur-md rounded-full pointer-events-none"></div>
        </div>

        {/* Dynamic coordinate crosshair */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] font-mono-code text-zinc-400">
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-accent-cyan" />
            POS: [CENTER STAGE]
          </span>
          <span className="text-zinc-600">&bull;</span>
          <span className="flex items-center gap-1">
            <Gauge className="w-3 h-3 text-accent-cyan" />
            AERODYNAMIC // FLUID
          </span>
        </div>
      </div>
    </div>
  );
}
