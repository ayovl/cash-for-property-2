import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';

// Lazy load components that are not immediately visible
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ProcessSection = lazy(() => import('@/components/ProcessSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading component
const SectionLoading = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <section id="home">
        <Hero />
        <StatsSection />
      </section>
      <section id="about">
        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
        </Suspense>
      </section>
      <section id="how-it-works">
        <Suspense fallback={<SectionLoading />}>
          <ProcessSection />
        </Suspense>
      </section>
      <Suspense fallback={<SectionLoading />}>
        <TestimonialsSection />
      </Suspense>
      <section id="services">
        <Suspense fallback={<SectionLoading />}>
          <ServicesSection />
        </Suspense>
      </section>
      <section id="contact">
        <Suspense fallback={<SectionLoading />}>
          <ContactSection />
        </Suspense>
      </section>
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
    </main>
  );
}