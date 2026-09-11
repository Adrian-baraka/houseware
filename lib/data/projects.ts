/**
 * Houseware Projects - Portfolio Data
 */

export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  type: 'kitchen' | 'wardrobe' | 'tv-cabinet' | 'full-interior' | 'other';
  shortDescription: string;
  description: string;
  designApproach: string;
  materials?: string;
  finishes?: string;
  keyFeatures?: string[];
  featuredImage: string;
  gallery: string[];
  year?: number;
}

export const PROJECTS: Project[] = [
  {
    id: 'modern-kitchen-01',
    title: 'Modern Walnut Kitchen',
    slug: 'modern-walnut-kitchen',
    location: 'Dar es Salaam',
    type: 'kitchen',
    shortDescription: 'Contemporary kitchen cabinetry with walnut and marble accents.',
    description:
      'A sophisticated modern kitchen featuring warm walnut cabinetry paired with luxurious marble countertops. This project demonstrates the perfect balance between elegant aesthetics and practical functionality.',
    designApproach:
      'The design emphasizes premium materials and clean lines. Every element was carefully selected to create a cohesive, sophisticated kitchen that serves as both a functional workspace and a beautiful gathering space.',
    materials: 'Premium walnut veneer with marble countertops',
    finishes: 'Natural walnut with marble accents',
    keyFeatures: [
      'Custom walnut cabinetry',
      'Marble countertops',
      'Integrated appliances',
      'Soft-close doors and drawers',
      'Professional-grade layout',
    ],
    featuredImage: '/images/projects/houseware-kitchen-walnut-marble-04.jpg',
    gallery: [
      '/images/projects/houseware-kitchen-walnut-marble-04.jpg',
      '/images/projects/houseware-kitchen-warm-oak-03.jpg',
      '/images/projects/houseware-kitchen-taupe-island-05.jpg',
    ],
    year: 2024,
  },
  {
    id: 'scandi-kitchen-02',
    title: 'Scandinavian Light Kitchen',
    slug: 'scandinavian-light-kitchen',
    location: 'Dar es Salaam',
    type: 'kitchen',
    shortDescription: 'Bright, minimalist kitchen with Scandinavian design principles.',
    description:
      'A beautiful Scandinavian-inspired kitchen featuring light, natural materials and functional design. This project showcases how clean aesthetics and practicality can work together seamlessly.',
    designApproach:
      'We incorporated Scandinavian design principles focusing on simplicity, functionality, and natural light. The kitchen maximizes visibility and accessibility while maintaining a serene, uncluttered aesthetic.',
    materials: 'Light wood with clean finishes',
    finishes: 'Natural light finish with minimal hardware',
    keyFeatures: [
      'Light wood cabinetry',
      'Maximized natural light',
      'Minimal hardware design',
      'Open shelving options',
      'Efficient workflow',
    ],
    featuredImage: '/images/projects/houseware-kitchen-scandi-light-01.jpg',
    gallery: [
      '/images/projects/houseware-kitchen-scandi-light-01.jpg',
      '/images/projects/houseware-kitchen-handleless-white-02.jpg',
      '/images/projects/houseware-kitchen-white-minimal-08.jpg',
    ],
    year: 2024,
  },
  {
    id: 'greige-kitchen-03',
    title: 'Modern Greige Kitchen',
    slug: 'modern-greige-kitchen',
    location: 'Dar es Salaam',
    type: 'kitchen',
    shortDescription: 'Contemporary kitchen with sophisticated greige cabinetry.',
    description:
      'A modern kitchen featuring sophisticated greige cabinetry that creates a calm, elegant atmosphere. The neutral palette provides a perfect backdrop for both contemporary and transitional design styles.',
    designApproach:
      'This design demonstrates how neutral tones can create visual interest through texture and finish variations. The greige cabinets provide versatility while maintaining an upscale, contemporary feel.',
    materials: 'Premium lacquer finish cabinetry',
    finishes: 'Sophisticated greige with chrome accents',
    keyFeatures: [
      'Custom greige cabinetry',
      'Modern hardware',
      'Efficient storage solutions',
      'Clean aesthetic',
      'Versatile design',
    ],
    featuredImage: '/images/projects/houseware-kitchen-modern-greige-06.jpg',
    gallery: [
      '/images/projects/houseware-kitchen-modern-greige-06.jpg',
      '/images/projects/houseware-kitchen-oak-glass-display-07.jpg',
      '/images/projects/houseware-kitchen-japandi-wood-09.jpg',
    ],
    year: 2024,
  },
  {
    id: 'luxury-wardrobe-01',
    title: 'Luxury Walk-In Wardrobe',
    slug: 'luxury-walk-in-wardrobe',
    location: 'Dar es Salaam',
    type: 'wardrobe',
    shortDescription: 'Custom luxury walk-in wardrobe with comprehensive organization.',
    description:
      'A luxury custom wardrobe system designed for the discerning homeowner. This comprehensive walk-in wardrobe maximizes storage while keeping everything organized and easily accessible.',
    designApproach:
      'The design creates dedicated zones for different clothing types and accessories. Premium materials and thoughtful organization systems ensure that the wardrobe is as practical as it is beautiful.',
    materials: 'Premium plywood with walnut veneer',
    finishes: 'Warm walnut with brass hardware',
    keyFeatures: [
      'Full walk-in layout',
      'Adjustable shelving systems',
      'Pull-out storage solutions',
      'Integrated lighting',
      'Premium hardware finishes',
    ],
    featuredImage: '/images/projects/houseware-wardrobe-luxury-walkin-03.jpg',
    gallery: [
      '/images/projects/houseware-wardrobe-luxury-walkin-03.jpg',
      '/images/projects/houseware-wardrobe-neutral-walkin-08.jpg',
      '/images/projects/houseware-wardrobe-white-walkin-06.jpg',
    ],
    year: 2024,
  },
  {
    id: 'fitted-wardrobe-02',
    title: 'Fitted Wardrobe Suite',
    slug: 'fitted-wardrobe-suite',
    location: 'Dar es Salaam',
    type: 'wardrobe',
    shortDescription: 'Custom fitted wardrobe with greenish-grey finish.',
    description:
      'A beautifully fitted wardrobe that maximizes bedroom space. This project features a sophisticated colour palette with greenish-grey finishes that complement contemporary interiors.',
    designApproach:
      'The design respects the room dimensions while creating maximum storage. The colour choice adds visual interest while remaining neutral enough to work with various interior styles.',
    materials: 'Premium engineered wood with veneer finish',
    finishes: 'Greenish-grey with modern hardware',
    keyFeatures: [
      'Custom fitted to room dimensions',
      'Maximized storage capacity',
      'Modern greenish-grey finish',
      'Premium hardware',
      'Sleek contemporary design',
    ],
    featuredImage: '/images/projects/houseware-wardrobe-fitted-greygreen-01.jpg',
    gallery: [
      '/images/projects/houseware-wardrobe-fitted-greygreen-01.jpg',
      '/images/projects/houseware-wardrobe-oak-floortoceiling-02.jpg',
      '/images/projects/houseware-wardrobe-blackframe-glass-04.jpg',
    ],
    year: 2024,
  },
  {
    id: 'office-wardrobe-03',
    title: 'Integrated Office Wardrobe',
    slug: 'integrated-office-wardrobe',
    location: 'Dar es Salaam',
    type: 'wardrobe',
    shortDescription: 'Multi-functional wardrobe integrated into office space.',
    description:
      'A versatile wardrobe solution that combines residential comfort with office functionality. This project demonstrates how custom cabinetry can serve dual purposes in modern homes.',
    designApproach:
      'The design integrates seamlessly into the office environment while providing complete wardrobe storage. The solution maximizes functionality without sacrificing aesthetics.',
    materials: 'Premium plywood with integrated workspace',
    finishes: 'Modern finish with office-suitable design',
    keyFeatures: [
      'Office integration',
      'Dual functionality',
      'Comprehensive storage',
      'Professional aesthetic',
      'Space optimization',
    ],
    featuredImage: '/images/projects/houseware-wardrobe-office-integrated-07.jpg',
    gallery: [
      '/images/projects/houseware-wardrobe-office-integrated-07.jpg',
      '/images/projects/houseware-wardrobe-drawer-organisers-05.jpg',
      '/images/projects/houseware-wardrobe-fitted-greygreen-01.jpg',
    ],
    year: 2024,
  },
  {
    id: 'media-wall-01',
    title: 'Walnut Media Wall',
    slug: 'walnut-media-wall',
    location: 'Dar es Salaam',
    type: 'tv-cabinet',
    shortDescription: 'Sophisticated media wall with warm walnut finish and integrated lighting.',
    description:
      'A stunning media wall featuring warm walnut cabinetry with integrated lighting. This TV cabinet solution creates a focal point in any living space while providing excellent storage and cable management.',
    designApproach:
      'The design combines a striking walnut finish with subtle LED lighting that highlights the cabinetry details. The layout provides practical storage while maintaining clean sight lines.',
    materials: 'Premium walnut veneer with LED lighting',
    finishes: 'Warm walnut with integrated lighting',
    keyFeatures: [
      'Premium walnut cabinetry',
      'Integrated LED lighting',
      'Cable management system',
      'TV mounting solutions',
      'Additional storage',
    ],
    featuredImage: '/images/projects/houseware-tvwall-walnut-lit-01.jpg',
    gallery: [
      '/images/projects/houseware-tvwall-walnut-lit-01.jpg',
      '/images/projects/houseware-tvwall-dark-walnut-06.jpg',
      '/images/projects/houseware-tvwall-black-built-in-05.jpg',
    ],
    year: 2024,
  },
  {
    id: 'modern-tv-cabinet-02',
    title: 'Contemporary Slatted Media Wall',
    slug: 'contemporary-slatted-media-wall',
    location: 'Dar es Salaam',
    type: 'tv-cabinet',
    shortDescription: 'Modern media wall with slatted panel design and LED lighting.',
    description:
      'A contemporary media wall featuring innovative slatted panel design with integrated LED lighting. This striking TV cabinet solution adds architectural interest to any living room.',
    designApproach:
      'The slatted design creates visual depth and texture while the integrated LED lighting enhances the modern aesthetic. The solution provides excellent functionality with a bold visual statement.',
    materials: 'Premium wood with slatted panels and LED system',
    finishes: 'Modern with integrated lighting effects',
    keyFeatures: [
      'Slatted panel design',
      'LED accent lighting',
      'Contemporary aesthetic',
      'Practical storage',
      'Cable management',
    ],
    featuredImage: '/images/projects/houseware-tvwall-slatted-led-02.jpg',
    gallery: [
      '/images/projects/houseware-tvwall-slatted-led-02.jpg',
      '/images/projects/houseware-tvwall-slat-portrait-03.jpg',
      '/images/projects/houseware-tvwall-white-traditional-07.jpg',
    ],
    year: 2024,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByType(type: Project['type']): Project[] {
  return PROJECTS.filter((p) => p.type === type);
}
