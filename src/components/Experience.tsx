import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/50 to-ink-950 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Internship & Professional Timeline"
            description="Hands-on experience across cloud infrastructure, mobile development, and enterprise IT operations."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-sage-400/40 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative pl-14 sm:pl-20 group">
                  <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-xl glass-strong flex items-center justify-center group-hover:border-accent-500/60 group-hover:glow-accent transition-all">
                    <Briefcase size={16} className="text-accent-300" />
                  </div>

                  <div className="glass rounded-2xl p-5 sm:p-6 group-hover:border-accent-500/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-100">
                          {exp.role}
                        </h3>
                        <p className="text-accent-300 font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-800/80 text-gray-400 text-xs font-mono">
                        <Calendar size={12} />
                        {exp.dates}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-400/60 mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
