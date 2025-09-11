import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'L.A.C Fitness | Personal Training & Online Coaching',
    template: '%s | L.A.C Fitness',
  },
  description: 'L.A.C Fitness offers personal training and online coaching services in Richmond Upon Thames and surrounding areas. Get fit and healthy with expert guidance.',
  keywords: ['personal training', 'online coaching', 'fitness', 'Richmond Upon Thames', 'health', 'workout'],
  author: 'Luke Cozier',
  openGraph: {
    title: 'L.A.C Fitness | Personal Training & Online Coaching',
    description: 'Personal training and online coaching services in Richmond Upon Thames by L.A.C Fitness.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}