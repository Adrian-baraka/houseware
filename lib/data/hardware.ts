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

export type ProductGroup = 'hardware' | 'skirting' | 'organizers';

export interface HardwareProduct {
  id: string;
  name: string;
  category: ProductCategory;
  group: ProductGroup;
  shortDescription: string;
  description?: string;
  image: string;
  price?: string | number;
  priceDisplay: string;
  unit: string;
  availability: 'in-stock' | 'limited' | 'on-order';
  specifications?: Record<string, string>;
  materials?: string;
  colors?: string[];
  sku: string;
}

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  // HINGES
  {
    id: 'h-011',
    name: '2D Hydraulic Hinge (Full Overlay)',
    category: 'hinges',
    group: 'hardware',
    shortDescription: 'Stainless steel 2D hydraulic hinge for full overlay cabinet doors.',
    description: 'Premium 2D adjustable hydraulic hinge made from stainless steel. Designed for full overlay cabinet doors with soft-close functionality.',
    image: '/images/catalogue/H-011_2d_hinge_full_overlay.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'H-011',
    specifications: {
      type: '2D Hydraulic',
      overlay: 'Full Overlay',
      material: 'Stainless Steel',
    },
  },
  {
    id: 'h-012',
    name: '2D Hydraulic Hinge (Half Overlay)',
    category: 'hinges',
    group: 'hardware',
    shortDescription: 'Stainless steel 2D hydraulic hinge for half overlay cabinet doors.',
    description: 'Premium 2D adjustable hydraulic hinge made from stainless steel. Designed for half overlay cabinet doors with soft-close functionality.',
    image: '/images/catalogue/H-012_2d_hinge_half_overlay.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'H-012',
    specifications: {
      type: '2D Hydraulic',
      overlay: 'Half Overlay',
      material: 'Stainless Steel',
    },
  },
  {
    id: 'h-013',
    name: '2D Hydraulic Hinge (Inset Overlay)',
    category: 'hinges',
    group: 'hardware',
    shortDescription: 'Stainless steel 2D hydraulic hinge for inset overlay cabinet doors.',
    description: 'Premium 2D adjustable hydraulic hinge made from stainless steel. Designed for inset overlay cabinet doors with soft-close functionality.',
    image: '/images/catalogue/H-013_2d_hinge_inset_overlay.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'H-013',
    specifications: {
      type: '2D Hydraulic',
      overlay: 'Inset Overlay',
      material: 'Stainless Steel',
    },
  },
  {
    id: 'h-021',
    name: '3D Hydraulic Hinge (Full Overlay)',
    category: 'hinges',
    group: 'hardware',
    shortDescription: 'Stainless steel 3D hydraulic hinge for full overlay cabinet doors.',
    description: 'Premium 3D adjustable hydraulic hinge made from stainless steel. Designed for full overlay cabinet doors with soft-close functionality and 3-way adjustment.',
    image: '/images/placeholder.svg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'H-021',
    specifications: {
      type: '3D Hydraulic',
      overlay: 'Full Overlay',
      material: 'Stainless Steel',
    },
  },
  {
    id: 'h-022',
    name: '3D Hydraulic Hinge (Half Overlay)',
    category: 'hinges',
    group: 'hardware',
    shortDescription: 'Stainless steel 3D hydraulic hinge for half overlay cabinet doors.',
    description: 'Premium 3D adjustable hydraulic hinge made from stainless steel. Designed for half overlay cabinet doors with soft-close functionality and 3-way adjustment.',
    image: '/images/placeholder.svg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'H-022',
    specifications: {
      type: '3D Hydraulic',
      overlay: 'Half Overlay',
      material: 'Stainless Steel',
    },
  },
  {
    id: 'h-023',
    name: '3D Hydraulic Hinge (Inset Overlay)',
    category: 'hinges',
    group: 'hardware',
    shortDescription: 'Stainless steel 3D hydraulic hinge for inset overlay cabinet doors.',
    description: 'Premium 3D adjustable hydraulic hinge made from stainless steel. Designed for inset overlay cabinet doors with soft-close functionality and 3-way adjustment.',
    image: '/images/placeholder.svg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'H-023',
    specifications: {
      type: '3D Hydraulic',
      overlay: 'Inset Overlay',
      material: 'Stainless Steel',
    },
  },
  // DRAWER RAILS
  {
    id: 'd-011',
    name: 'Undermount Soft Close Drawer Rail 10"',
    category: 'drawer-slides',
    group: 'hardware',
    shortDescription: '10" undermount soft-close drawer rail with 40kg load capacity.',
    description: 'High-quality undermount soft-close drawer rail made from steel. 10" (250mm) size with 40kg load rating.',
    image: '/images/catalogue/D-011_drawer_rail_10in.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Steel',
    sku: 'D-011',
    specifications: {
      size: '10" (250mm)',
      load: '40kg',
      material: 'Steel',
      type: 'Undermount Soft Close',
    },
  },
  {
    id: 'd-012',
    name: 'Undermount Soft Close Drawer Rail 12"',
    category: 'drawer-slides',
    group: 'hardware',
    shortDescription: '12" undermount soft-close drawer rail with 40kg load capacity.',
    description: 'High-quality undermount soft-close drawer rail made from steel. 12" (300mm) size with 40kg load rating.',
    image: '/images/catalogue/D-012_drawer_rail_12in.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Steel',
    sku: 'D-012',
    specifications: {
      size: '12" (300mm)',
      load: '40kg',
      material: 'Steel',
      type: 'Undermount Soft Close',
    },
  },
  {
    id: 'd-013',
    name: 'Undermount Soft Close Drawer Rail 14"',
    category: 'drawer-slides',
    group: 'hardware',
    shortDescription: '14" undermount soft-close drawer rail with 40kg load capacity.',
    description: 'High-quality undermount soft-close drawer rail made from steel. 14" (350mm) size with 40kg load rating.',
    image: '/images/catalogue/D-013_drawer_rail_14in.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Steel',
    sku: 'D-013',
    specifications: {
      size: '14" (350mm)',
      load: '40kg',
      material: 'Steel',
      type: 'Undermount Soft Close',
    },
  },
  {
    id: 'd-014',
    name: 'Undermount Soft Close Drawer Rail 18"',
    category: 'drawer-slides',
    group: 'hardware',
    shortDescription: '18" undermount soft-close drawer rail with 40kg load capacity.',
    description: 'High-quality undermount soft-close drawer rail made from steel. 18" (450mm) size with 40kg load rating.',
    image: '/images/catalogue/D-014_drawer_rail_18in.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Steel',
    sku: 'D-014',
    specifications: {
      size: '18" (450mm)',
      load: '40kg',
      material: 'Steel',
      type: 'Undermount Soft Close',
    },
  },
  // LIFT-UP SYSTEMS
  {
    id: 'l-011',
    name: 'Cabinet Stay Lift Up System',
    category: 'accessories',
    group: 'hardware',
    shortDescription: 'Steel cabinet stay lift-up system with 90° opening angle.',
    description: 'Durable steel lift-up system for cabinet doors. Opens to 90° angle with smooth operation.',
    image: '/images/catalogue/L-011_cabinet_stay_lift_up.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Steel',
    sku: 'L-011',
    specifications: {
      material: 'Steel',
      angle: '90°',
      type: 'Cabinet Stay Lift Up',
    },
  },
  {
    id: 'l-012',
    name: 'Shook Lift Up System',
    category: 'accessories',
    group: 'hardware',
    shortDescription: 'Steel shook lift-up system with 90° opening angle.',
    description: 'Durable steel shook lift-up system for cabinet doors. Opens to 90° angle with smooth operation.',
    image: '/images/catalogue/L-012_shook_lift_up.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Steel',
    sku: 'L-012',
    specifications: {
      material: 'Steel',
      angle: '90°',
      type: 'Shook Lift Up',
    },
  },
  // PVC SKIRTING
  {
    id: 'p-011',
    name: 'PVC Skirting 15cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: 'PVC skirting board 15cm x 400cm in black & silver.',
    description: 'High-quality PVC skirting board. Size 15cm x 400cm, available in black and silver colors.',
    image: '/images/catalogue/P-011_pvc_skirting_15cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'P-011',
    specifications: {
      size: '15cm x 400cm',
      colour: 'Black & Silver',
      material: 'PVC',
    },
  },
  {
    id: 'p-012',
    name: 'PVC Skirting 10cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: 'PVC skirting board 10cm x 400cm in black & silver.',
    description: 'High-quality PVC skirting board. Size 10cm x 400cm, available in black and silver colors.',
    image: '/images/catalogue/P-012_pvc_skirting_10cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'P-012',
    specifications: {
      size: '10cm x 400cm',
      colour: 'Black & Silver',
      material: 'PVC',
    },
  },
  // PVC CONNECTORS
  {
    id: 'c-011',
    name: 'PVC Connector 10cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: 'Straight PVC connector 10cm in black & silver.',
    description: 'PVC straight connector for skirting boards. 10cm size, black and silver colors.',
    image: '/images/catalogue/C-011_connector_10cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'C-011',
    specifications: {
      size: '10cm',
      material: 'PVC',
      colour: 'Black & Silver',
      type: 'Straight Connector',
    },
  },
  {
    id: 'c-012',
    name: 'PVC Connector 15cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: 'Straight PVC connector 15cm in black & silver.',
    description: 'PVC straight connector for skirting boards. 15cm size, black and silver colors.',
    image: '/images/catalogue/C-012_connector_15cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'C-012',
    specifications: {
      size: '15cm',
      material: 'PVC',
      colour: 'Black & Silver',
      type: 'Straight Connector',
    },
  },
  {
    id: 'c-021',
    name: '90° PVC Connector 10cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: '90° angle PVC connector 10cm in black & silver.',
    description: 'PVC 90° angle connector for skirting boards. 10cm size, black and silver colors.',
    image: '/images/catalogue/C-021_connector_90deg_10cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'C-021',
    specifications: {
      size: '10cm',
      angle: '90°',
      colour: 'Black & Silver',
      material: 'PVC',
      type: '90° Connector',
    },
  },
  {
    id: 'c-022',
    name: '90° PVC Connector 15cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: '90° angle PVC connector 15cm in black & silver.',
    description: 'PVC 90° angle connector for skirting boards. 15cm size, black and silver colors.',
    image: '/images/catalogue/C-022_connector_90deg_15cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'C-022',
    specifications: {
      size: '15cm',
      angle: '90°',
      colour: 'Black & Silver',
      material: 'PVC',
      type: '90° Connector',
    },
  },
  {
    id: 'c-031',
    name: '180° PVC Connector 10cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: '180° straight PVC connector 10cm in black & silver.',
    description: 'PVC 180° straight connector for skirting boards. 10cm size, black and silver colors.',
    image: '/images/catalogue/C-031_connector_180deg_10cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'C-031',
    specifications: {
      size: '10cm',
      angle: '180°',
      colour: 'Black & Silver',
      material: 'PVC',
      type: '180° Connector',
    },
  },
  {
    id: 'c-032',
    name: '180° PVC Connector 15cm',
    category: 'accessories',
    group: 'skirting',
    shortDescription: '180° straight PVC connector 15cm in black & silver.',
    description: 'PVC 180° straight connector for skirting boards. 15cm size, black and silver colors.',
    image: '/images/catalogue/C-032_connector_180deg_15cm.jpg',
    priceDisplay: '600',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'PVC',
    colors: ['Black', 'Silver'],
    sku: 'C-032',
    specifications: {
      size: '15cm',
      angle: '180°',
      colour: 'Black & Silver',
      material: 'PVC',
      type: '180° Connector',
    },
  },
  // KITCHEN ORGANIZERS
  {
    id: 'ko-011',
    name: 'Spice Rack',
    category: 'kitchen-organisers',
    group: 'organizers',
    shortDescription: 'Stainless steel spice rack for 30-35cm or 45cm cabinet width.',
    description: 'Premium stainless steel spice rack organizer. Fits cabinet widths of 30-35cm or 45cm.',
    image: '/images/catalogue/KO-011_spice_rack.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'KO-011',
    specifications: {
      material: 'Stainless Steel',
      cabinet_width: '30–35cm / 45cm',
      type: 'Spice Rack',
    },
  },
  {
    id: 'ko-012',
    name: 'Cutlery Organizer',
    category: 'kitchen-organisers',
    group: 'organizers',
    shortDescription: 'Stainless steel cutlery organizer for 60cm or 90cm cabinet width.',
    description: 'Premium stainless steel cutlery organizer. Fits cabinet widths of 60cm or 90cm.',
    image: '/images/catalogue/KO-012_cutlery_organizer.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'KO-012',
    specifications: {
      material: 'Stainless Steel',
      cabinet_width: '60cm / 90cm',
      type: 'Cutlery Organizer',
    },
  },
  {
    id: 'ko-013',
    name: 'Corner Organizer',
    category: 'kitchen-organisers',
    group: 'organizers',
    shortDescription: 'Stainless steel corner organizer for 108-110cm cabinet width.',
    description: 'Premium stainless steel corner organizer. Fits cabinet widths of 108-110cm.',
    image: '/images/catalogue/KO-013_corner_organizer.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'KO-013',
    specifications: {
      material: 'Stainless Steel',
      cabinet_width: '108–110cm',
      type: 'Corner Organizer',
    },
  },
  {
    id: 'ko-014',
    name: 'Built-in Dustbin',
    category: 'kitchen-organisers',
    group: 'organizers',
    shortDescription: 'Stainless steel built-in dustbin for 40-45cm cabinet width.',
    description: 'Premium stainless steel built-in dustbin. Fits cabinet widths of 40-45cm.',
    image: '/images/catalogue/KO-014_builtin_dustbin.jpg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'KO-014',
    specifications: {
      material: 'Stainless Steel',
      cabinet_width: '40–45cm',
      type: 'Built-in Dustbin',
    },
  },
  {
    id: 'ko-015',
    name: 'Pull-Out Pantry Organizer 60cm',
    category: 'kitchen-organisers',
    group: 'organizers',
    shortDescription: 'Stainless steel pull-out pantry organizer for 60cm cabinet width.',
    description: 'Premium stainless steel pull-out pantry organizer. Fits cabinet width of 60cm.',
    image: '/images/placeholder.svg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'KO-015',
    specifications: {
      material: 'Stainless Steel',
      cabinet_width: '60cm',
      type: 'Pull-Out Pantry Organizer',
    },
  },
  {
    id: 'ko-016',
    name: 'Pull-Out Pantry Organizer 20cm',
    category: 'kitchen-organisers',
    group: 'organizers',
    shortDescription: 'Stainless steel pull-out pantry organizer for 20cm cabinet width.',
    description: 'Premium stainless steel pull-out pantry organizer. Fits cabinet width of 20cm.',
    image: '/images/placeholder.svg',
    priceDisplay: '600 Tshs',
    unit: 'Pair',
    availability: 'in-stock',
    materials: 'Stainless Steel',
    sku: 'KO-016',
    specifications: {
      material: 'Stainless Steel',
      cabinet_width: '20cm',
      type: 'Pull-Out Pantry Organizer',
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

export const PRODUCT_GROUPS: Record<ProductGroup, { name: string; categories: ProductCategory[] }> = {
  hardware: {
    name: 'Hardware',
    categories: ['hinges', 'drawer-slides', 'accessories'],
  },
  skirting: {
    name: 'Skirting',
    categories: ['accessories'],
  },
  organizers: {
    name: 'Organizers',
    categories: ['kitchen-organisers'],
  },
};

export function getProductsByCategory(category: ProductCategory): HardwareProduct[] {
  return HARDWARE_PRODUCTS.filter((p) => p.category === category);
}

export function getProductsByGroup(group: ProductGroup): HardwareProduct[] {
  const groupCategories = PRODUCT_GROUPS[group]?.categories || [];
  return HARDWARE_PRODUCTS.filter((p) => groupCategories.includes(p.category));
}

export function searchProducts(query: string): HardwareProduct[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return HARDWARE_PRODUCTS;
  
  return HARDWARE_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.shortDescription.toLowerCase().includes(lowerQuery) ||
      (p.description?.toLowerCase().includes(lowerQuery) ?? false) ||
      p.sku.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.group.toLowerCase().includes(lowerQuery) ||
      (p.materials?.toLowerCase().includes(lowerQuery) ?? false)
  );
}