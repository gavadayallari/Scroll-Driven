import React from 'react';

export default function ScrollVisual() {
  return (
    <div
      id="scroll-visual-container"
      className="relative w-full select-none"
      style={{ height: '100vh' }}
    >
      {/* TOP STAT CARDS ROW */}
      <div className="absolute top-[18%] left-[12%] w-full flex items-start justify-center gap-12 px-8 z-20">
        <div
          id="stat-card-1"
          className="stat-card-scroll rounded-xl px-6 py-10 min-w-[180px] text-center"
          style={{
            backgroundColor: '#D4E157',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          <div className="text-4xl font-black text-dark-900">58%</div>
          <div className="text-2xs font-semibold text-dark-800 mt-1 font-tech">Increase in pick up point use</div>
        </div>
        <div
          id="stat-card-2"
          className="stat-card-scroll rounded-xl px-6 py-10 min-w-[180px] text-center"
          style={{
            backgroundColor: '#4A4A4A',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          <div className="text-4xl font-black text-white">27%</div>
          <div className="text-2xs font-semibold text-zinc-300 mt-1 font-tech">Increase in pick up point use</div>
        </div>
      </div>

      {/* DARK ROAD STRIP */}
      <div
        id="road-strip"
        className="absolute left-0 top-[40%] w-full flex items-center overflow-hidden"
        style={{
          // top: '30%',
          height: '28%',
          backgroundColor: '#1a1a1a',
        }}
      >
        {/* GREEN EXPANDING BANNER */}
        <div
          id="green-banner"
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center overflow-hidden z-10 rounded-r-lg"
          style={{
            backgroundColor: '#2CFF6A',
            width: '0%',
            height: '100%',
          }}
        >
          <h1
            id="banner-text"
            className="whitespace-nowrap font-display font-black text-black uppercase tracking-wider pl-20"
            style={{
              fontSize: 'clamp(3rem, 4vw, 6rem)',
              lineHeight: 1,
            }}
          >
            WELCOME ITZFIZZ
          </h1>
        </div>

        {/* CAR ON THE ROAD */}
        <div
          id="car-wrapper"
          className="absolute z-20 will-change-transform"
          style={{
            left: '-15%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '22%',
            maxWidth: '320px',
            minWidth: '180px',
          }}
        >
          <picture>
            <source srcSet="./car.webp" type="image/webp" />
            <img
              id="car-image"
              src="./car.png"
              alt="ITZFIZZ Cyber Hypercar - Scroll-Driven Animation"
              className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              style={{ transform: 'rotate(0deg)' }}
              loading="eager"
            />
          </picture>
        </div>
      </div>

      {/* BOTTOM STAT CARDS ROW */}
      <div className="absolute bottom-[8%] left-[12%] w-full flex items-end justify-center gap-6 px-8 z-20">
        <div
          id="stat-card-3"
          className="stat-card-scroll rounded-xl px-6 py-10 min-w-[180px] text-center"
          style={{
            backgroundColor: '#81D4FA',
            opacity: 0,
            transform: 'translateY(-30px)',
          }}
        >
          <div className="text-4xl font-black text-dark-900">23%</div>
          <div className="text-2xs font-semibold text-dark-800 mt-1 font-tech">Decreased in customer phone calls</div>
        </div>
        <div
          id="stat-card-4"
          className="stat-card-scroll rounded-xl px-6 py-10 min-w-[180px] text-center"
          style={{
            backgroundColor: '#FF7043',
            opacity: 0,
            transform: 'translateY(-30px)',
          }}
        >
          <div className="text-4xl font-black text-white">40%</div>
          <div className="text-2xs font-semibold text-zinc-100 mt-1 font-tech">Decreased in customer phone calls</div>
        </div>
      </div>

      {/* GRAY BACKGROUND AREAS (top and bottom) */}
      <div
        className="absolute left-0 w-full pointer-events-none"
        style={{ top: 0, height: '30%', backgroundColor: '#C0C0C0' }}
      />
      <div
        className="absolute left-0 w-full pointer-events-none"
        style={{ bottom: 0, height: '30%', backgroundColor: '#C0C0C0' }}
      />
    </div>
  );
}
