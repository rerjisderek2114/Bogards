import type { Metadata } from 'next';
import { TrendingUp, Users, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CTAFinal from '@/components/sections/CTAFinal';

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description: 'Resultados medibles de empresas que trabajaron con Bogards Marketing Studio.'
};

const cases = [
  {
    name: 'Clínica Dental Vitalis',
    industry: 'Salud',
    challenge: 'Dependían por completo de referidos y no tenían forma de agendar citas en línea.',
    solution: 'Sitio corporativo con sistema de citas integrado, SEO local y campaña de Google Business.',
    stats: [
      { icon: TrendingUp, value: '+64%', label: 'Citas agendadas en línea' },
      { icon: Users, value: '+120', label: 'Nuevos pacientes / mes' },
      { icon: Clock, value: '2.1s', label: 'Tiempo de carga' }
    ]
  },
  {
    name: 'Grupo Constructor Norte',
    industry: 'Construcción',
    challenge: 'Un sitio desactualizado que no reflejaba la escala real de sus proyectos.',
    solution: 'Rediseño completo con portafolio de proyectos, formularios inteligentes y CRM integrado.',
    stats: [
      { icon: TrendingUp, value: '+3x', label: 'Leads calificados' },
      { icon: Users, value: '+38%', label: 'Tiempo en el sitio' },
      { icon: Clock, value: '1.8s', label: 'Tiempo de carga' }
    ]
  },
  {
    name: 'Sabor de Casa Restaurantes',
    industry: 'Restaurantes',
    challenge: 'Las reservaciones se perdían entre mensajes de WhatsApp sin ningún seguimiento.',
    solution: 'Automatización de WhatsApp Business con confirmaciones automáticas y menú digital.',
    stats: [
      { icon: TrendingUp, value: '+41%', label: 'Reservaciones confirmadas' },
      { icon: Users, value: '+27%', label: 'Pedidos en línea' },
      { icon: Clock, value: '1.6s', label: 'Tiempo de carga' }
    ]
  }
];

export default function CasosDeExito() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan justify-center">
              <span className="w-6 h-px bg-cyan" /> Casos de éxito
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mt-5 leading-tight">
              Resultados que se pueden <span className="text-gradient-brand">medir</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x space-y-6">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="card-surface rounded-3xl p-8 md:p-12 grid lg:grid-cols-[1.1fr_1fr] gap-10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-cyan">{c.industry}</span>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mt-3">
                    {c.name}
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-haze mb-1.5">Reto</p>
                      <p className="text-sm text-mist leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-haze mb-1.5">Solución</p>
                      <p className="text-sm text-mist leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 content-center">
                  {c.stats.map((s) => (
                    <div key={s.label} className="bg-surface-2 rounded-2xl p-5 flex lg:items-center gap-3 flex-col lg:flex-row text-center lg:text-left">
                      <div className="w-10 h-10 rounded-xl bg-brand-gradient/15 border border-electric/25 flex items-center justify-center mx-auto lg:mx-0">
                        <s.icon size={17} className="text-electric-light" />
                      </div>
                      <div>
                        <p className="font-display text-xl font-semibold text-white">{s.value}</p>
                        <p className="text-xs text-haze mt-0.5">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
