import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import PixelTrail from './PixelTrail';

const columns = [
  {
    title: 'Servicios',
    links: [
      { name: 'Desarrollo Web', href: '/servicios#desarrollo-web' },
      { name: 'Ecommerce', href: '/servicios#ecommerce' },
      { name: 'SEO & CRO', href: '/servicios#seo' },
      { name: 'Tarjetas Digitales', href: '/servicios#tarjetas-digitales' },
      { name: 'CRM & Automatización', href: '/servicios#automatizacion' }
    ]
  },
  {
    title: 'Estudio',
    links: [
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Portafolio', href: '/portafolio' },
      { name: 'Casos de Éxito', href: '/casos-de-exito' },
      { name: 'Blog', href: '/blog' },
      { name: 'Preguntas Frecuentes', href: '/#faq' }
    ]
  },
  {
    title: 'Contacto',
    links: [
      { name: 'Cotizar proyecto', href: '/contacto#cotizar' },
      { name: 'Agendar reunión', href: '/contacto' },
      { name: 'WhatsApp', href: 'https://wa.me/5215500000000' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-ink overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/10 blur-[120px] rounded-full" />
      <div className="container-x relative py-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/logo/bogards-logo.png" alt="Bogards Marketing Studio" width={38} height={38} className="rounded-md" />
              <span className="font-display font-semibold text-white text-base">
                BOGARDS
                <span className="block text-[9px] font-normal tracking-[0.25em] text-cyan mt-0.5">
                  MARKETING STUDIO
                </span>
              </span>
            </div>
            <p className="text-sm text-haze mt-5 max-w-xs leading-relaxed">
              Construimos ecosistemas digitales que generan clientes, automatizan procesos y
              aceleran el crecimiento de las empresas.
            </p>
            <PixelTrail className="mt-6" count={5} />
            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-haze hover:text-white hover:border-electric transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-white text-sm font-medium mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-sm text-haze hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-border/70">
          <div className="flex items-center gap-3 text-sm text-haze">
            <Mail size={16} className="text-electric-light shrink-0" /> hola@bogards.studio
          </div>
          <div className="flex items-center gap-3 text-sm text-haze">
            <Phone size={16} className="text-electric-light shrink-0" /> +52 55 0000 0000
          </div>
          <div className="flex items-center gap-3 text-sm text-haze">
            <MapPin size={16} className="text-electric-light shrink-0" /> CDMX, México · Remoto LatAm
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8 pt-8 border-t border-border/70 text-xs text-haze/70">
          <p>© {new Date().getFullYear()} Bogards Marketing Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
