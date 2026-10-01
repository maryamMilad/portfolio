import { CheckCircle2, ChevronRight } from 'lucide-react';
import { aboutPoints, journey, personal } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About Me"
            title="Computer Science Graduate & AI Enthusiast"
            description={personal.summary}
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal className="space-y-3" delay={100}>
            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-accent-400 to-sage-300 rounded-full" />
              Core Competencies
            </h3>
            {aboutPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 group"
              >
                <CheckCircle2
                  size={18}
                  className="text-accent-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {point}
                </span>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-sage-300 to-accent-400 rounded-full" />
              Development Journey
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-sage-400/30 to-transparent" />
              <div className="space-y-6">
                {journey.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative flex items-center gap-4 group">
                  <div className="relative z-10 w-12 h-12 rounded-xl glass-strong flex items-center justify-center group-hover:border-accent-500/60 group-hover:glow-accent transition-all">
                    <Icon size={20} className="text-accent-300" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-300 font-medium group-hover:text-accent-200 transition-colors">
                      {step.label}
                    </span>
                  </div>
                  {i < journey.length - 1 && (
                    <ChevronRight size={16} className="text-ink-600 hidden sm:block" />
                  )}
                </div>
              );
            })}
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl glass">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-accent-300 font-medium">My approach:</span> bridging
                the gap between AI research and production — from model training and
                fine-tuning to deploying intelligent solutions on cloud infrastructure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
