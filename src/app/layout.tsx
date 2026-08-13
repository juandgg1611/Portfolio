/**
 * @license
 * Copyright (c) 2026 Aitezaz Sikandar. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 * Project: Portfolio
 * Author: Aitezaz Sikandar (aitezazdev)
 * Website: https://aitezaz.xyz
 */

import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import { siteMetadata } from '@/lib/metadata';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
export const metadata = siteMetadata;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://juanoberto.dev/#person',
      name: 'Juan Oberto',
      url: 'https://juanoberto.dev',
      jobTitle: 'Desarrollador Web Full Stack',
      worksFor: {
        '@type': 'Organization',
        name: 'Juan Oberto — Freelance',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Maracaibo',
        addressRegion: 'Zulia',
        addressCountry: 'VE',
      },
      knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design', 'SEO'],
      sameAs: ['https://github.com/juandgg1611'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://juanoberto.dev/#website',
      url: 'https://juanoberto.dev',
      name: 'Juan Oberto — Portfolio',
      description: 'Portafolio profesional de Juan Oberto, Desarrollador Web Full Stack en Maracaibo, Venezuela.',
      inLanguage: 'es',
      publisher: { '@id': 'https://juanoberto.dev/#person' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://juanoberto.dev/#business',
      name: 'Juan Oberto — Desarrollo Web',
      image: 'https://juanoberto.dev/og-image.png',
      url: 'https://juanoberto.dev',
      description: 'Servicios profesionales de desarrollo web, diseño UI/UX y optimización digital para negocios.',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Maracaibo',
        addressRegion: 'Zulia',
        addressCountry: 'VE',
      },
      areaServed: ['Venezuela', 'Latinoamérica', 'Internacional'],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Desarrollo Web',
        itemListElement: [
          { '@type': 'Offer', name: 'Desarrollo Web Frontend', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Desarrollo Full Stack', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Diseño UI/UX Premium', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Mantenimiento Web y Hosting', priceCurrency: 'USD' },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-cream`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}


