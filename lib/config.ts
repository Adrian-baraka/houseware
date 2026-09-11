/**
 * Houseware Configuration
 * Central configuration for the website
 */

// WhatsApp Integration
export const WHATSAPP_NUMBER = '[INSERT WHATSAPP NUMBER]'; // Format: 255XXXXXXXXX (Tanzania)

export function getWhatsAppLink(message: string): string {
  if (WHATSAPP_NUMBER === '[INSERT WHATSAPP NUMBER]') {
    console.warn('WhatsApp number not configured. Please update WHATSAPP_NUMBER in lib/config.ts');
    return '#';
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Site Configuration
export const SITE_CONFIG = {
  name: 'Houseware Tanzania',
  description: 'Premium Bespoke Cabinetry & Interior Solutions',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://housewwaretz.com',
  locale: 'en_TZ',
};

// Image Configuration
export const IMAGE_CONFIG = {
  placeholder: '/images/placeholder.svg',
  formats: 'avif, webp, jpg',
} as const;
