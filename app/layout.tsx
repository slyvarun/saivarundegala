import type { Metadata } from 'next';
import './globals.css';
import SpideyPet from '@/components/SpideyPet';
import FloatingRightNav from '@/components/FloatingRightNav';

export const metadata: Metadata = {
  metadataBase: new URL('https://varunhere.com'),
  title: 'varunhere | Sai Varun Degala',
  description: 'Dual-Domain AI/ML & Biomedical Engineering Portfolio by Sai Varun Degala.',
  openGraph: {
    title: 'varunhere | Sai Varun Degala',
    description: 'Dual-Domain AI/ML & Biomedical Engineering Portfolio by Sai Varun Degala.',
    images: [
      {
        url: '/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'varunhere portfolio website photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'varunhere | Sai Varun Degala',
    description: 'Dual-Domain AI/ML & Biomedical Engineering Portfolio by Sai Varun Degala.',
    images: ['/og_image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white selection:bg-white selection:text-black antialiased relative min-h-screen">
        {/* Subtle Ambient Dot Grid Background */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Global Transparent Spider-Man Cursor Companion */}
        <SpideyPet />

        {/* Global Floating Right Navigation Bar */}
        <FloatingRightNav />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
