import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050914',
        base: '#0A0F1F',
        surface: '#0F1626',
        'surface-2': '#131B30',
        border: '#1E2A45',
        electric: '#2563EB',
        'electric-light': '#4C8DFF',
        cyan: '#06B6D4',
        haze: '#93A4C3',
        mist: '#E5E7EB'
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      backgroundImage: {
        'grid-dots':
          'radial-gradient(circle, rgba(37,99,235,0.35) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.25) 0%, rgba(8,17,32,0) 70%)'
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(37,99,235,0.45)',
        card: '0 20px 60px -20px rgba(0,0,0,0.6)'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-24px)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite'
      }
    }
  },
  plugins: []
};
export default config;
