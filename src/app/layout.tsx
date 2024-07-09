import type { Metadata } from 'next';

import './globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { fontBody, fontHeading, siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/provider/theme-provider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
    siteName: siteConfig.name,
  },
  twitter: {
    title: siteConfig.name,
    card: 'summary_large_image',
    site: siteConfig.url,
    creator: siteConfig.links.twitter,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn('antialiased', fontBody.variable, fontHeading.variable)}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
