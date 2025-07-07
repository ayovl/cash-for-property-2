import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash for Properties NYC - Sell Your Property Fast for Cash',
  description: 'We buy properties for cash fast as-is in NYC. No repairs, no agents, no hassle. Trusted property buyers since 1988. Get your cash offer today.',
};

import ScrollToTopButton from '@/components/ScrollToTopButton'; // Import the new component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        {children}
        <ScrollToTopButton /> {/* Add the button here */}
      </body>
    </html>
  );
}