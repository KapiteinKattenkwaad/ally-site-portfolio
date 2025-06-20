import './globals.css';
import { Inter, Quicksand } from 'next/font/google';
import { getSeoSettings } from './lib/contentful';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '600', '700'] });

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoSettings();

  return {
    title: seo.title ?? 'Alexandra Sutton',
    description: seo.description,
    icons: {
      icon: '/write.png',
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
      <body className={quicksand.className + " bg-[var(--background)] text-[var(--colorText)]"}>
        <header className="sticky top-0 z-50 bg-[var(--background)]/60 backdrop-blur-lg border-b border-white/30 shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-6 text-base font-semibold text-[var(--colorText)]">
            <a
              href="#services"
              className="px-4 py-2 rounded-full hover:bg-[var(--accent)] transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="px-4 py-2 rounded-full hover:bg-[var(--accent)] transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full hover:bg-[var(--accent)] transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>


        {children}
      </body>
    </html>
  );
}
