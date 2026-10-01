import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Sparkles } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-ink-700/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleClick('#home')}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-sage-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-gray-100 hidden sm:block text-sm tracking-wide">
              Maryam<span className="text-accent-400">.</span>Wahib
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-300 bg-accent-500/10'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-ink-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-300 hover:bg-ink-800/50 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-300 hover:bg-ink-800/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <button
              onClick={() => handleClick('#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-medium hover:from-accent-400 hover:to-accent-500 transition-all hover:glow-accent"
            >
              <Sparkles size={15} />
              Let's Connect
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:bg-ink-800/50 transition-all"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-1 animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-300 bg-accent-500/10'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-ink-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-3 px-4 pt-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-300 text-sm"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-300 text-sm"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <button
              onClick={() => handleClick('#contact')}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-medium"
            >
              <Sparkles size={15} />
              Let's Connect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
