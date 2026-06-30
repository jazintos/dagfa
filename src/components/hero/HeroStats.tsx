const stats = [
    ["15M+", "Data Points"],
    ["36", "States"],
    ["500+", "Reports"],
    ["98%", "Confidence"],
  ];
  
  export default function HeroStats() {
    return (
      <section className="border-t border-white/10 mt-24">
  
        <div className="grid md:grid-cols-4">
  
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="py-8 border-r border-white/10 last:border-none text-center"
            >
              <h3 className="text-5xl font-bold text-yellow-500">
                {value}
              </h3>
  
              <p className="uppercase tracking-[0.3em] text-xs text-white/50 mt-3">
                {label}
              </p>
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }