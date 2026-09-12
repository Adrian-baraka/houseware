# Houseware Tanzania - Premium Bespoke Cabinetry Website

Modern, premium website for Houseware Tanzania featuring bespoke cabinetry services, project portfolio, and hardware catalogue.

## Overview

This is a fully responsive Next.js 14 website built with:
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Images**: Next.js Image optimization

## Features

✨ **Premium Design**
- Large-format project imagery
- Sophisticated typography and spacing
- Elegant animations and transitions
- Professional navigation and UX

📋 **Comprehensive Pages**
- Home page with hero and featured projects
- Services overview with detailed service pages
- Project portfolio with filtering
- Detailed project case studies
- Hardware catalogue with search and filtering
- Consultation booking form
- Our Story page
- Locations and contact information

🔗 **Business Integration**
- WhatsApp integration throughout
- Consultation request forms
- Contact information management
- Easy content updates via centralized data files

📱 **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop excellence
- Zero horizontal scroll on mobile

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd houseware
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
houseware/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── services/          # Services pages
│   ├── projects/          # Projects portfolio pages
│   ├── hardware/          # Hardware catalogue
│   ├── book-consultation/ # Booking form
│   ├── our-story/         # About page
│   ├── locations/         # Contact and locations
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Top navigation
│   ├── Footer.tsx         # Footer
│   ├── HeroSection.tsx    # Hero component
│   ├── SectionTitle.tsx   # Section headings
│   ├── ProjectCard.tsx    # Project cards
│   ├── HardwareProductCard.tsx
│   └── WhatsAppButton.tsx
├── lib/                   # Utilities and data
│   ├── config.ts         # Configuration (WhatsApp, etc)
│   └── data/
│       ├── company.ts    # Company info, services, processes
│       ├── projects.ts   # Projects data
│       └── hardware.ts   # Hardware products data
├── public/               # Static assets
│   └── images/          # Project and product images
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Updating Content

### Company Information
Edit `lib/data/company.ts`:
- Company details
- Services
- How we work process
- Contact information
- Social media links

### Projects
Edit `lib/data/projects.ts`:
- Add new projects with images, descriptions, and specifications
- Update featured projects on homepage

### Hardware Products
Edit `lib/data/hardware.ts`:
- Add/edit hardware products
- Manage categories
- Update prices and availability

### WhatsApp Configuration
Edit `lib/config.ts`:
- Update `WHATSAPP_NUMBER` with your business WhatsApp number
- Format: `255XXXXXXXXX` (Tanzania country code + number)

## Image Management

Images are organized in `/public/images/`:
```
public/images/
├── projects/           # Project images
├── services/          # Service category images
├── hardware/          # Product images
├── about/            # About page images
└── placeholder.svg   # Fallback placeholder
```

### Adding Images
1. Optimize images (recommended dimensions are provided in component comments)
2. Place in appropriate `/public/images/` subfolder
3. Use descriptive filenames
4. Reference in data files with full path (e.g., `/images/projects/kitchen-dar.jpg`)

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Docker
```bash
docker build -t houseware .
docker run -p 3000:3000 houseware
```

## Performance Optimization

- Next.js Image optimization for automatic format conversion
- Lazy loading on images below the fold
- Code splitting and dynamic imports
- CSS optimization with Tailwind
- Minification in production

## SEO

- Semantic HTML structure
- Meta tags and Open Graph support
- Sitemap generation
- Schema markup ready
- Mobile-friendly design
- Fast page load times

## Accessibility

- Keyboard navigation support  
- Proper color contrast ratios
- Alt text on all images
- ARIA labels where appropriate
- Reduced motion preferences respected
- Semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Configuration Files

### `.env.local`
```
NEXT_PUBLIC_SITE_URL=https://housewwaretz.com
NEXT_PUBLIC_WHATSAPP_NUMBER=255XXXXXXXXX
```

### `tailwind.config.js`
Houseware brand colors and custom theme configuration

### `next.config.js`
Image optimization and experimental features

## Troubleshooting

### Images Not Showing
1. Check file path is correct in data files
2. Verify image file exists in `/public` folder
3. Check capitalization matches exactly
4. Ensure filename has correct extension

### WhatsApp Links Not Working
1. Verify `WHATSAPP_NUMBER` is set in `lib/config.ts`
2. Use format: `255XXXXXXXXX` (no + or spaces)
3. Test WhatsApp link in browser

### Build Errors
1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run type-check`

## Development Guidelines

- Use TypeScript for type safety
- Follow component naming conventions
- Keep data separate from presentation
- Use centralized configuration
- Test on mobile during development
- Check console for warnings/errors

## Support & Maintenance

For ongoing maintenance:
1. Keep dependencies updated
2. Monitor performance metrics
3. Test new features on multiple devices
4. Regular SEO audits
5. User feedback implementation

## License

[Your License Here]

## Contact

For website maintenance and updates:
- Email: housewaretanzania@gmail.com
- WhatsApp: +255714881668 (0714 881 668)
