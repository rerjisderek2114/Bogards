import { Check } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

const benefits = [
  'Sitios rápidos y optimizados',
  'SEO desde el primer día',
  '100% responsive',
  'Seguridad y SSL incluidos',
  'Hosting administrado',
  'Mantenimiento continuo',
  'Integración con WhatsApp',
  'Google Analytics configurado',
  'Enfoque en conversión (CRO)'
];

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-electric/5 blur-[160px] rounded-full" />
      <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan">
            <span className="w-6 h-px bg-cyan" /> Por qué Bogards
          </span>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-tight font-semibold text-white mt-4">
            Todo lo que necesitas, sin subcontratar a nadie más
          </h2>
          <p className="text-haze mt-4 leading-relaxed max-w-md">
            Diseño, desarrollo, hosting, seguridad y automatización viven bajo un mismo techo —
            así tu proyecto avanza sin depender de terceros.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <div className="flex items-center gap-3 card-surface rounded-xl px-4 py-3.5">
                <div className="w-6 h-6 rounded-full bg-brand-gradient/20 border border-electric/30 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-cyan" />
                </div>
                <span className="text-sm text-mist">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
