import Reveal from '../Reveal';

const stats = [
  { value: '+150', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '5.0★', label: 'Calificación promedio' }
];

export default function Stats() {
  return (
    <section className="border-y border-border/70 bg-surface/40">
      <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
            <p className="font-display text-3xl md:text-4xl font-semibold text-gradient-brand">
              {s.value}
            </p>
            <p className="text-sm text-haze mt-1.5">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
