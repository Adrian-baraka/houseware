/**
 * Houseware Configuration
 * Central configuration for the website
 */

// WhatsApp Integration
export const WHATSAPP_NUMBER = '255714881668'; // Format: 255XXXXXXXXX (Tanzania)

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Site Configuration
export const SITE_CONFIG = {
  name: 'HOUSEWARE TANZANIA LIMITED',
  description: 'Premium Bespoke Cabinetry & Interior Solutions',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://housewaretz.co.tz',
  locale: 'en_TZ',
};

// Image Configuration
export const IMAGE_CONFIG = {
  placeholder: '/images/placeholder.svg',
  formats: 'avif, webp, jpg',
} as const;
