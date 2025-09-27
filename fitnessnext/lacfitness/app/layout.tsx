import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luke Cozier - Strength & Conditioning | Richmond Upon Thames',
  description: 'Professional strength and conditioning training focused on skill progression and functional strength. Personal training in Richmond Upon Thames.',
  keywords: 'personal trainer, strength training, conditioning, Richmond, London, fitness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
