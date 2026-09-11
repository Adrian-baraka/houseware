/**
 * Houseware Hardware Products Catalogue
 */

export type ProductCategory =
  | 'hinges'
  | 'drawer-slides'
  | 'cabinet-organisers'
  | 'kitchen-organisers'
  | 'wall-panels'
  | 'handles'
  | 'accessories'
  | 'other';

export interface HardwareProduct {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description?: string;
  image: string;
  price?: string | number;
  priceDisplay: string;
  availability: 'in-stock' | 'limited' | 'on-order';
  specifications?: Record<string, string>;
  materials?: string;
  colors?: string[];
  sku?: string;
}

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  {
    id: 'hinge-1',
    name: 'Soft-Close Cabinet Hinge',
    category: 'hinges',
    shortDescription: 'Premium soft-close mechanism for cabinet doors.',
    description:
      'European-engineered soft-close hinges that ensure smooth, silent closing of cabinet doors. Reduces wear and tear on your furniture.',
    image: '/images/hardware/houseware-hardware-hinge-softclose-02.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    materials: 'Steel with nylon bushings',
    specifications: {
      opening_angle: '110°',
      load_rating: '30kg',
      installation: 'Screw-on',
    },
  },
  {
    id: 'drawer-1',
    name: 'Premium Drawer Slide System',
    category: 'drawer-slides',
    shortDescription: 'Full-extension drawer slides with ball bearings.',
    description:
      'Professional-grade drawer slides supporting up to 50kg with smooth full-extension functionality. Ideal for kitchens and storage cabinetry.',
    image: '/images/hardware/houseware-hardware-hinge-product-04.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    materials: 'Stainless steel with ball bearings',
    specifications: {
      extension: 'Full',
      load_rating: '50kg',
      length_options: '350mm, 450mm, 550mm',
    },
  },
  {
    id: 'organiser-1',
    name: 'Cabinet Pull-Out Organiser System',
    category: 'cabinet-organisers',
    shortDescription: 'Modular pull-out storage system for cabinets.',
    description:
      'Maximize cabinet space with our modular pull-out organising system. Includes adjustable compartments for flexible storage.',
    image: '/images/hardware/houseware-hardware-hinge-chrome-07.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    materials: 'Durable polypropylene with metal frame',
  },
  {
    id: 'kitchen-org-1',
    name: 'Kitchen Drawer Dividers',
    category: 'kitchen-organisers',
    shortDescription: 'Adjustable dividers for organizing kitchen drawers.',
    description: 'Keep your kitchen organized with our flexible drawer divider system.',
    image: '/images/hardware/houseware-hardware-hinge-faceframe-06.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    materials: 'Premium plastic with rubber grip',
  },
  {
    id: 'handle-1',
    name: 'Minimalist Cabinet Handle',
    category: 'handles',
    shortDescription: 'Contemporary handle design in multiple finishes.',
    description:
      'Sleek, minimalist handles that complete your cabinet design. Available in multiple modern finishes.',
    image: '/images/hardware/houseware-hardware-handle-black-05.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    colors: ['Brushed Brass', 'Matte Black', 'Chrome', 'Brushed Nickel'],
    specifications: {
      length: '128mm',
      width: '12mm',
      projection: '15mm',
    },
  },
  {
    id: 'handle-2',
    name: 'Brass Cabinet Handle',
    category: 'handles',
    shortDescription: 'Premium brass handles with warm finish.',
    description: 'Elegant brass handles that add warmth and sophistication to cabinetry.',
    image: '/images/hardware/houseware-hardware-handle-brass-08.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    colors: ['Brushed Brass'],
    specifications: {
      length: '128mm',
      width: '12mm',
      projection: '15mm',
    },
  },
  {
    id: 'handle-3',
    name: 'Nickel Cabinet Handle',
    category: 'handles',
    shortDescription: 'Modern nickel finish handle.',
    description: 'Clean, contemporary nickel handles for minimalist designs.',
    image: '/images/hardware/houseware-hardware-handle-nickel-01.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    colors: ['Brushed Nickel'],
    specifications: {
      length: '128mm',
      width: '12mm',
      projection: '15mm',
    },
  },
  {
    id: 'handle-4',
    name: 'Silver Cabinet Handle',
    category: 'handles',
    shortDescription: 'Premium silver finish handle.',
    description: 'Polished silver handles for contemporary and transitional designs.',
    image: '/images/hardware/houseware-hardware-handle-silver-03.jpg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    colors: ['Polished Silver'],
    specifications: {
      length: '128mm',
      width: '12mm',
      projection: '15mm',
    },
  },
  {
    id: 'panel-1',
    name: 'Decorative Wall Panel Set',
    category: 'wall-panels',
    shortDescription: 'Modern wall paneling for interior design.',
    description: 'Add texture and sophistication to your walls with our premium wall panel collection.',
    image: '/images/hardware/wall-panel.svg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    materials: 'MDF with veneer finish',
  },
  {
    id: 'acc-1',
    name: 'LED Cabinet Lighting Kit',
    category: 'accessories',
    shortDescription: 'Warm white LED lighting for cabinet interiors.',
    description:
      'Complete LED lighting solution for cabinet interiors. Includes strips, power supply, and dimmer switch.',
    image: '/images/hardware/lighting-system.svg',
    priceDisplay: 'Price on request',
    availability: 'in-stock',
    specifications: {
      color_temp: '3000K (Warm White)',
      power: 'USB rechargeable',
      brightness: 'Dimmable',
    },
  },
];

export const HARDWARE_CATEGORIES: Record<ProductCategory, { name: string; icon?: string }> = {
  hinges: { name: 'Hinges' },
  'drawer-slides': { name: 'Drawer Slides' },
  'cabinet-organisers': { name: 'Cabinet Organisers' },
  'kitchen-organisers': { name: 'Kitchen Organisers' },
  'wall-panels': { name: 'Wall Panels' },
  handles: { name: 'Handles' },
  accessories: { name: 'Accessories' },
  other: { name: 'Other' },
};

export function getProductsByCategory(category: ProductCategory): HardwareProduct[] {
  return HARDWARE_PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string): HardwareProduct[] {
  const lowerQuery = query.toLowerCase();
  return HARDWARE_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.shortDescription.toLowerCase().includes(lowerQuery) ||
      (p.description?.toLowerCase().includes(lowerQuery) ?? false)
  );
}
