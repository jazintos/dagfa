import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mic, Share2, Box, FileText } from 'lucide-react';

const initiatives = [
  {
    icon: Mic,
    title: 'Strategic Press Engagement',
    description: 'Organized press conferences focused on communicating the vision, priorities, and policy direction of the Tinubu presidential agenda. Coordinated media briefings, talking points, and narrative management.',
    stat: 'Official Unveiling — Nov 18, 2022',
  },
  {
    icon: Share2,
    title: 'National Social Media Campaign',
    description: 'Launched coordinated digital campaigns highlighting the achievements and governance record of Bola Ahmed Tinubu across multiple sectors including transportation, sports, housing, and infrastructure.',
    stat: 'Multi-Sector Achievement Showcase',
  },
  {
    icon: Box,
    title: 'Futuristic 3D Policy Visualization',
    description: 'Produced a futuristic 3D animation project visualizing strategic national transformation goals and governance possibilities under a Tinubu administration.',
    stat: 'Nigeria 2033 Vision Project',
  },
  {
    icon: FileText,
    title: 'Governance Storytelling',
    description: 'DAGFA content and publications are developed using verified institutional data, publicly available records, policy documents, and independent analytical sources.',
    stat: 'Evidence-Based Content Creation',
  },
];

export default function Initiatives() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15);

  return (
    <section id="initiatives" data-bg="dark" className="bg-primary py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-gold">
            INITIATIVES
          </span>
          <h2
            className="font-inter font-bold text-white mt-4 leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Strategic Communication & Engagement
          </h2>
        </div>

        {/* Initiative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((initiative, i) => (
            <InitiativeCard key={initiative.title} {...initiative} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InitiativeCard({ icon: Icon, title, description, stat, delay }: {
  icon: typeof Mic; title: string; description: string; stat: string; delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`group bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/[0.08] hover:border-gold/50 hover:-translate-y-1 transition-all duration-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
      <h3 className="font-inter font-semibold text-xl text-white mt-5">
        {title}
      </h3>
      <p className="font-inter text-white/70 leading-relaxed mt-3 text-sm">
        {description}
      </p>
      <span className="inline-block mt-5 font-inter text-xs font-medium text-gold tracking-wide uppercase">
        {stat}
      </span>
    </div>
  );
}
