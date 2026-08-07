import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

const projects = [
  {
    name: 'Clínica Dental Vitalis',
    industry: 'Salud',
    result: '+64% de citas agendadas en línea',
    gradient: 'from-electric to-cyan'
  },
  {
    name: 'Grupo Constructor Norte',
    industry: 'Construcción',
    result: '+3x leads calificados en 90 días',
    gradient: 'from-cyan to-electric-light'
  },
  {
    name: 'Sabor de Casa Restaurantes',
    industry: 'Restaurantes',
    result: '+41% de reservaciones vía WhatsApp',
    gradient: 'from-electric-light to-electric'
  }
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Casos de éxito"
            title="Resultados reales para empresas reales"
          />
          <Reveal delay={0.1}>
            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 text-sm text-white border border-border rounded-full px-5 py-2.5 hover:border-electric transition-colors shrink-0"
            >
              Ver portafolio completo <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <Link href="/portafolio" className="group block liquid-glass rounded-2xl overflow-hidden hover:border-electric/50 transition-colors">
                <div className={`h-44 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute top-4 left-4 text-[11px] uppercase tracking-widest text-white/80 font-medium">
                    {p.industry}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="absolute top-4 right-4 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <p className="text-white font-medium">{p.name}</p>
                  <p className="text-sm text-cyan mt-2">{p.result}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
