interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} mb-14`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-xs font-mono tracking-wider uppercase mb-4 ${
          center ? '' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-slow" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-soft mb-3">
        {title}
      </h2>
      {description && (
        <p className={`text-gray-400 text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
