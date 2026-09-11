# HOUSEWARE WEBSITE - CONTENT EDITING GUIDE

Quick reference for updating website content without touching code.

## 📝 Where to Find Everything

### Company Information
**File**: `lib/data/company.ts`

Update these fields:
```typescript
COMPANY_INFO = {
  phone: "Your phone number",
  whatsapp: "Your WhatsApp number",
  email: "Your email",
  locations: [ { ... } ],  // Office locations
  social: { ... },          // Instagram, Facebook, TikTok
  founded: "Year",          // When company started
  description: "Story",     // Company history
}
```

**Services** (also in company.ts):
```typescript
SERVICES = [
  { name: "Kitchens", description: "...", longDescription: "...", image: "/images/..." },
  // ... other services
]
```

**How We Work** (also in company.ts):
```typescript
HOW_WE_WORK = [
  { step: "01", title: "Consultation", description: "..." },
  // ... 6 steps
]
```

### Projects Portfolio
**File**: `lib/data/projects.ts`

Add new projects:
```typescript
{
  id: "unique-id",
  title: "Project Name",
  slug: "project-name",  // Used in URL
  location: "Dar es Salaam",
  type: "kitchen",  // kitchen, wardrobe, tv-cabinet, full-interior, other
  shortDescription: "One line description",
  description: "Longer description",
  designApproach: "How we approached it",
  materials: "Materials used",
  finishes: "Finish types",
  keyFeatures: ["Feature 1", "Feature 2"],
  featuredImage: "/images/projects/image.jpg",
  gallery: ["/images/projects/img1.jpg", "/images/projects/img2.jpg"],
  year: 2023,
}
```

### Hardware Products
**File**: `lib/data/hardware.ts`

Add new products:
```typescript
{
  id: "unique-id",
  name: "Product Name",
  category: "hinges",  // See categories below
  shortDescription: "Brief description",
  description: "Full description",
  image: "/images/hardware/product.jpg",
  priceDisplay: "Price on request",  // or actual price
  availability: "in-stock",  // in-stock, limited, on-order
  materials: "Steel",
  colors: ["Color 1", "Color 2"],
  specifications: { key: "value" },
}
```

**Hardware Categories**:
- hinges
- drawer-slides
- cabinet-organisers
- kitchen-organisers
- wall-panels
- handles
- accessories
- other

### WhatsApp Configuration
**File**: `lib/config.ts`

```typescript
export const WHATSAPP_NUMBER = "255XXXXXXXXX";  // Tanzania number only
```

## 📸 Images

### Where to Put Images
```
/public/images/
├── projects/          ← Project images
├── services/          ← Service category images
├── hardware/          ← Product images
├── about/            ← About page images
└── placeholder.svg   ← Fallback (leaves as is)
```

### Naming Convention
- Use descriptive lowercase names
- Replace spaces with hyphens
- Include location if relevant

Examples:
- `modern-kitchen-dar-es-salaam.jpg`
- `soft-close-hinge-detail.jpg`
- `master-wardrobe-dar.jpg`

### Image Sizes (Recommended)
- Hero images: 1920x1200px or larger
- Project featured image: 1200x800px
- Product images: 800x800px
- Gallery images: 1200x800px

### Update Image Paths
After adding images, update the data files:

```typescript
// In lib/data/projects.ts
featuredImage: "/images/projects/kitchenname.jpg",
gallery: [
  "/images/projects/kitchen1.jpg",
  "/images/projects/kitchen2.jpg",
]

// In lib/data/hardware.ts
image: "/images/hardware/product-name.jpg"

// In lib/data/company.ts
image: "/images/services/service-name.jpg"
```

## 🔗 Links

All internal links automatically work:
- `/` - Homepage
- `/services` - Services page
- `/services/kitchens` - Kitchen services
- `/services/wardrobes` - Wardrobe services
- `/services/tv-cabinets` - TV cabinet services
- `/services/bespoke` - Bespoke cabinetry
- `/projects` - Projects page
- `/projects/project-slug` - Individual project
- `/hardware` - Hardware catalogue
- `/book-consultation` - Booking form
- `/our-story` - About page
- `/locations` - Contact & locations

## ✉️ WhatsApp Messaging

**Automatic Messages** (based on context):

Homepage button:
"Hello Houseware, I would like to enquire about your services."

Kitchen service page:
"Hello Houseware, I am interested in a custom kitchen."

Hardware product:
"Hello Houseware, I am interested in the [PRODUCT NAME]. Could you please provide availability and pricing?"

Consultation form:
Pre-filled with project details entered

## 🛠️ Common Tasks

### Add a New Project

1. Get project images ready (1200x800px recommended)
2. Place in `/public/images/projects/`
3. Open `lib/data/projects.ts`
4. Copy an existing project object
5. Update all fields:
   - title, slug, location, type
   - description, designApproach
   - materials, finishes, keyFeatures
   - featuredImage path
   - gallery image paths
6. Save file - it will appear immediately!

### Add a New Hardware Product

1. Get product image (800x800px)
2. Place in `/public/images/hardware/`
3. Open `lib/data/hardware.ts`
4. Copy an existing product
5. Update fields:
   - name, category, description
   - image path
   - availability status
6. Save - product appears in catalogue!

### Update Contact Information

1. Open `lib/data/company.ts`
2. Update `COMPANY_INFO.phone`, `.whatsapp`, `.email`
3. Update `locations` array
4. Update `social` links
5. Save - updates everywhere!

### Change WhatsApp Number

1. Open `lib/config.ts`
2. Update `WHATSAPP_NUMBER`
3. Format: `255XXXXXXXXX` (no +, no spaces)
4. All WhatsApp links update automatically

### Update Company Story

1. Open `lib/data/company.ts`
2. Update `COMPANY_INFO.description`
3. Update `COMPANY_INFO.founded`
4. These appear on `/our-story` page

### Modify Navigation

Navigation links are hardcoded in `components/Navigation.tsx` and `components/Footer.tsx`. To change:
1. Edit `components/Navigation.tsx` (lines ~40-60)
2. Edit `components/Footer.tsx` (lines ~40-80)
3. Pages route to correct URLs

### Update Colors/Branding

1. Open `tailwind.config.js`
2. Edit color definitions in `colors` section
3. Update:
   - `hw-cream` - background
   - `hw-charcoal` - main text
   - `hw-warm` - accent/CTA
   - `hw-taupe` - secondary text
   - `hw-sage` - hover states
4. All components use these colors

## 🔍 Quality Checklist

Before launching, verify:

- [ ] All images appear (no broken image placeholders)
- [ ] All projects have images
- [ ] All hardware products have images
- [ ] Company info is correct
- [ ] WhatsApp number is correct and formatted: `255XXXXXXXXX`
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] WhatsApp buttons work on mobile
- [ ] Mobile menu opens/closes
- [ ] Spelling and grammar checked
- [ ] Phone numbers formatted correctly
- [ ] Email addresses correct
- [ ] Social media links work
- [ ] No console errors in browser
- [ ] Images load on slow connection
- [ ] Mobile responsive tested

## 💡 Pro Tips

1. **Use Descriptive Slugs**: `modern-kitchen-dar` is better than `project-1`
2. **Optimize Images**: Use TinyPNG or similar before uploading
3. **Test on Mobile**: Always check on phone before publishing
4. **Check Links**: Test all links work, especially WhatsApp
5. **Backup Data**: Keep copies of lib/data files before major changes
6. **Consistent Formatting**: Keep style consistent across descriptions

## 🆘 Troubleshooting

### Images Not Showing
- Check file path in data file
- Verify file exists in `/public/images/`
- Check capitalization matches exactly
- Ensure no typos in filename

### WhatsApp Links Not Working
- Verify number format: `255XXXXXXXXX`
- No + symbol, no spaces
- Number should be 12 digits total

### Changes Not Appearing
- Text might be cached
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check syntax in TypeScript files

### Form Not Submitting
- Check all required fields are filled
- Check browser console for errors
- Ensure email format is valid

## 📞 Support

For technical questions, refer to:
- `README.md` - Full documentation
- `IMPLEMENTATION_SUMMARY.md` - Overview and setup
- `.tsx` files - Component comments
- `lib/data/` files comment explanations

---

**Last Updated**: Current
**Framework**: Next.js 14 with TypeScript
