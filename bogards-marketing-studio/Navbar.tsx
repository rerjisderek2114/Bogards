'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const serviceLinks = [
  { name: 'Desarrollo Web', href: '/servicios#desarrollo-web', desc: 'Sitios y portales a medida' },
  { name: 'Ecommerce', href: '/servicios#ecommerce', desc: 'Tiendas que convierten' },
  { name: 'SEO & CRO', href: '/servicios#seo', desc: 'Tráfico y conversión' },
  { name: 'CRM & Automatización', href: '/servicios#automatizacion', desc: 'Procesos sin fricción' },
  { name: 'Tarjetas Digitales', href: '/servicios#tarjetas-digitales', desc: 'Tu presencia en un QR' },
  { name: 'Google Business', href: '/servicios#google-business', desc: 'Presencia local optimizada' }
];

const navLinks = [
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Casos de Éxito', href: '/casos-de-exito' },
  { name: 'Contacto', href: '/contacto' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo/bogards-logo.png" alt="Bogards Marketing Studio" width={34} height={34} className="rounded-md" />
          <span className="font-display font-semibold tracking-wide text-white text-[15px] leading-none">
            BOGARDS
            <span className="block text-[9px] font-normal tracking-[0.25em] text-cyan mt-0.5">
              MARKETING STUDIO
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-mist/90 hover:text-white transition-colors">
              Servicios <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]"
                >
                  <div className="glass rounded-2xl p-4 grid grid-cols-2 gap-1 shadow-card">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="group rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
                      >
                        <p className="text-sm text-white font-medium group-hover:text-electric-light transition-colors">
                          {s.name}
                        </p>
                        <p className="text-xs text-haze mt-0.5">{s.desc}</p>
                      </Link>
                    ))}
                    <Link
                      href="/servicios"
                      className="col-span-2 mt-1 flex items-center justify-between rounded-xl px-4 py-3 bg-brand-gradient/10 border border-electric/30 text-sm text-white hover:border-electric transition-colors"
                    >
                      Ver todos los servicios <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="px-4 py-2 text-sm text-mist/90 hover:text-white transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contacto"
            className="text-sm text-mist/90 hover:text-white transition-colors px-4 py-2"
          >
            Agenda una reunión
          </Link>
          <Link
            href="/contacto#cotizar"
            className="text-sm font-medium text-white bg-brand-gradient px-5 py-2.5 rounded-full hover:shadow-glow transition-shadow"
          >
            Cotizar proyecto
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass mt-3 mx-4 rounded-2xl"
          >
            <div className="p-5 flex flex-col gap-1">
              <Link href="/servicios" onClick={() => setOpen(false)} className="py-3 text-white border-b border-white/5">
                Servicios
              </Link>
              {navLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-mist border-b border-white/5"
                >
                  {l.name}
                </Link>
              ))}
              <Link
                href="/contacto#cotizar"
                onClick={() => setOpen(false)}
                className="mt-4 text-center text-white bg-brand-gradient px-5 py-3 rounded-full"
              >
                Cotizar proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
