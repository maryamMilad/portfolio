import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-100">
              {personal.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1 font-mono">
              {personal.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/40 transition-all"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-ink-700/60 to-transparent" />

          <p className="text-xs text-gray-600 text-center">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
