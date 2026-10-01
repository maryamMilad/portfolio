import { Award, BadgeCheck, Building2 } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/50 to-ink-950 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Certifications & Training"
            description="Continuous learning across AI foundations, generative AI, and machine learning engineering."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group glass rounded-2xl p-6 h-full hover:border-accent-500/40 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-sage-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award size={20} className="text-accent-300" />
                  </div>
                  {cert.level && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sage-400/10 border border-sage-400/20 text-sage-300 text-xs font-medium">
                      <BadgeCheck size={12} />
                      {cert.level}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-gray-100 mb-1 group-hover:text-accent-200 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
                  <Building2 size={13} />
                  {cert.issuer}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded text-xs text-gray-400 bg-ink-800/60 border border-ink-700/40 font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
