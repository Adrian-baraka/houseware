import type { ProductCategory } from './hardware';

export const COMPANY_INFO = {
  name: 'Houseware Tanzania',
  tagline: 'Bespoke cabinetry & interior solutions designed for your space.',
  
  // Contact Information
  phone: '[INSERT PHONE NUMBER]',
  whatsapp: '[INSERT WHATSAPP NUMBER]',
  email: '[INSERT EMAIL ADDRESS]',
  
  // Locations
  locations: [
    {
      id: 'dar-es-salaam',
      name: 'Dar Es Salaam',
      address: '[INSERT ADDRESS]',
      phone: '[INSERT PHONE]',
      whatsapp: '[INSERT WHATSAPP]',
      hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      coordinates: {
        lat: -6.7924,
        lng: 39.2083,
      },
    },
    // Add more locations as needed
  ],
  
  // Social Media
  social: {
    instagram: '[INSERT INSTAGRAM URL]',
    facebook: '[INSERT FACEBOOK URL]',
    tiktok: '[INSERT TIKTOK URL]',
  },
  
  // Company Details
  founded: '[INSERT YEAR]',
  description: '[INSERT COMPANY STORY]',
};

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'kitchens',
    name: 'Kitchens',
    slug: 'kitchens',
    description:
      'Custom kitchen cabinetry designed around your lifestyle, space and aesthetic.',
    longDescription:
      'Our bespoke kitchen cabinetry combines functionality with stunning design. We work closely with you to understand your cooking habits, storage needs, and aesthetic preferences to create a kitchen that is uniquely yours.',
    image: '/images/projects/houseware-kitchen-walnut-marble-04.jpg',
    gallery: [
      '/images/projects/houseware-kitchen-walnut-marble-04.jpg',
      '/images/projects/houseware-kitchen-japandi-wood-09.jpg',
      '/images/projects/houseware-kitchen-taupe-island-05.jpg',
      '/images/projects/houseware-kitchen-scandi-light-01.jpg',
      '/images/projects/houseware-kitchen-modern-greige-06.jpg',
      '/images/projects/houseware-kitchen-warm-oak-03.jpg',
    ],
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    slug: 'wardrobes',
    description: 'Bespoke wardrobes and storage solutions designed for your room.',
    longDescription:
      'From master bedrooms to walk-in closets, we design custom wardrobe solutions that maximize your space and reflect your personal style.',
    image: '/images/projects/houseware-wardrobe-luxury-walkin-03.jpg',
    gallery: [
      '/images/projects/houseware-wardrobe-luxury-walkin-03.jpg',
      '/images/projects/houseware-wardrobe-fitted-greygreen-01.jpg',
      '/images/projects/houseware-wardrobe-drawer-organisers-05.jpg',
      '/images/projects/houseware-wardrobe-blackframe-glass-04.jpg',
      '/images/projects/houseware-wardrobe-office-integrated-07.jpg',
      '/images/projects/houseware-wardrobe-oak-floortoceiling-02.jpg',
      '/images/projects/houseware-wardrobe-neutral-walkin-08.jpg',
      '/images/projects/houseware-wardrobe-white-walkin-06.jpg',
    ],
  },
  {
    id: 'tv-cabinets',
    name: 'TV Cabinets',
    slug: 'tv-cabinets',
    description: 'Custom entertainment and TV cabinetry designed to integrate naturally into your living space.',
    longDescription:
      'Our TV cabinet solutions integrate seamlessly into your living spaces, providing elegant storage while showcasing your entertainment system.',
    image: '/images/projects/houseware-tvwall-walnut-lit-01.jpg',
    gallery: [
      '/images/projects/houseware-tvwall-walnut-lit-01.jpg',
      '/images/projects/houseware-tvwall-slatted-led-02.jpg',
      '/images/projects/houseware-tvwall-slat-portrait-03.jpg',
      '/images/projects/houseware-tvwall-white-panel-04.jpg',
      '/images/projects/houseware-tvwall-black-built-in-05.jpg',
      '/images/projects/houseware-tvwall-dark-walnut-06.jpg',
      '/images/projects/houseware-tvwall-white-traditional-07.jpg',
    ],
  },
  {
    id: 'bespoke',
    name: 'Bespoke Cabinetry',
    slug: 'bespoke',
    description: 'Custom storage and cabinetry solutions for unique interior requirements.',
    longDescription:
      'Whether you need specialized storage for a unique space or custom solutions for specific needs, our team creates cabinetry that works perfectly for you.',
    image: '/images/services/houseware-cabinetry-office-black-wide-03.jpg',
    gallery: [
      '/images/services/houseware-cabinetry-banquette-window-05.jpg',
      '/images/services/houseware-cabinetry-bar-taupe-06.jpg',
      '/images/services/houseware-cabinetry-dining-black-01.jpg',
      '/images/services/houseware-cabinetry-office-dark-02.jpg',
      '/images/services/houseware-cabinetry-office-black-wide-03.jpg',
      '/images/services/houseware-cabinetry-winewall-oak-04.jpg',
      '/images/services/houseware-cabinetry-study-moody-08.jpg',
      '/images/services/houseware-cabinetry-office-dual-07.jpg',
    ],
  },
];

export const HOW_WE_WORK = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Tell us about your space, requirements and ideas.',
  },
  {
    step: '02',
    title: 'Site Visit',
    description: 'We visit your location to understand the space and take accurate measurements.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Our team develops a cabinetry solution around your requirements.',
  },
  {
    step: '04',
    title: 'Quotation',
    description: 'You receive a quotation based on the agreed design and specifications.',
  },
  {
    step: '05',
    title: 'Production',
    description: 'Your cabinetry is manufactured according to the approved design.',
  },
  {
    step: '06',
    title: 'Installation',
    description: 'Our team installs and finishes the project at your location.',
  },
];
