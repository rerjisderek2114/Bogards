import { Globe, ShoppingCart, TrendingUp, MapPin, Settings, CreditCard, Cloud, MessageSquare } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { icon: Globe, name: 'Desarrollo Web', desc: 'Sitios corporativos y landing pages de alto rendimiento.', href: '/servicios#desarrollo-web' },
  { icon: ShoppingCart, name: 'Ecommerce', desc: 'Tiendas en línea diseñadas para vender, no solo mostrar.', href: '/servicios#ecommerce' },
  { icon: TrendingUp, name: 'SEO & CRO', desc: 'Más tráfico calificado y más conversión por visita.', href: '/servicios#seo' },
  { icon: MapPin, name: 'Google Business', desc: 'Presencia local optimizada para aparecer primero.', href: '/servicios#google-business' },
  { icon: Settings, name: 'CRM & Automatización', desc: 'Procesos comerciales sin fricción ni tareas manuales.', href: '/servicios#automatizacion' },
  { icon: CreditCard, name: 'Tarjetas Digitales', desc: 'Tu presencia profesional completa en un QR.', href: '/servicios#tarjetas-digitales' },
  { icon: Cloud, name: 'Hosting & Infraestructura', desc: 'Dominio, SSL y hosting administrados por nosotros.', href: '/servicios#hosting' },
  { icon: MessageSquare, name: 'WhatsApp & Chatbots IA', desc: 'Atención inmediata que convierte conversaciones en ventas.', href: '/servicios#automatizacion' }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu marca necesita para crecer en línea"
          description="Un solo proveedor para diseño, desarrollo, posicionamiento y automatización — sin fricciones entre equipos."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.06}>
              <Link
                href={s.href}
                className="group block h-full card-surface rounded-2xl p-6 hover:border-electric/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gradient/15 border border-electric/25 flex items-center justify-center group-hover:bg-brand-gradient group-hover:border-transparent transition-colors">
                  <s.icon size={19} className="text-electric-light group-hover:text-white transition-colors" />
                </div>
                <p className="text-white font-medium mt-5">{s.name}</p>
                <p className="text-sm text-haze mt-2 leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-1 text-xs text-cyan mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Conocer más <ArrowUpRight size={12} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
