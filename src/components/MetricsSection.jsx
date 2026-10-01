import React, { useState } from 'react';
import { Award, Zap, Clock, ShieldCheck, Gauge, Cpu, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function MetricsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const mainMetrics = [
    {
      id: 'satisfaction',
      value: '95%',
      label: 'CLIENT SATISFACTION',
      sublabel: 'Verified Client Net Promoter Score (NPS)',
      detail:
        'Calculated across enterprise web deliveries and creative agency collaborations. Based on responsiveness, motion fidelity, and code quality.',
      icon: Award,
      badge: 'TOP 5% INDUSTRY BENCHMARK',
      stats: [
        { name: 'On-Time Delivery', val: '99.2%' },
        { name: 'Client Retention', val: '92%' },
      ],
      glow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      border: 'hover:border-accent-cyan/50',
      accent: 'text-accent-cyan',
    },
    {
      id: 'projects',
      value: '40+',
      label: 'DIGITAL PROJECTS',
      sublabel: 'Global Enterprise & Startup Deployments',
      detail:
        'Award-winning web applications, interactive 3D landing experiences, and performant headless architectures shipped globally.',
      icon: Zap,
      badge: 'PRODUCTION DEPLOYMENTS',
      stats: [
        { name: 'Web Applications', val: '24' },
        { name: 'Creative Sites', val: '18+' },
      ],
      glow: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
      border: 'hover:border-emerald-400/50',
      accent: 'text-emerald-400',
    },
    {
      id: 'support',
      value: '24/7',
      label: 'CREATIVE SUPPORT',
      sublabel: 'Continuous Velocity & Maintenance',
      detail:
        'Always-on technical monitoring, automated CI/CD deployment pipelines, and real-time motion regression testing.',
      icon: Clock,
      badge: 'SLA BACKED COMMITMENT',
      stats: [
        { name: 'Uptime Reliability', val: '99.98%' },
        { name: 'Response Time', val: '< 15 mins' },
      ],
      glow: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      border: 'hover:border-purple-400/50',
      accent: 'text-purple-400',
    },
  ];

  const telemetryData = [
    {
      label: 'FRAME RENDERING RATE',
      value: '60.0 FPS',
      status: 'HARDWARE LOCKED',
      icon: Gauge,
      color: 'text-emerald-400',
    },
    {
      label: 'CORE WEB VITALS (LCP)',
      value: '0.42s',
      status: 'SUB-SECOND',
      icon: Cpu,
      color: 'text-accent-cyan',
    },
    {
      label: 'CUMULATIVE LAYOUT SHIFT',
      value: '0.000',
      status: 'ZERO REFLOW',
      icon: ShieldCheck,
      color: 'text-purple-400',
    },
    {
      label: 'LIGHTHOUSE BENCHMARK',
      value: '100 / 100',
      status: 'OPTIMAL AUDIT',
      icon: Sparkles,
      color: 'text-amber-400',
    },
  ];

  return (
    <section
      id="stats"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#060609] border-t border-white/[0.08] text-white overflow-hidden scroll-mt-20"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent-cyan/[0.03] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/[0.04] rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/[0.08] border border-accent-cyan/20 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="text-[11px] font-mono-code tracking-widest text-accent-cyan uppercase">
                ITZFIZZ PERFORMANCE & METRICS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
              PROVEN IMPACT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-zinc-400">
                &amp; VELOCITY
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
              Comprehensive telemetry, client satisfaction indices, and engineering benchmarks that power our digital experiences.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE TELEMETRY SYNCED &bull; SPEC 2026</span>
            </div>
          </div>
        </div>

        {/* 3 Prominent Metrics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className={`group relative p-8 rounded-2xl bg-dark-800/80 backdrop-blur-xl border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${metric.border}`}
              >
                {/* Radial Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br ${metric.glow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700`}
                />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-code font-semibold tracking-wider text-zinc-300 bg-white/[0.04] border border-white/10">
                      {metric.badge}
                    </span>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 group-hover:text-accent-cyan group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Big Metric Value */}
                  <div className="font-tech font-bold text-5xl sm:text-6xl tracking-tight text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {metric.value}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {metric.label}
                  </h3>
                  <div className="text-xs font-mono-code text-zinc-400 mb-4">
                    {metric.sublabel}
                  </div>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {metric.detail}
                  </p>
                </div>

                {/* Sub-metrics Pills */}
                <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                  {metric.stats.map((s, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] font-mono-code text-zinc-400 mb-1">{s.name}</div>
                      <div className="font-tech font-bold text-lg text-white group-hover:text-accent-cyan transition-colors">
                        {s.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live System Telemetry Strip */}
        <div className="p-8 rounded-2xl bg-dark-900/90 border border-white/[0.08] backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-ping"></span>
              <h4 className="font-tech font-bold text-sm tracking-widest uppercase text-white">
                HARDWARE &amp; RUNTIME TELEMETRY MONITOR
              </h4>
            </div>
            <span className="text-xs font-mono-code text-zinc-400 hidden sm:inline-block">
              DIAGNOSTIC STATUS: 100% HEALTHY
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {telemetryData.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono-code text-zinc-400 tracking-wider">
                      {item.label}
                    </span>
                    <ItemIcon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className={`font-tech font-bold text-2xl sm:text-3xl mb-1 ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="text-[10px] font-mono-code text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{item.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
