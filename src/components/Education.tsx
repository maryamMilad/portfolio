import { GraduationCap, Award, Music } from 'lucide-react';
import { education } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic Background"
            description="A Computer Science foundation with a focus on AI and machine learning."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative glass rounded-3xl p-8 sm:p-10 overflow-hidden group hover:border-accent-500/30 transition-all">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent-500/5 blur-3xl group-hover:bg-accent-500/10 transition-all" />

            <div className="relative flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-sage-400/10 flex items-center justify-center shrink-0">
                <GraduationCap size={28} className="text-accent-300" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {education.institution}
                    </h3>
                    <p className="text-accent-300 font-medium">
                      {education.degree}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-800/80 text-gray-400 text-xs font-mono">
                    {education.dates}
                  </span>
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-accent-500/10 to-sage-400/5 border border-accent-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-accent-400" />
                    <span className="text-sm font-medium text-accent-300">
                      Key Project: {education.keyProject}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {education.keyProjectDesc}
                  </p>

                  <div className="flex items-end gap-1 mt-4 h-10">
                    {[30, 50, 70, 45, 65, 85, 55, 75, 40, 60, 50, 35].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-accent-600/40 to-sage-300/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                    <Music size={16} className="text-accent-400/60 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
