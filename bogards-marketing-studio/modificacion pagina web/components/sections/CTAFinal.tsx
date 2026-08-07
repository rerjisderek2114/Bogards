import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';

export default function CTAFinal() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden liquid-glass p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-brand-gradient opacity-[0.12]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-electric/20 blur-[100px] rounded-full" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-white max-w-2xl mx-auto leading-tight">
                ¿Listo para hacer crecer tu negocio?
              </h2>
              <p className="text-haze mt-5 max-w-md mx-auto">
                Agenda una llamada de 30 minutos y te mostramos exactamente cómo podemos ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-medium px-7 py-3.5 rounded-full hover:shadow-glow transition-shadow w-full sm:w-auto justify-center"
                >
                  Agenda una llamada
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contacto#cotizar"
                  className="inline-flex items-center gap-2 border border-border text-mist text-sm font-medium px-7 py-3.5 rounded-full hover:border-electric hover:text-white transition-colors w-full sm:w-auto justify-center"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
