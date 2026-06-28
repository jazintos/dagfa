import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { leaders } from '../data/leadership';

export default function Leadership() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15);
  const patron = leaders.find(l => l.category === 'patron');
  const otherLeaders = leaders.filter(l => l.category !== 'patron');

  return (
    <section id="leadership" data-bg="dark" className="bg-charcoal py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-gold">
            LEADERSHIP
          </span>
          <h2
            className="font-inter font-bold text-white mt-4 leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            The Minds Behind The Movement
          </h2>
          <p className="font-inter text-white/70 mt-4 max-w-[600px] leading-relaxed">
            A team of strategists, technologists, and coordinators driving data-informed political 
            engagement across Nigeria.
          </p>
        </div>

        {/* Patron Featured Card */}
        {patron && <PatronCard patron={patron} />}

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherLeaders.map((leader, i) => (
            <LeaderCard key={leader.id} leader={leader} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PatronCard({ patron }: { patron: typeof leaders[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`mb-12 rounded-2xl border border-gold/30 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, transparent 60%)',
      }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[300px] shrink-0">
          <img
            src={patron.image}
            alt={patron.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-gold mb-3">
            {patron.role}
          </span>
          <h3 className="font-inter font-bold text-white text-2xl lg:text-3xl tracking-tight">
            {patron.name}
          </h3>
          <p className="font-inter text-white/60 leading-relaxed mt-4">
            {patron.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
              DG/CEO NIMC
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
              Technology Leader
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
              Public Sector
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderCard({ leader, delay }: { leader: typeof leaders[0]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-gold/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h4 className="font-inter font-semibold text-white text-base">
          {leader.name}
        </h4>
        <p className="font-inter text-xs font-medium text-gold uppercase tracking-[0.05em] mt-1">
          {leader.role}
        </p>
        <p className="font-inter text-sm text-white/50 leading-relaxed mt-3 line-clamp-3">
          {leader.description}
        </p>
      </div>
    </div>
  );
}
