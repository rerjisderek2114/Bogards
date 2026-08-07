import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="pt-48 pb-32 text-center">
      <div className="container-x">
        <p className="font-display text-7xl md:text-8xl font-semibold text-gradient-brand">404</p>
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-white mt-4">
          Esta página no existe
        </h1>
        <p className="text-haze mt-3 max-w-sm mx-auto">
          El enlace que buscas pudo haberse movido o ya no está disponible.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-medium px-7 py-3.5 rounded-full hover:shadow-glow transition-shadow mt-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
