import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames',
    template: '%s | LAC Fitness Strength & Conditioning'
  },
  description: 'Professional strength and conditioning training focused on skill progression and functional strength.',
  keywords: 'personal trainer, strength training, conditioning, Richmond, London, fitness',
  authors: [{ name: 'Luke Cozier' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://lacfitness.com',
    siteName: 'Luke Cozier Fitness',
    title: 'LAC Fitness - Strength & Conditioning | Richmond Upon Thames',
    description: 'Professional strength and conditioning training focused on skill progression and functional strength.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Luke Cozier Strength & Conditioning' }],
  },
};

const  RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white p-2 z-50">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
