import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash for Properties NYC - Sell Your Property Fast for Cash',
  description: 'We buy properties for cash fast as-is in NYC. No repairs, no agents, no hassle. Trusted property buyers since 1988. Get your cash offer today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollbarGutter: 'stable' }}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}