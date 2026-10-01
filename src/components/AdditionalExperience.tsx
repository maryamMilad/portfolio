import { Palette, MapPin, MessageCircle } from 'lucide-react';
import { additionalExperience } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function AdditionalExperience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Beyond Technology"
            title="Beyond Technology"
            description="Experiences that shaped communication, adaptability, and cross-cultural skills."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative glass rounded-3xl p-8 sm:p-10 overflow-hidden group hover:border-accent-500/20 transition-all">
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-sage-400/5 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/15 to-amber-500/10 flex items-center justify-center shrink-0">
                <Palette size={24} className="text-rose-300" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {additionalExperience.role}
                      <span className="text-gray-500 font-normal"> · {additionalExperience.company}</span>
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-800/80 text-gray-400 text-xs font-mono">
                    <MapPin size={12} />
                    {additionalExperience.dates}
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {additionalExperience.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {additionalExperience.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-800/40 border border-ink-700/40"
                    >
                      <MessageCircle size={12} className="text-sage-300 shrink-0" />
                      <span className="text-xs text-gray-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
