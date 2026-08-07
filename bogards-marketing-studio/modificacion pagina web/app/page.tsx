import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTAFinal from '@/components/sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <PortfolioPreview />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </>
  );
}
