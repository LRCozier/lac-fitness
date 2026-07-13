import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';

import '@/styles/variables.scss';
import '@/styles/base.scss';
import '@/styles/layout.scss';
import '@/styles/components.scss';
import '@/styles/pages.scss';

import { ThemeProvider } from '@/lib/theme-context';
import AppNavbar from '@/components/layout/AppNavbar';
import AppFooter from '@/components/layout/AppFooter';

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

/**
 * Runs before first paint, so the correct theme is on <html> before any
 * pixel is drawn. This cannot be next/script — that defers, and deferring is
 * precisely the bug. The Vue SPA never needed this because nothing painted
 * until JS booted; Next sends HTML first, so without this every light-mode
 * visitor gets a dark flash.
 */
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