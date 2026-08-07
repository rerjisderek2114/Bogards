import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center'
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan">
        <span className="w-6 h-px bg-cyan" /> {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-[2.6rem] leading-tight font-semibold text-white mt-4">
        {title}
      </h2>
      {description && <p className="text-haze mt-4 leading-relaxed">{description}</p>}
    </Reveal>
  );
}
