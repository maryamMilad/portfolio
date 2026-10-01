import { personal, skillCategories } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import { softSkills, languages } from '@/data/portfolio';
import { Heart, Globe } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/50 to-ink-950 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical Expertise"
            description="A focused toolkit spanning AI/ML, generative AI, cloud infrastructure, and data engineering."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full group hover:border-accent-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-sage-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-accent-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-ink-800/60 border border-ink-700/50 text-sm text-gray-300 font-mono hover:border-accent-500/40 hover:text-accent-200 hover:bg-accent-500/10 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <Heart size={18} className="text-rose-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-100">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2.5 rounded-xl bg-ink-800/40 border border-ink-700/40 text-center text-xs text-gray-400 hover:text-accent-200 hover:border-accent-500/30 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sage-400/10 flex items-center justify-center">
                  <Globe size={18} className="text-sage-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-100">Languages</h3>
              </div>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="flex-1 px-4 py-3 rounded-xl bg-ink-800/40 border border-ink-700/40 text-center"
                  >
                    <span className="text-gray-200 font-medium">{lang}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Contact: {personal.email} · {personal.phone}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
