import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, MessageSquareX, TrendingDown, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: Users,
    title: 'Mobilisation Without Insight',
    description: 'Traditional efforts rally crowds without understanding underlying sentiments. Without data, campaigns operate on assumptions rather than evidence.',
  },
  {
    icon: MessageSquareX,
    title: 'Reactive, Fragmented Decision-Making',
    description: 'Campaigns often react to rumours or dominant voices rather than proactive, data-informed strategies. Decisions are made in silos without unified intelligence.',
  },
  {
    icon: TrendingDown,
    title: 'No Consistent Sentiment Tracking',
    description: 'Without continuous measurement of public opinion, campaigns risk being misaligned with voters\' concerns. Sentiment shifts go unnoticed until it\'s too late.',
  },
];

const solutions = [
  'Real-time sentiment monitoring across all major social platforms',
  'AI-powered demographic analysis and engagement optimization',
  'Coordinated national strategy with regional intelligence hubs',
];

export default function WhyDAGFA() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15);

  return (
    <section id="why-dagfa" data-bg="light" className="bg-lightgray py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-mediumgray">
            WHY DAGFA
          </span>
          <h2
            className="font-inter font-bold text-primary mt-4 leading-tight tracking-[-0.02em] max-w-[700px] mx-auto"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            The Cost Of Operating Without Intelligence
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Problems */}
          <div className="lg:w-1/2 space-y-6">
            {problems.map((problem, i) => (
              <ProblemCard key={problem.title} {...problem} delay={i * 100} />
            ))}
          </div>

          {/* Right Column - Solution */}
          <div className="lg:w-1/2">
            <SolutionCard />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#analytics"
            onClick={(e) => { e.preventDefault(); document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center px-8 py-3.5 bg-gold text-charcoal font-inter font-semibold text-sm rounded-md hover:bg-gold-light transition-colors duration-300"
          >
            See How We Transform Data Into Direction
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon: Icon, title, description, delay }: {
  icon: typeof Users; title: string; description: string; delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`bg-white border-l-4 border-danger rounded-r-lg p-8 shadow-sm transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-8 h-8 text-danger mb-4" strokeWidth={1.5} />
      <h3 className="font-inter font-semibold text-lg text-primary mb-2">
        {title}
      </h3>
      <p className="font-inter text-mediumgray leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function SolutionCard() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`bg-primary rounded-2xl p-8 lg:p-12 h-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-gold">
        THE DAGFA DIFFERENCE
      </span>
      <h3
        className="font-inter font-bold text-white mt-4 leading-tight"
        style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
      >
        Insight Meets Impact
      </h3>
      <p className="font-inter text-white/70 leading-relaxed mt-4">
        DAGFA fills these gaps by integrating data science, digital strategy, and ground-level political 
        intelligence to ensure campaigns operate strategically and evidence-based.
      </p>

      <div className="border-t border-white/20 my-8" />

      <div className="space-y-5">
        {solutions.map((solution, i) => (
          <div
            key={i}
            className="flex items-start gap-4"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" strokeWidth={2} />
            <span className="font-inter text-white/80 text-sm leading-relaxed">
              {solution}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
