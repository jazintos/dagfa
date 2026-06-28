import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Activity, Brain, Users } from 'lucide-react';

export default function Analytics() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15);

  return (
    <section id="analytics" data-bg="light" className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-gold">
            ANALYTICS
          </span>
          <h2
            className="font-inter font-bold text-primary mt-4 leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            SPECTRA — Our Intelligence Engine
          </h2>
          <p className="font-inter text-mediumgray leading-relaxed mt-4 max-w-[700px]">
            SPECTRA is DAGFA's proprietary campaign and social media data analysis application. It tracks 
            sentiment, monitors engagement, analyzes demographics, and transforms raw data into strategic direction.
          </p>
        </div>

        {/* SPECTRA Showcase */}
        <SpectraShowcase />

        {/* Animated Charts */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SentimentDonut />
          <EngagementLineChart />
          <DemographicsBarChart />
          <PlatformPieChart />
        </div>
      </div>
    </section>
  );
}

function SpectraShowcase() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="rounded-2xl overflow-hidden border border-bordergray shadow-2xl">
        <img
          src="/assets/spectra-dashboard.png"
          alt="SPECTRA Dashboard"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        {[
          { icon: Activity, label: 'Real-Time Data Collection' },
          { icon: Brain, label: 'AI-Powered Sentiment Analysis' },
          { icon: Users, label: 'Demographic Intelligence' },
        ].map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 px-4 py-2 bg-lightgray border border-bordergray rounded-full font-inter text-xs text-mediumgray"
          >
            <Icon className="w-4 h-4 text-emerald" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SentimentDonut() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const r = 80;
  const circumference = 2 * Math.PI * r;
  const segments = [
    { label: 'Positive', value: 72.4, color: '#10B981' },
    { label: 'Neutral', value: 18.3, color: '#D97706' },
    { label: 'Negative', value: 9.3, color: '#DC2626' },
  ];

  let offset = 0;

  return (
    <div ref={ref} className="bg-lightgray border border-bordergray rounded-xl p-8 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h4 className="font-inter font-semibold text-lg text-primary mb-6">Sentiment Analysis</h4>
      <div className="flex items-center gap-8">
        <div className="relative w-40 h-40 shrink-0">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            <circle cx="100" cy="100" r={r} fill="none" stroke="#E5E7EB" strokeWidth="20" />
            {segments.map((seg, i) => {
              const dash = (seg.value / 100) * circumference;
              const currentOffset = offset;
              offset += dash;
              return (
                <circle
                  key={seg.label}
                  cx="100"
                  cy="100"
                  r={r}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="20"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={isVisible ? -currentOffset : -circumference}
                  style={{
                    transition: `stroke-dashoffset 1.5s ease-out ${i * 0.2}s`,
                  }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-inter font-bold text-2xl text-primary">72.4%</span>
            <span className="font-inter text-xs text-mediumgray">Positive</span>
          </div>
        </div>
        <div className="space-y-3">
          {segments.map(seg => (
            <div key={seg.label} className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="font-inter text-sm text-mediumgray">{seg.label}</span>
              <span className="font-inter text-sm font-semibold text-primary ml-auto">{seg.value}%</span>
            </div>
          ))}
        </div>
      </div>
      <p className="font-inter text-sm text-mediumgray mt-6">
        Positive sentiment trending upward across all tracked platforms
      </p>
    </div>
  );
}

function EngagementLineChart() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const data = [45, 52, 48, 61, 58, 72, 68];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxVal = 80;
  const width = 400;
  const height = 160;
  const padding = 20;

  const points = data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: height - padding - (val / maxVal) * (height - padding * 2),
  }));

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current && isVisible) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      requestAnimationFrame(() => {
        if (pathRef.current) {
          pathRef.current.style.transition = 'stroke-dashoffset 2s ease-out';
          pathRef.current.style.strokeDashoffset = '0';
        }
      });
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="bg-lightgray border border-bordergray rounded-xl p-8 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h4 className="font-inter font-semibold text-lg text-primary mb-6">Engagement Trends</h4>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map(t => (
          <line
            key={t}
            x1={padding}
            y1={height - padding - t * (height - padding * 2)}
            x2={width - padding}
            y2={height - padding - t * (height - padding * 2)}
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        {/* Area fill */}
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
          fill="url(#areaGrad)"
          opacity={isVisible ? 1 : 0}
          style={{ transition: 'opacity 1s ease-out 0.5s' }}
        />
        {/* Line */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#2563EB"
            opacity={isVisible ? 1 : 0}
            style={{ transition: `opacity 0.3s ease-out ${1 + i * 0.1}s` }}
          />
        ))}
        {/* Labels */}
        {labels.map((label, i) => (
          <text
            key={label}
            x={padding + (i / (labels.length - 1)) * (width - padding * 2)}
            y={height - 2}
            textAnchor="middle"
            className="font-inter text-[10px] fill-mediumgray"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

function DemographicsBarChart() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const data = [
    { label: '18-24', value: 28.5 },
    { label: '25-34', value: 23.8 },
    { label: '35-44', value: 19.6 },
    { label: '45-54', value: 15.2 },
    { label: '55+', value: 12.9 },
  ];

  return (
    <div ref={ref} className="bg-lightgray border border-bordergray rounded-xl p-8 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h4 className="font-inter font-semibold text-lg text-primary mb-6">Audience Demographics</h4>
      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1.5">
              <span className="font-inter text-sm text-mediumgray">{item.label}</span>
              <span className="font-inter text-sm font-semibold text-primary">{item.value}%</span>
            </div>
            <div className="h-2.5 bg-bordergray rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald rounded-full"
                style={{
                  width: isVisible ? `${item.value}%` : '0%',
                  transition: `width 0.8s ease-out ${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformPieChart() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const data = [
    { label: 'X (Twitter)', value: 45.2, color: '#2563EB' },
    { label: 'Facebook', value: 25.6, color: '#10B981' },
    { label: 'Instagram', value: 15.8, color: '#C9A84C' },
    { label: 'YouTube', value: 8.7, color: '#D97706' },
    { label: 'TikTok', value: 4.7, color: '#DC2626' },
  ];
  const r = 60;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div ref={ref} className="bg-lightgray border border-bordergray rounded-xl p-8 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h4 className="font-inter font-semibold text-lg text-primary mb-6">Platform Distribution</h4>
      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 140 140" className="w-full h-full"
            style={{
              transform: isVisible ? 'rotate(0deg)' : 'rotate(-90deg)',
              transition: 'transform 1.5s ease-out',
            }}
          >
            {data.map((seg) => {
              const dash = (seg.value / 100) * circumference;
              const currentOffset = offset;
              offset += dash;
              return (
                <circle
                  key={seg.label}
                  cx="70"
                  cy="70"
                  r={r}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="18"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-currentOffset}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-inter font-bold text-lg text-primary">128K</span>
            <span className="font-inter text-[10px] text-mediumgray">Total</span>
          </div>
        </div>
        <div className="space-y-2">
          {data.map(seg => (
            <div key={seg.label} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="font-inter text-xs text-mediumgray">{seg.label}</span>
              <span className="font-inter text-xs font-semibold text-primary ml-auto">{seg.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
