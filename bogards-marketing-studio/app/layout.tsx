import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bogards.studio'),
  title: {
    default: 'Bogards Marketing Studio — Sitios web que generan clientes',
    template: '%s · Bogards Marketing Studio'
  },
  description:
    'Diseñamos y desarrollamos ecosistemas digitales premium: sitios web, ecommerce, SEO, automatizaciones y CRM que convierten visitantes en clientes.',
  keywords: [
    'agencia de marketing digital',
    'desarrollo web',
    'diseño web premium',
    'SEO',
    'CRM',
    'Bogards Marketing Studio'
  ],
  openGraph: {
    title: 'Bogards Marketing Studio — Sitios web que generan clientes',
    description:
      'Ecosistemas digitales estratégicos: desarrollo web, SEO, automatización y CRO para empresas que quieren vender más.',
    url: 'https://bogards.studio',
    siteName: 'Bogards Marketing Studio',
    locale: 'es_MX',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-base text-mist selection:bg-electric">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
