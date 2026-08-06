'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const categories = ['Todos', 'Salud', 'Construcción', 'Restaurantes', 'Inmobiliaria', 'Educación'];

const projects = [
  { name: 'Clínica Dental Vitalis', category: 'Salud', result: '+64% citas en línea', gradient: 'from-electric to-cyan' },
  { name: 'Grupo Constructor Norte', category: 'Construcción', result: '+3x leads calificados', gradient: 'from-cyan to-electric-light' },
  { name: 'Sabor de Casa Restaurantes', category: 'Restaurantes', result: '+41% reservaciones', gradient: 'from-electric-light to-electric' },
  { name: 'Inmobiliaria Alturas', category: 'Inmobiliaria', result: '+52% consultas de propiedades', gradient: 'from-electric to-electric-light' },
  { name: 'Colegio Nuevo Horizonte', category: 'Educación', result: '+80 inscripciones en línea', gradient: 'from-cyan to-electric' },
  { name: 'Bufete Ramírez & Asociados', category: 'Construcción', result: '+35% solicitudes de consulta', gradient: 'from-electric-light to-cyan' },
  { name: 'Clínica Estética Lumina', category: 'Salud', result: '+90% citas agendadas', gradient: 'from-electric to-cyan' },
  { name: 'Hotel Boutique Marea', category: 'Restaurantes', result: '+47% reservas directas', gradient: 'from-cyan to-electric-light' },
  { name: 'Desarrollos Vértice', category: 'Inmobiliaria', result: '+2x visitas a propiedades', gradient: 'from-electric-light to-electric' }
];

export default function Portafolio() {
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-x relative text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-cyan justify-center">
              <span className="w-6 h-px bg-cyan" /> Portafolio
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mt-5 leading-tight">
              Proyectos que ya están <span className="text-gradient-brand">generando resultados</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${
                  active === c
                    ? 'bg-brand-gradient text-white border-transparent'
                    : 'text-haze border-border hover:text-white hover:border-electric'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <Reveal key={p.name}>
                <Link href="/contacto" className="group block card-surface rounded-2xl overflow-hidden hover:border-electric/50 transition-colors">
                  <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />
                    <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest text-white/80 font-medium">
                      {p.category}
                    </span>
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
    </>
  );
}
