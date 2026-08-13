import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://juanoberto.dev';

export const siteMetadata: Metadata = {
  title: {
    default: 'Juan Oberto — Desarrollador Web Full Stack | Maracaibo',
    template: '%s | Juan Oberto',
  },
  description:
    'Desarrollador Web Full Stack especializado en React, Next.js y soluciones digitales premium. Construyo aplicaciones web ultrarrápidas, escalables y orientadas a resultados desde Maracaibo, Venezuela.',
  keywords: [
    'Juan Oberto',
    'Desarrollador Web',
    'Frontend Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'JavaScript',
    'Portafolio',
    'Venezuela',
    'Maracaibo',
    'Diseño Web',
    'Sitios Web',
    'Desarrollo Web Maracaibo',
  ],
  authors: [{ name: 'Juan Oberto', url: SITE_URL }],
  creator: 'Juan Oberto',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Juan Oberto — Desarrollador Web Full Stack | Maracaibo',
    description:
      'Portafolio de Juan Oberto, Desarrollador Web Full Stack especializado en React, Next.js y experiencias web premium desde Maracaibo, Venezuela.',
    url: SITE_URL,
    siteName: 'Juan Oberto — Portfolio',
    locale: 'es_VE',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan Oberto — Desarrollador Web Full Stack',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Oberto — Desarrollador Web Full Stack',
    description:
      'Portafolio de Juan Oberto, Desarrollador Web Full Stack especializado en React, Next.js y experiencias web premium.',
    images: ['/og-image.png'],
    creator: '@juanoberto',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
