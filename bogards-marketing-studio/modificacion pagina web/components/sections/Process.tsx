import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

const steps = [
  { n: '01', name: 'Descubrimiento', desc: 'Analizamos tu negocio, tu mercado y a tu competencia.' },
  { n: '02', name: 'Estrategia', desc: 'Definimos objetivos, arquitectura y ruta de conversión.' },
  { n: '03', name: 'Diseño', desc: 'Sistema visual a la medida de tu marca, no una plantilla.' },
  { n: '04', name: 'Desarrollo', desc: 'Construcción técnica optimizada en velocidad y SEO.' },
  { n: '05', name: 'Lanzamiento', desc: 'Publicación, pruebas y validación en producción.' },
  { n: '06', name: 'Optimización', desc: 'Medimos, iteramos y mejoramos la conversión continuamente.' }
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-border/70 relative overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="Proceso"
          title="Un método claro, de la idea al resultado"
          description="Cada proyecto sigue el mismo proceso probado — así siempre sabes en qué etapa estás y qué sigue."
        />

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative">
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                  <div className="w-16 h-16 shrink-0 rounded-2xl liquid-glass flex items-center justify-center font-display text-lg text-gradient-brand font-semibold relative z-10">
                    {s.n}
                  </div>
                  <div className="lg:mt-5">
                    <p className="text-white font-medium">{s.name}</p>
                    <p className="text-sm text-haze mt-1.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
