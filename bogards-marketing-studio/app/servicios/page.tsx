import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe, ShoppingCart, TrendingUp, MapPin, Settings, CreditCard, Cloud, Check, ArrowRight
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CTAFinal from '@/components/sections/CTAFinal';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Desarrollo web, ecommerce, SEO, CRM, automatización y tarjetas digitales para hacer crecer tu empresa.'
};

const services = [
  {
    id: 'desarrollo-web',
    icon: Globe,
    name: 'Desarrollo Web',
    tagline: 'Sitios corporativos y landing pages construidos para convertir',
    desc: 'Diseñamos y desarrollamos sitios web a medida, rápidos, seguros y optimizados desde el primer día para posicionamiento y conversión.',
    features: ['Landing Pages', 'Sitios Corporativos', 'Portales Empresariales', 'Rediseño Web', 'Migraciones']
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    name: 'Ecommerce',
    tagline: 'Tiendas en línea diseñadas para vender',
    desc: 'Plataformas de venta en línea con catálogos, pagos y experiencia de compra optimizada para maximizar el ticket promedio.',
    features: ['Catálogos Digitales', 'Pasarelas de Pago', 'Gestión de Inventario', 'Checkout Optimizado', 'Integraciones de envío']
  },
  {
    id: 'seo',
    icon: TrendingUp,
    name: 'SEO & CRO',
    tagline: 'Más tráfico calificado y más conversión por visita',
    desc: 'Estrategia de posicionamiento técnico y de contenido combinada con optimización de conversión para que cada visita cuente.',
    features: ['SEO Técnico', 'SEO Local', 'Core Web Vitals', 'Optimización de velocidad', 'Pruebas A/B']
  },
  {
    id: 'google-business',
    icon: MapPin,
    name: 'Google Business Profile',
    tagline: 'Presencia local optimizada para aparecer primero',
    desc: 'Configuramos y optimizamos tu perfil de Google Business para captar clientes que buscan tus servicios cerca de ellos.',
    features: ['Optimización de perfil', 'Gestión de reseñas', 'Fotos y publicaciones', 'Categorías y atributos']
  },
  {
    id: 'automatizacion',
    icon: Settings,
    name: 'CRM & Automatización',
    tagline: 'Procesos comerciales sin fricción ni tareas manuales',
    desc: 'Implementamos CRM, chatbots con IA, WhatsApp Business y flujos de email marketing para que ningún prospecto se pierda.',
    features: ['CRM', 'Chatbots IA', 'WhatsApp Business', 'Email Marketing', 'Automatización de leads']
  },
  {
    id: 'tarjetas-digitales',
    icon: CreditCard,
    name: 'Tarjetas Digitales',
    tagline: 'Tu presencia profesional completa en un QR',
    desc: 'Tarjetas de presentación digitales con enlaces a WhatsApp, redes, catálogo y agenda — todo actualizable en tiempo real.',
    features: ['Código QR', 'WhatsApp directo', 'Portafolio integrado', 'Formulario de contacto', 'Agenda de citas']
  },
  {
    id: 'hosting',
    icon: Cloud,
    name: 'Hosting & Infraestructura',
    tagline: 'Dominio, SSL y hosting administrados por nosotros',
    desc: 'Nos encargamos de toda la infraestructura técnica: dominio, certificado SSL, backups automáticos y monitoreo continuo.',
    features: ['Hosting administrado', 'Dominio y DNS', 'Certificado SSL', 'Backups automáticos', 'Monitoreo 24/7']
  }
];

export default function Servicios() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan justify-center">
              <span className="w-6 h-px bg-cyan" /> Servicios
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mt-5 leading-tight">
              Soluciones digitales <span className="text-gradient-brand">integrales</span>
            </h1>
            <p className="text-haze text-lg mt-6 leading-relaxed">
              Desde el primer boceto hasta la automatización de tus procesos comerciales — todo
              bajo un mismo equipo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="card-surface rounded-xl px-4 py-3 flex items-center gap-2.5 hover:border-electric/50 transition-colors"
            >
              <s.icon size={15} className="text-electric-light shrink-0" />
              <span className="text-xs text-mist">{s.name}</span>
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 md:py-24 scroll-mt-24 ${i % 2 === 1 ? 'bg-surface/30 border-y border-border/70' : ''}`}
        >
          <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="w-12 h-12 rounded-xl bg-brand-gradient/15 border border-electric/25 flex items-center justify-center">
                <s.icon size={21} className="text-electric-light" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mt-5">
                {s.name}
              </h2>
              <p className="text-cyan text-sm mt-2">{s.tagline}</p>
              <p className="text-haze mt-4 leading-relaxed max-w-lg">{s.desc}</p>
              <Link
                href="/contacto#cotizar"
                className="group inline-flex items-center gap-2 text-sm text-white font-medium mt-6"
              >
                Cotizar este servicio
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="card-surface rounded-2xl p-7">
                <p className="text-xs uppercase tracking-widest text-haze mb-4">Incluye</p>
                <div className="space-y-3">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-gradient/20 border border-electric/30 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-cyan" />
                      </div>
                      <span className="text-sm text-mist">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CTAFinal />
    </>
  );
}
