import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle, Calendar } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Solicita una cotización o agenda una reunión con Bogards Marketing Studio.'
};

const channels = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Respuesta en minutos, en horario de oficina.',
    action: 'Escribir por WhatsApp',
    href: 'https://wa.me/5215500000000?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Bogards'
  },
  {
    icon: Calendar,
    title: 'Agenda una reunión',
    desc: 'Videollamada de 30 minutos con nuestro equipo.',
    action: 'Ver disponibilidad',
    href: 'https://wa.me/5215500000000?text=Quiero%20agendar%20una%20reuni%C3%B3n'
  },
  {
    icon: Mail,
    title: 'Correo',
    desc: 'Para propuestas detalladas y documentación.',
    action: 'hola@bogards.studio',
    href: 'mailto:hola@bogards.studio'
  }
];

export default function Contacto() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan justify-center">
              <span className="w-6 h-px bg-cyan" /> Contacto
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mt-5 leading-tight">
              Hablemos de tu <span className="text-gradient-brand">próximo proyecto</span>
            </h1>
            <p className="text-haze text-lg mt-6 leading-relaxed">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas hábiles.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="cotizar" className="pb-24 scroll-mt-24">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <Reveal className="space-y-4">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 liquid-glass rounded-2xl p-6 hover:border-electric/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gradient/15 border border-electric/25 flex items-center justify-center shrink-0">
                  <c.icon size={19} className="text-electric-light" />
                </div>
                <div>
                  <p className="text-white font-medium">{c.title}</p>
                  <p className="text-sm text-haze mt-1">{c.desc}</p>
                  <p className="text-sm text-cyan mt-2 group-hover:underline">{c.action}</p>
                </div>
              </a>
            ))}

            <div className="liquid-glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={17} className="text-electric-light" />
                <p className="text-white font-medium text-sm">Ubicación</p>
              </div>
              <p className="text-sm text-haze">Ciudad de México, México — Atendemos clientes en toda Latinoamérica de forma remota.</p>
              <div className="mt-4 h-40 rounded-xl bg-surface-2 border border-border flex items-center justify-center">
                <span className="text-xs text-haze/70">Mapa interactivo</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="liquid-glass rounded-3xl p-7 md:p-9">
              <p className="text-white font-medium text-lg mb-1">Solicita tu cotización</p>
              <p className="text-sm text-haze mb-7">Completa el formulario y un especialista te contactará.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
