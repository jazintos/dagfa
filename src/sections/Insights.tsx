import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { insights, categories } from '../data/insights';
import { ArrowRight } from 'lucide-react';

export default function Insights() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? insights
    : insights.filter(i => i.category === activeCategory);

  return (
    <section id="insights" data-bg="light" className="bg-lightgray py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-8 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-mediumgray">
            INSIGHTS
          </span>
          <h2
            className="font-inter font-bold text-primary mt-4 leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Intelligence Briefing Room
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-inter text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-mediumgray hover:bg-primary/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((insight, i) => (
            <InsightCard key={insight.id} insight={insight} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ insight, delay }: { insight: typeof insights[0]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white font-inter text-[11px] font-medium rounded">
          {insight.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-inter text-xs text-mediumgray">{insight.date}</span>
          <span className="w-1 h-1 rounded-full bg-bordergray" />
          <span className="font-inter text-xs text-mediumgray">{insight.readTime}</span>
        </div>
        <h4 className="font-inter font-semibold text-base text-primary leading-snug line-clamp-2 group-hover:text-emerald-dark transition-colors duration-300">
          {insight.title}
        </h4>
        <p className="font-inter text-sm text-mediumgray leading-relaxed mt-2 line-clamp-3">
          {insight.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-4 font-inter text-xs font-medium text-emerald hover:underline cursor-pointer">
          Read Analysis
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
