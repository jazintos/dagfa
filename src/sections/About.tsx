import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Eye, BarChart3, Lightbulb, Zap } from 'lucide-react';

const processSteps = [
  {
    icon: Eye,
    title: 'MONITOR',
    description: 'Continuous data collection from social platforms, grassroots networks, and media sources',
  },
  {
    icon: BarChart3,
    title: 'ANALYSE',
    description: 'Deep analysis using AI-driven sentiment tracking, demographic breakdowns, and trend identification',
  },
  {
    icon: Lightbulb,
    title: 'RECOMMEND',
    description: 'Actionable strategic recommendations based on verified data and evidence',
  },
  {
    icon: Zap,
    title: 'ACT',
    description: 'Execute coordinated engagement, content deployment, and impact measurement',
  },
];

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: identityRef, isVisible: identityVisible } = useScrollAnimation(0.2);
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.2);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" data-bg="light" className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div
            ref={headerRef}
            className={`lg:w-[45%] transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-mediumgray">
              ABOUT DAGFA
            </span>
            <h2
              className="font-inter font-bold text-primary mt-4 leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Intelligence-Driven Political Engagement
            </h2>
            <div className="w-0.5 h-16 bg-gold mt-6" />
          </div>

          {/* Right Column */}
          <div className="lg:w-[55%] space-y-12">
            {/* Identity Block */}
            <div
              ref={identityRef}
              className={`transition-all duration-700 delay-100 ${
                identityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="font-inter font-semibold text-xl lg:text-2xl text-primary">
                Who We Are
              </h3>
              <p className="font-inter text-mediumgray leading-relaxed mt-4">
                DAGFA (Data Analytics Group for Asiwaju) is a youth-led political intelligence and engagement 
                support unit built to power smarter, more effective campaigns. We operate at the intersection of 
                data science, digital strategy, and grassroots intelligence.
              </p>
            </div>

            {/* Mission Block */}
            <div
              ref={missionRef}
              className={`transition-all duration-700 delay-200 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="font-inter font-semibold text-xl lg:text-2xl text-primary">
                Our Mission
              </h3>
              <p className="font-inter text-mediumgray leading-relaxed mt-4">
                Support the reelection effort of President Bola Ahmed Tinubu by providing structured insights, 
                continuous analysis, and targeted recommendations to improve the quality of campaign engagement. 
                We provide evidence-based intelligence instead of assumptions.
              </p>
            </div>

            {/* Process Flow */}
            <div
              ref={processRef}
              className={`transition-all duration-700 delay-300 ${
                processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="font-inter font-semibold text-xl lg:text-2xl text-primary mb-6">
                Our Methodology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, i) => (
                  <div
                    key={step.title}
                    className="bg-lightgray border border-bordergray rounded-lg p-6 relative group hover:-translate-y-1 hover:shadow-lg transition-all duration-400"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <step.icon className="w-8 h-8 text-emerald mb-4" strokeWidth={1.5} />
                    <h4 className="font-inter font-semibold text-sm text-primary tracking-wide mb-2">
                      {step.title}
                    </h4>
                    <p className="font-inter text-sm text-mediumgray leading-relaxed">
                      {step.description}
                    </p>
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 w-4 h-0.5 bg-emerald" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
