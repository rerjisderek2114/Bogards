'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import PixelTrail from '../PixelTrail';

const floatingCards = [
  { icon: TrendingUp, label: 'Conversión', value: '+38%', pos: 'top-[8%] -left-2 md:-left-10' },
  { icon: Users, label: 'Leads / mes', value: '+150', pos: 'top-[42%] -right-4 md:-right-14' },
  { icon: Zap, label: 'Lighthouse', value: '97/100', pos: 'bottom-[6%] left-[6%] md:left-[2%]' }
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 dot-field opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <motion.div
        className="absolute top-24 right-[8%] w-72 h-72 rounded-full bg-cyan/20 blur-[100px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-[4%] w-96 h-96 rounded-full bg-electric/20 blur-[120px]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-mist/90">
            <Sparkles size={13} className="text-cyan" />
            Agencia digital para empresas que quieren vender más
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-center text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl mt-8 max-w-4xl mx-auto text-white"
        >
          Construimos sitios web que{' '}
          <span className="text-gradient-brand">generan clientes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="text-center text-haze text-base md:text-lg max-w-xl mx-auto mt-6"
        >
          Diseño, desarrollo, SEO y automatización en un solo estudio. Ecosistemas digitales
          estratégicos para empresas que necesitan resultados, no solo una página bonita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            href="/contacto#cotizar"
            className="group inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-medium px-7 py-3.5 rounded-full hover:shadow-glow transition-shadow w-full sm:w-auto justify-center"
          >
            Solicitar cotización
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border border-border text-mist text-sm font-medium px-7 py-3.5 rounded-full hover:border-electric hover:text-white transition-colors w-full sm:w-auto justify-center"
          >
            Agenda una reunión
          </Link>
        </motion.div>

        {/* Product mockup with floating stat cards, per brief */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-20 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="absolute -inset-6 bg-brand-gradient/20 blur-3xl rounded-[2rem]" />
          <div className="relative card-surface rounded-2xl md:rounded-3xl p-2 shadow-card">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-border/60">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-2 border-b border-border/60">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="ml-3 text-[11px] text-haze/70">bogards.studio</span>
              </div>
              <div className="bg-base p-8 md:p-14 min-h-[220px] flex flex-col items-center justify-center text-center relative">
                <PixelTrail className="absolute top-6 left-6" count={4} />
                <p className="font-display text-white text-xl md:text-3xl font-medium max-w-md">
                  Impulsamos tu marca al siguiente nivel
                </p>
                <p className="text-haze text-sm mt-3 max-w-sm">
                  Diseñamos estrategias digitales que generan resultados reales.
                </p>
              </div>
            </div>
          </div>

          {floatingCards.map(({ icon: Icon, label, value, pos }, i) => (
            <motion.div
              key={label}
              className={`hidden md:flex absolute ${pos} glass rounded-2xl px-4 py-3 items-center gap-3 shadow-card`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
            >
              <div className="w-9 h-9 rounded-xl bg-brand-gradient/20 border border-electric/30 flex items-center justify-center">
                <Icon size={16} className="text-electric-light" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-haze leading-none">{label}</p>
                <p className="text-sm text-white font-medium mt-1">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
