import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'LEADERSHIP', href: '#leadership' },
  { label: 'WHY DAGFA', href: '#why-dagfa' },
  { label: 'ANALYTICS', href: '#analytics' },
  { label: 'INITIATIVES', href: '#initiatives' },
  { label: 'INSIGHTS', href: '#insights' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = navLinks.map(link => link.href.slice(1));
      let current = 'home';
      let isOnDark = true;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = section;
            const bg = el.getAttribute('data-bg');
            isOnDark = bg === 'dark';
            break;
          }
        }
      }

      setActiveSection(current);
      setIsDark(isOnDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  const textColor = scrolled
    ? 'text-white'
    : isDark
      ? 'text-white'
      : 'text-charcoal';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-400 ${
          scrolled
            ? 'bg-charcoal/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{ transitionTimingFunction: 'ease' }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/assets/dagfa-logo.jpg"
              alt="DAGFA"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className={`font-inter font-bold text-sm tracking-[0.08em] ${textColor} hidden sm:block`}>
              DAGFA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-3 py-2 font-inter font-medium text-[13px] tracking-[0.08em] transition-colors duration-300 ${
                    isActive
                      ? 'text-gold'
                      : `${textColor} hover:text-gold`
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-charcoal transition-transform duration-400 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`font-inter font-semibold text-2xl tracking-[0.04em] transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-white/70 hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
