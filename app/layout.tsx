import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import JsonLd from '@/components/Jsonld';

import '@/styles/variables.scss';
import '@/styles/base.scss';
import '@/styles/layout.scss';
import '@/styles/components.scss';
import '@/styles/pages.scss';

import { ThemeProvider } from '@/lib/themecontext';
import AppNavbar from '@/components/layout/Appnavbar';
import AppFooter from '@/components/layout/Appfooter';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-archivo',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lacfitness.com'),
  title: {
    default: 'L.A.C. Fitness — Strength & Conditioning | Kingston Upon Thames',
    template: '%s | L.A.C. Fitness',
  },
  description:
    'Supportive 1:1 strength coaching for beginners, returners, and everyday adults. Build strength without intimidation. Based in Kingston Upon Thames.',
  authors: [{ name: 'Luke Rudderham-Cozier' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://lacfitness.com',
    siteName: 'L.A.C. Fitness',
    title: 'L.A.C. Fitness — Strength & Conditioning | Kingston Upon Thames',
    description:
      'Supportive 1:1 strength coaching for beginners, returners, and everyday adults. Build strength without intimidation.',
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <AppNavbar />

          <main id="main-content">{children}</main>

          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}