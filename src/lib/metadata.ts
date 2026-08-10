import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Juan Oberto - Desarrollador Web Full Stack',
    template: '%s | Juan Oberto',
  },
  description:
    'Desarrollador Web Full Stack especializado en React, Next.js y soluciones digitales. Construyo aplicaciones web rápidas, escalables y orientadas a resultados.',
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
  ],
  authors: [
    {
      name: 'Juan Oberto',
    },
  ],
  creator: 'Juan Oberto',
  metadataBase: new URL('https://aitezaz.xyz'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/logo.webp',
  },
  openGraph: {
    title: 'Juan Oberto - Desarrollador Web Full Stack',
    description:
      'Portafolio de Juan Oberto, Desarrollador Web Full Stack especializado en React, Next.js y experiencias web premium.',
    url: 'https://aitezaz.xyz',
    siteName: 'Juan Oberto Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan Oberto - Desarrollador Web Full Stack',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Oberto - Desarrollador Web Full Stack',
    description:
      'Portafolio de Juan Oberto, Desarrollador Web Full Stack especializado en React, Next.js y experiencias web premium.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

