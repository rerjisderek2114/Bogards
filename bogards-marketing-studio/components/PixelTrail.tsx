'use client';

import { motion } from 'framer-motion';

/**
 * The Bogards monogram uses a diagonal trail of shrinking squares as its
 * signature decoration. We reuse that exact motif — never a generic dot
 * grid — as the connective visual thread across the site: in the hero,
 * as section dividers, and as hover accents on cards.
 */
export default function PixelTrail({
  className = '',
  reverse = false,
  count = 5
}: {
  className?: string;
  reverse?: boolean;
  count?: number;
}) {
  const squares = Array.from({ length: count });
  return (
    <div className={`flex items-center gap-2 ${reverse ? 'flex-row-reverse' : ''} ${className}`}>
      {squares.map((_, i) => {
        const size = 14 - i * 2.2;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 - i * 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              width: Math.max(size, 4),
              height: Math.max(size, 4),
              background:
                i % 2 === 0
                  ? 'linear-gradient(135deg,#2563EB,#06B6D4)'
                  : '#2563EB'
            }}
            className="rounded-[2px]"
          />
        );
      })}
    </div>
  );
}
