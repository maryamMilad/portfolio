import { Github, ArrowUpRight, Award, Music, MessageSquare, Activity, Terminal } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

function ProjectVisual({ type }: { type: Project['visual'] }) {
  const icons = {
    music: Music,
    chatbot: MessageSquare,
    parkinsons: Activity,
    linux: Terminal,
  };
  const Icon = icons[type];

  return (
    <div className="relative h-40 sm:h-44 overflow-hidden">
      <div
        className={`absolute inset-0 ${
          type === 'music'
            ? 'bg-gradient-to-br from-accent-600/20 via-accent-500/10 to-sage-400/10'
            : type === 'chatbot'
            ? 'bg-gradient-to-br from-sage-600/20 via-sage-400/10 to-accent-500/10'
            : type === 'parkinsons'
            ? 'bg-gradient-to-br from-accent-500/20 via-accent-600/10 to-sage-600/10'
            : 'bg-gradient-to-br from-sage-400/15 via-accent-600/10 to-accent-500/10'
        }`}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {type === 'music' && (
          <div className="flex items-end gap-1.5 h-20">
            {[40, 60, 80, 55, 70, 90, 50, 75, 45, 65, 85, 35].map((h, i) => (
              <div
                key={i}
                className="w-1.5 rounded-t bg-gradient-to-t from-accent-500 to-sage-300 animate-pulse-slow"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.6 + (h / 100) * 0.4,
                }}
              />
            ))}
          </div>
        )}
        {type === 'chatbot' && (
          <div className="flex flex-col gap-2 w-3/4">
            <div className="self-start max-w-[70%] px-3 py-2 rounded-2xl rounded-bl-sm bg-ink-800/80 text-xs text-gray-300 animate-fade-in-up">
              What are the symptoms of dehydration?
            </div>
            <div className="self-end max-w-[80%] px-3 py-2 rounded-2xl rounded-br-sm bg-accent-500/30 text-xs text-accent-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Common signs include thirst, dry mouth, headache, and fatigue...
            </div>
          </div>
        )}
        {type === 'parkinsons' && (
          <div className="flex items-center gap-3">
            <div className="text-5xl font-mono text-accent-400/30 font-bold">ML</div>
            <ArrowUpRight size={32} className="text-sage-300/40" />
            <div className="flex flex-col gap-1">
              <div className="w-24 h-2 rounded-full bg-gradient-to-r from-accent-500 to-sage-300" />
              <div className="w-20 h-2 rounded-full bg-accent-500/50" />
              <div className="w-16 h-2 rounded-full bg-sage-400/40" />
            </div>
          </div>
        )}
        {type === 'linux' && (
          <div className="w-3/4 font-mono text-xs text-left space-y-1">
            <div className="text-accent-400">$ <span className="text-gray-400">./deploy.sh</span></div>
            <div className="text-gray-500">Configuring environment...</div>
            <div className="text-gray-500">Starting services... <span className="text-accent-400">OK</span></div>
            <div className="text-accent-300">System ready <span className="animate-pulse">_</span></div>
          </div>
        )}
      </div>

      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center">
        <Icon size={18} className="text-accent-300" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="AI & Machine Learning Projects"
            description="Hands-on work spanning deep learning, NLP, predictive modeling, and cloud-supporting automation."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <article className="group glass rounded-2xl overflow-hidden hover:border-accent-500/40 transition-all duration-300 hover:-translate-y-1 hover:glow-accent h-full flex flex-col">
                <ProjectVisual type={project.visual} />

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-accent-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-4 w-fit">
                      <Award size={13} />
                      {project.achievement}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-ink-800/80 text-gray-400 text-xs font-mono border border-ink-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-ink-700/40">
                    <a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass text-gray-300 text-sm hover:text-accent-300 hover:border-accent-500/40 transition-all"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm hover:bg-accent-500/20 transition-all"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
