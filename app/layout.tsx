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
        {children}
      </body>
    </html>
  );
}
