import { ArrowRight, Github, Linkedin, Mail, MapPin, FolderGit2 } from 'lucide-react';
import { personal } from '@/data/portfolio';
import ParticleNetwork from './ParticleNetwork';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12"
    >
      <ParticleNetwork className="opacity-40" density={60} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/50 to-ink-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              {personal.availability}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
              <span className="block text-gray-100">Maryam</span>
              <span className="block text-gradient">Milad Wahib</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-400 mb-4 font-mono">
              {personal.tagline}
            </p>

            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personal.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium hover:from-accent-400 hover:to-accent-500 transition-all hover:glow-accent w-full sm:w-auto justify-center"
              >
                <FolderGit2 size={18} />
                View My Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-gray-200 font-medium hover:border-accent-500/50 hover:text-accent-300 transition-all w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                Let's Connect
              </button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/50 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/50 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/50 transition-all"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
              <div className="flex items-center gap-1.5 text-sm text-gray-500 ml-2">
                <MapPin size={14} />
                {personal.location}
              </div>
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] animate-fade-in hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-accent-500/10 to-sage-400/5 blur-3xl" />
            </div>
            <HeroVisual />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce-slow">
              <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-accent-400/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
