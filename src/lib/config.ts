import { Manrope, Rethink_Sans } from 'next/font/google';

export const fontHeading = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const siteConfig = {
  name: 'Ututo Linux',
  url: 'https://ututo.ar',
  ogImage: '',
  description: 'Ututo es una distribución de Linux Argentina, hecha por la comunidad.',
  links: {
    twitter: '',
    github: '',
  },
};

export type SiteConfig = typeof siteConfig;
