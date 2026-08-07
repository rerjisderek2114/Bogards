'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

const faqs = [
  {
    q: '¿Cuánto tiempo toma desarrollar mi sitio web?',
    a: 'Un sitio corporativo típico toma entre 3 y 6 semanas, desde el descubrimiento hasta el lanzamiento. Proyectos con ecommerce o integraciones complejas pueden tomar más tiempo, y siempre te damos un cronograma claro antes de iniciar.'
  },
  {
    q: '¿El sitio incluye hosting, dominio y SSL?',
    a: 'Sí. Nos encargamos de la infraestructura completa: hosting administrado, configuración de dominio y certificado SSL, para que no tengas que coordinar con terceros.'
  },
  {
    q: '¿Ofrecen mantenimiento después del lanzamiento?',
    a: 'Sí, contamos con planes de mantenimiento que incluyen backups automáticos, actualizaciones de seguridad y soporte técnico continuo.'
  },
  {
    q: '¿Puedo administrar el contenido yo mismo?',
    a: 'Sí. Todos los sitios incluyen un panel administrativo intuitivo para gestionar blog, servicios, portafolio y testimonios sin depender de un desarrollador.'
  },
  {
    q: '¿Trabajan con empresas fuera de México?',
    a: 'Sí, trabajamos de forma remota con clientes en toda Latinoamérica. Coordinamos reuniones por videollamada según tu zona horaria.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que quieres saber antes de empezar"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="liquid-glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-white text-sm md:text-base font-medium">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-cyan transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-haze leading-relaxed px-6 pb-5">{f.a}</p>
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
