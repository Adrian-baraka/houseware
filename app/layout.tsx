import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Houseware Tanzania | Bespoke Kitchens, Wardrobes & Cabinetry',
  description:
    'Premium bespoke cabinetry and interior solutions. Custom kitchens, wardrobes, TV cabinets and professional hardware for Tanzania.',
  keywords:
    'kitchen cabinets Tanzania, custom wardrobes, bespoke cabinetry, interior design Tanzania, cabinet hardware',
  openGraph: {
    title: 'Houseware Tanzania | Bespoke Cabinetry & Interior Solutions',
    description: 'Premium custom kitchens, wardrobes and cabinetry designed for your space.',
    type: 'website',
    locale: 'en_TZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houseware Tanzania',
    description: 'Premium Bespoke Cabinetry & Interior Solutions',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
