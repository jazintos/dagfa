import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const count = window.innerWidth > 768 ? 50 : 20;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 2 + Math.random() * 2,
    }));

    const mouse = { x: -1000, y: -1000 };
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouse);

    let running = true;
    const animate = () => {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(201, 168, 76, 0.3)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const ddx = particles[i].x - particles[j].x;
          const ddy = particles[i].y - particles[j].y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.1 * (1 - d / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.15);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', interest: '', message: '' });
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" data-bg="dark" className="relative bg-charcoal py-20 lg:py-32 overflow-hidden">
      <ParticleField />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Contact CTA */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div
            ref={headerRef}
            className={`lg:w-[55%] transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="font-inter text-xs font-medium uppercase tracking-[0.1em] text-gold">
              GET IN TOUCH
            </span>
            <h2
              className="font-inter font-bold text-white mt-4 leading-tight tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Be Part Of The Storytelling Infrastructure
            </h2>
            <p className="font-inter text-white/70 leading-relaxed mt-4">
              DAGFA welcomes researchers, creatives, analysts, strategists, designers, and communicators 
              youth-led to data-driven national engagement and governance storytelling.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="font-inter text-white">info@dagfa.org</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://twitter.com/_dagfa" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-all duration-300">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="https://instagram.com/_dagfa" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-all duration-300">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="https://facebook.com/_dagfa" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-all duration-300">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <span className="font-inter text-white/70 text-sm ml-2">@_dagfa</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-[45%]">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {formState === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-inter font-semibold text-white text-lg">Thank You!</h4>
                  <p className="font-inter text-white/60 mt-2">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-inter text-xs text-white/60 mb-2 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white font-inter text-sm placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/15 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-white/60 mb-2 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white font-inter text-sm placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/15 transition-all duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-white/60 mb-2 uppercase tracking-wide">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={e => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white font-inter text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/15 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-charcoal">Select an area</option>
                      <option value="data" className="bg-charcoal">Data Analysis</option>
                      <option value="research" className="bg-charcoal">Research</option>
                      <option value="creative" className="bg-charcoal">Creative Design</option>
                      <option value="strategy" className="bg-charcoal">Strategy</option>
                      <option value="communications" className="bg-charcoal">Communications</option>
                      <option value="technology" className="bg-charcoal">Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-white/60 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white font-inter text-sm placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/15 transition-all duration-300 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`w-full py-3.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 ${
                      formState === 'submitting'
                        ? 'bg-gold/50 text-charcoal/70 cursor-not-allowed'
                        : 'bg-gold text-charcoal hover:bg-gold-light active:scale-[0.98]'
                    }`}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Join DAGFA'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
