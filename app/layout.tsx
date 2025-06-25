import './globals.css';
import { getSeoSettings } from './lib/contentful';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';


export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoSettings();

  return {
    title: seo.title ?? 'Alexandra Sutton',
    description: seo.description,
    icons: {
      icon: '/favicon.svg',
    },
    openGraph: seo.ogImage
      ? {
        images: [
          {
            url: 'https:' + seo.ogImage,
          },
        ],
      }
      : undefined,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--colorText)] font-sans" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
        <header className="sticky top-0 z-50 bg-[var(--background)]/60 backdrop-blur-lg border-b border-white/30 shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-6 text-base font-semibold text-[var(--colorText)]">
            <a
              href="#home"
              className="mx-4 py-2"
            >
              Home
            </a>
            <a
              href="#work"
              className="mx-4 py-2"
            >
              Work
            </a>
            <a
              href="#contact"
              className="mx-4 py-2 "
            >
              Contact
            </a>
          </nav>
        </header>


        {children}
        <Analytics />
      </body>
    </html>
  );
}
