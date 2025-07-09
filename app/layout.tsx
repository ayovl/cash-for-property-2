import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import PerformanceMonitor from '@/components/PerformanceMonitor';

export const metadata: Metadata = {
  title: 'Cash for Properties NYC - Sell Your Property Fast for Cash',
  description: 'We buy properties for cash fast as-is in NYC. No repairs, no agents, no hassle. Trusted property buyers since 1988. Get your cash offer today.',
  keywords: 'cash for properties, sell house fast, NYC property buyers, we buy houses',
  authors: [{ name: 'Cash for Properties NYC' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Cash for Properties NYC - Sell Your Property Fast for Cash',
    description: 'We buy properties for cash fast as-is in NYC. No repairs, no agents, no hassle. Trusted property buyers since 1988.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/hero.png" as="image" />
        <link rel="preload" href="/stats.jpg" as="image" />
      </head>
      <body className="overflow-x-hidden">
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
        {children}
        <Suspense fallback={null}>
          <ScrollToTopButton />
        </Suspense>
      </body>
    </html>
  );
}