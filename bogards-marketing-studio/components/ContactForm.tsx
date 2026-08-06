'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Desarrollo Web',
  'Ecommerce',
  'SEO & CRO',
  'CRM & Automatización',
  'Tarjetas Digitales',
  'Google Business',
  'Otro'
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Placeholder submit — wire up to your CRM / email provider (e.g. Brevo, Mailchimp) or an API route.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-14">
        <div className="w-14 h-14 rounded-full bg-brand-gradient/20 border border-electric/30 flex items-center justify-center">
          <CheckCircle2 size={26} className="text-cyan" />
        </div>
        <p className="text-white font-medium mt-5">¡Mensaje enviado!</p>
        <p className="text-sm text-haze mt-2 max-w-xs">
          Gracias por escribirnos. Un especialista de Bogards te contactará en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-haze mb-1.5 block">Nombre</label>
          <input
            required
            type="text"
            placeholder="Tu nombre"
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-haze/50 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-haze mb-1.5 block">Empresa</label>
          <input
            type="text"
            placeholder="Nombre de tu empresa"
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-haze/50 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-haze mb-1.5 block">Correo</label>
          <input
            required
            type="email"
            placeholder="tu@correo.com"
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-haze/50 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-haze mb-1.5 block">Teléfono</label>
          <input
            type="tel"
            placeholder="+52 55 0000 0000"
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-haze/50 focus:outline-none focus:border-electric transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-haze mb-1.5 block">Servicio de interés</label>
        <select
          required
          defaultValue=""
          className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric transition-colors"
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs text-haze mb-1.5 block">Mensaje</label>
        <textarea
          required
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto..."
          className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-haze/50 focus:outline-none focus:border-electric transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-2 bg-brand-gradient text-white text-sm font-medium px-7 py-3.5 rounded-full hover:shadow-glow transition-shadow disabled:opacity-60"
      >
        {loading ? 'Enviando…' : 'Enviar solicitud'}
        {!loading && <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />}
      </button>
    </form>
  );
}
