import { Star } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

const testimonials = [
  {
    quote:
      'Bogards entendió exactamente lo que necesitábamos. En tres meses duplicamos las solicitudes de cotización desde el sitio.',
    name: 'Andrea Fuentes',
    role: 'Directora, Grupo Constructor Norte'
  },
  {
    quote:
      'El proceso fue transparente de principio a fin. El sitio carga rápido, se ve premium y ahora aparecemos primero en Google.',
    name: 'Ricardo Mena',
    role: 'Fundador, Clínica Dental Vitalis'
  },
  {
    quote:
      'La automatización de WhatsApp nos ahorra horas cada semana y las reservaciones ya no se pierden en el chat.',
    name: 'Paola Serrano',
    role: 'Gerente, Sabor de Casa Restaurantes'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-border/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonios"
          title="Empresas que ya crecieron con nosotros"
        />

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="card-surface rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-1 text-cyan">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-mist text-sm leading-relaxed mt-4 flex-1">“{t.quote}”</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/70">
                  <div className="w-9 h-9 rounded-full bg-brand-gradient" />
                  <div>
                    <p className="text-sm text-white font-medium">{t.name}</p>
                    <p className="text-xs text-haze">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
