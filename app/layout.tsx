import './globals.css';
import { Inter } from 'next/font/google';
import { getSeoSettings } from './lib/contentful';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-6 text-sm font-medium text-black">
            <a
              href="#services"
              className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
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
