import type { Metadata } from 'next';

import './globals.css';

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
  },
  twitter: {
    title: siteConfig.name,
    card: 'summary',
    site: siteConfig.links.twitter,
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
