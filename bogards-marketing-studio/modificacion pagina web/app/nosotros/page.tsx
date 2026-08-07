import type { Metadata } from 'next';
import { Target, Lightbulb, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import PixelTrail from '@/components/PixelTrail';
import CTAFinal from '@/components/sections/CTAFinal';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce al equipo y la filosofía detrás de Bogards Marketing Studio.'
};

const values = [
  { icon: Target, name: 'Estrategia', desc: 'Cada decisión de diseño responde a un objetivo de negocio.' },
  { icon: Lightbulb, name: 'Creatividad', desc: 'Soluciones distintas, nunca plantillas genéricas.' },
  { icon: Cpu, name: 'Tecnología', desc: 'Stack moderno para sitios rápidos y escalables.' },
  { icon: ShieldCheck, name: 'Confianza', desc: 'Comunicación transparente en cada etapa del proyecto.' },
  { icon: TrendingUp, name: 'Resultados', desc: 'Medimos el éxito en leads, ventas y crecimiento real.' }
];

export default function Nosotros() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan">
              <span className="w-6 h-px bg-cyan" /> Nosotros
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mt-5 leading-tight">
              Un estudio digital hecho para{' '}
              <span className="text-gradient-brand">empresas con ambición</span>
            </h1>
            <p className="text-haze text-lg mt-6 leading-relaxed">
              Bogards Marketing Studio nace para cerrar la brecha entre agencias que solo
              diseñan y desarrolladores que solo programan. Somos un equipo completo —
              estrategia, diseño, desarrollo y marketing — trabajando bajo un mismo objetivo:
              que tu sitio web venda.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-y border-border/70 bg-surface/30">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan">
              <span className="w-6 h-px bg-cyan" /> Propuesta de valor
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mt-4 leading-snug">
              Transformamos la presencia digital de empresas mediante soluciones web
              estratégicas que generan clientes, automatizan procesos y aumentan las ventas.
            </h2>
            <PixelTrail className="mt-8" count={5} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="liquid-glass rounded-2xl p-8">
              <p className="text-white font-medium mb-4">Tono de comunicación</p>
              <p className="text-sm text-haze leading-relaxed">
                Profesional, cercano, estratégico, innovador y orientado a resultados. Hablamos
                el idioma de tu negocio, no el de la tecnología por sí misma.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Nuestros valores" title="Lo que guía cada proyecto que tomamos" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.07}>
                <div className="liquid-glass rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand-gradient/15 border border-electric/25 flex items-center justify-center">
                    <v.icon size={19} className="text-electric-light" />
                  </div>
                  <p className="text-white font-medium mt-5">{v.name}</p>
                  <p className="text-sm text-haze mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
