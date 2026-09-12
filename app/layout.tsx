import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { COMPANY_INFO } from '@/lib/data/company';

const siteUrl = 'https://housewaretz.co.tz';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.tagline,
  url: siteUrl,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mbezi Beach Makonde, near Mbezi Garden Hotel',
    addressLocality: 'Dar es Salaam',
    addressCountry: 'TZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: COMPANY_INFO.locations[0].coordinates.lat,
    longitude: COMPANY_INFO.locations[0].coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    COMPANY_INFO.social.instagram,
    COMPANY_INFO.social.instagramKitchen,
  ].filter(Boolean),
};

export const metadata: Metadata = {
  title: 'HOUSEWARE TANZANIA LIMITED | Bespoke Kitchens, Wardrobes & Cabinetry',
  description:
    'Premium bespoke cabinetry and interior solutions. Custom kitchens, wardrobes, TV cabinets and professional hardware for Tanzania.',
  keywords:
    'kitchen cabinets Tanzania, custom wardrobes, bespoke cabinetry, interior design Tanzania, cabinet hardware, Houseware Tanzania',
  openGraph: {
    title: 'HOUSEWARE TANZANIA LIMITED | Bespoke Cabinetry & Interior Solutions',
    description: 'Premium custom kitchens, wardrobes and cabinetry designed for your space.',
    type: 'website',
    locale: 'en_TZ',
    url: siteUrl,
    siteName: COMPANY_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOUSEWARE TANZANIA LIMITED',
    description: 'Premium Bespoke Cabinetry & Interior Solutions',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-hw-cream text-hw-charcoal">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
